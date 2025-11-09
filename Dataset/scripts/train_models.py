"""
Loan Default Prediction - Model Training Script
Trains 3 models: XGBoost, Logistic Regression, Random Forest
"""

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, roc_auc_score, classification_report, confusion_matrix
import xgboost as xgb
import joblib
import os
from datetime import datetime
from pathlib import Path

# Set random seed for reproducibility
np.random.seed(42)

# Get the script directory and Dataset root directory
SCRIPT_DIR = Path(__file__).parent.absolute()  # Dataset/scripts/
DATASET_ROOT = SCRIPT_DIR.parent.absolute()     # Dataset/

print("=" * 60)
print("Loan Default Prediction - Model Training")
print("=" * 60)

# Step 1: Load Dataset
print("\n[Step 1] Loading dataset...")
data_path = DATASET_ROOT / 'data' / 'raw' / 'Loan_default.csv'
df = pd.read_csv(data_path)
print(f"Dataset loaded: {df.shape[0]} rows, {df.shape[1]} columns")

# Step 2: Data Exploration
print("\n[Step 2] Data Exploration...")
print(f"Missing values: {df.isnull().sum().sum()}")
print(f"\nTarget distribution:")
print(df['Default'].value_counts())
print(f"\nTarget distribution (%):")
print(df['Default'].value_counts(normalize=True) * 100)

# Step 3: Data Preprocessing
print("\n[Step 3] Data Preprocessing...")

# Drop LoanID (not a feature)
X = df.drop(['LoanID', 'Default'], axis=1)
y = df['Default']

# Identify categorical and numerical columns
categorical_cols = X.select_dtypes(include=['object']).columns.tolist()
numerical_cols = X.select_dtypes(include=['int64', 'float64']).columns.tolist()

print(f"Categorical columns: {categorical_cols}")
print(f"Numerical columns: {numerical_cols}")

# Encode categorical variables
label_encoders = {}
X_encoded = X.copy()

for col in categorical_cols:
    le = LabelEncoder()
    X_encoded[col] = le.fit_transform(X[col].astype(str))
    label_encoders[col] = le
    print(f"Encoded {col}: {len(le.classes_)} unique values")

# Step 4: Train-Test Split
print("\n[Step 4] Splitting data...")
X_train, X_test, y_train, y_test = train_test_split(
    X_encoded, y, test_size=0.2, random_state=42, stratify=y
)

print(f"Training set: {X_train.shape[0]} samples")
print(f"Test set: {X_test.shape[0]} samples")

# Step 5: Feature Scaling (for Logistic Regression)
print("\n[Step 5] Scaling features for Logistic Regression...")
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Create models and results directories
models_dir = DATASET_ROOT / 'models'
results_dir = DATASET_ROOT / 'results'
os.makedirs(models_dir, exist_ok=True)
os.makedirs(results_dir, exist_ok=True)

# Step 6: Train Models
print("\n" + "=" * 60)
print("TRAINING MODELS")
print("=" * 60)

models = {}
results = {}

# Model 1: Logistic Regression
print("\n[Model 1] Training Logistic Regression...")
lr_model = LogisticRegression(random_state=42, max_iter=1000, class_weight='balanced')
lr_model.fit(X_train_scaled, y_train)
models['Logistic Regression'] = lr_model

# Predictions
lr_pred = lr_model.predict(X_test_scaled)
lr_pred_proba = lr_model.predict_proba(X_test_scaled)[:, 1]

# Metrics
lr_accuracy = accuracy_score(y_test, lr_pred)
lr_precision = precision_score(y_test, lr_pred)
lr_recall = recall_score(y_test, lr_pred)
lr_f1 = f1_score(y_test, lr_pred)
lr_auc = roc_auc_score(y_test, lr_pred_proba)

results['Logistic Regression'] = {
    'accuracy': lr_accuracy,
    'precision': lr_precision,
    'recall': lr_recall,
    'f1_score': lr_f1,
    'roc_auc': lr_auc
}

print(f"  Accuracy: {lr_accuracy:.4f}")
print(f"  Precision: {lr_precision:.4f}")
print(f"  Recall: {lr_recall:.4f}")
print(f"  F1-Score: {lr_f1:.4f}")
print(f"  ROC-AUC: {lr_auc:.4f}")

# Model 2: Random Forest
print("\n[Model 2] Training Random Forest...")
rf_model = RandomForestClassifier(
    n_estimators=100,
    max_depth=10,
    min_samples_split=5,
    min_samples_leaf=2,
    random_state=42,
    class_weight='balanced',
    n_jobs=-1
)
rf_model.fit(X_train, y_train)
models['Random Forest'] = rf_model

# Predictions
rf_pred = rf_model.predict(X_test)
rf_pred_proba = rf_model.predict_proba(X_test)[:, 1]

# Metrics
rf_accuracy = accuracy_score(y_test, rf_pred)
rf_precision = precision_score(y_test, rf_pred)
rf_recall = recall_score(y_test, rf_pred)
rf_f1 = f1_score(y_test, rf_pred)
rf_auc = roc_auc_score(y_test, rf_pred_proba)

results['Random Forest'] = {
    'accuracy': rf_accuracy,
    'precision': rf_precision,
    'recall': rf_recall,
    'f1_score': rf_f1,
    'roc_auc': rf_auc
}

print(f"  Accuracy: {rf_accuracy:.4f}")
print(f"  Precision: {rf_precision:.4f}")
print(f"  Recall: {rf_recall:.4f}")
print(f"  F1-Score: {rf_f1:.4f}")
print(f"  ROC-AUC: {rf_auc:.4f}")

# Model 3: XGBoost
print("\n[Model 3] Training XGBoost...")
xgb_model = xgb.XGBClassifier(
    n_estimators=100,
    max_depth=6,
    learning_rate=0.1,
    subsample=0.8,
    colsample_bytree=0.8,
    random_state=42,
    eval_metric='logloss',
    scale_pos_weight=(y_train == 0).sum() / (y_train == 1).sum()  # Handle class imbalance
)
xgb_model.fit(X_train, y_train)
models['XGBoost'] = xgb_model

# Predictions
xgb_pred = xgb_model.predict(X_test)
xgb_pred_proba = xgb_model.predict_proba(X_test)[:, 1]

# Metrics
xgb_accuracy = accuracy_score(y_test, xgb_pred)
xgb_precision = precision_score(y_test, xgb_pred)
xgb_recall = recall_score(y_test, xgb_pred)
xgb_f1 = f1_score(y_test, xgb_pred)
xgb_auc = roc_auc_score(y_test, xgb_pred_proba)

results['XGBoost'] = {
    'accuracy': xgb_accuracy,
    'precision': xgb_precision,
    'recall': xgb_recall,
    'f1_score': xgb_f1,
    'roc_auc': xgb_auc
}

print(f"  Accuracy: {xgb_accuracy:.4f}")
print(f"  Precision: {xgb_precision:.4f}")
print(f"  Recall: {xgb_recall:.4f}")
print(f"  F1-Score: {xgb_f1:.4f}")
print(f"  ROC-AUC: {xgb_auc:.4f}")

# Step 7: Model Comparison
print("\n" + "=" * 60)
print("MODEL COMPARISON")
print("=" * 60)

comparison_df = pd.DataFrame(results).T
comparison_df = comparison_df.sort_values('roc_auc', ascending=False)
print("\n" + comparison_df.to_string())

# Step 8: Save Models and Preprocessing Objects
print("\n[Step 8] Saving models and preprocessing objects...")

# Save models
joblib.dump(lr_model, models_dir / 'logistic_regression_model.pkl')
joblib.dump(rf_model, models_dir / 'random_forest_model.pkl')
joblib.dump(xgb_model, models_dir / 'xgboost_model.pkl')

# Save preprocessing objects
joblib.dump(scaler, models_dir / 'scaler.pkl')
joblib.dump(label_encoders, models_dir / 'label_encoders.pkl')

# Save feature names
joblib.dump(list(X_encoded.columns), models_dir / 'feature_names.pkl')

# Save results
comparison_df.to_csv(results_dir / 'model_comparison.csv')
print("Models and preprocessing objects saved to 'models/' directory")
print("Results saved to 'results/model_comparison.csv'")

# Step 9: Detailed Reports
print("\n[Step 9] Generating detailed reports...")

# Save detailed classification reports
with open(results_dir / 'classification_reports.txt', 'w') as f:
    f.write("=" * 60 + "\n")
    f.write("CLASSIFICATION REPORTS\n")
    f.write("=" * 60 + "\n\n")
    
    for model_name, model in models.items():
        f.write(f"\n{model_name}\n")
        f.write("-" * 60 + "\n")
        if model_name == 'Logistic Regression':
            pred = lr_pred
        elif model_name == 'Random Forest':
            pred = rf_pred
        else:
            pred = xgb_pred
        
        f.write(classification_report(y_test, pred))
        f.write("\nConfusion Matrix:\n")
        f.write(str(confusion_matrix(y_test, pred)))
        f.write("\n\n")

print("Detailed reports saved to 'results/classification_reports.txt'")

# Step 10: Feature Importance (for tree-based models)
print("\n[Step 10] Feature Importance Analysis...")

# Random Forest Feature Importance
rf_importance = pd.DataFrame({
    'feature': X_train.columns,
    'importance': rf_model.feature_importances_
}).sort_values('importance', ascending=False)

# XGBoost Feature Importance
xgb_importance = pd.DataFrame({
    'feature': X_train.columns,
    'importance': xgb_model.feature_importances_
}).sort_values('importance', ascending=False)

# Save feature importance
rf_importance.to_csv(results_dir / 'random_forest_feature_importance.csv', index=False)
xgb_importance.to_csv(results_dir / 'xgboost_feature_importance.csv', index=False)

print("\nTop 10 Features - Random Forest:")
print(rf_importance.head(10).to_string(index=False))
print("\nTop 10 Features - XGBoost:")
print(xgb_importance.head(10).to_string(index=False))

print("\n" + "=" * 60)
print("TRAINING COMPLETE!")
print("=" * 60)
print(f"\nBest Model (by ROC-AUC): {comparison_df.index[0]}")
print(f"ROC-AUC Score: {comparison_df.iloc[0]['roc_auc']:.4f}")
print(f"\nAll models saved in 'models/' directory")
print(f"All results saved in 'results/' directory")

