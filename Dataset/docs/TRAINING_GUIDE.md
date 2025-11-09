# Loan Default Prediction - Model Training Guide

## Overview
This guide explains the complete process of training machine learning models to predict loan defaults using the Loan Default Prediction dataset.

**Dataset**: Loan_default.csv  
**Models Trained**: Logistic Regression, Random Forest, XGBoost  
**Target Variable**: Default (0 = No Default, 1 = Default)

---

## Dataset Information

### Dataset Statistics
- **Total Records**: 255,347
- **Features**: 17 (excluding LoanID and Default)
- **Target Distribution**:
  - No Default (0): 225,694 (88.4%)
  - Default (1): 29,653 (11.6%)
- **Missing Values**: None

### Features
1. **LoanID** - Unique identifier (excluded from training)
2. **Age** - Borrower age
3. **Income** - Annual income
4. **LoanAmount** - Loan amount requested
5. **CreditScore** - Credit score
6. **MonthsEmployed** - Employment duration in months
7. **NumCreditLines** - Number of credit lines
8. **InterestRate** - Interest rate
9. **LoanTerm** - Loan term in months
10. **DTIRatio** - Debt-to-income ratio
11. **Education** - Education level (categorical)
12. **EmploymentType** - Employment type (categorical)
13. **MaritalStatus** - Marital status (categorical)
14. **HasMortgage** - Has mortgage (Yes/No)
15. **HasDependents** - Has dependents (Yes/No)
16. **LoanPurpose** - Purpose of loan (categorical)
17. **HasCoSigner** - Has co-signer (Yes/No)
18. **Default** - Target variable (0/1)

---

## Training Process Steps

### Step 1: Data Loading
- Load the CSV file using pandas
- Check dataset shape and basic information
- Verify data types

### Step 2: Data Exploration
- Check for missing values
- Analyze target variable distribution
- Identify class imbalance (88.4% vs 11.6%)
- Examine feature distributions

### Step 3: Data Preprocessing

#### 3.1 Feature Separation
- Separate features (X) from target (y)
- Drop LoanID (not a predictive feature)
- Drop Default (target variable)

#### 3.2 Categorical Encoding
- Identify categorical columns:
  - Education
  - EmploymentType
  - MaritalStatus
  - HasMortgage
  - HasDependents
  - LoanPurpose
  - HasCoSigner
- Apply Label Encoding to convert categorical to numerical
- Save encoders for later use in prediction

#### 3.3 Feature Scaling
- Apply StandardScaler for Logistic Regression
- Tree-based models (RF, XGBoost) don't require scaling
- Save scaler for later use

### Step 4: Train-Test Split
- Split ratio: 80% training, 20% testing
- Use stratified split to maintain class distribution
- Random seed: 42 (for reproducibility)
- Training set: ~204,277 samples
- Test set: ~51,070 samples

### Step 5: Model Training

#### 5.1 Logistic Regression
- **Algorithm**: Linear model with sigmoid activation
- **Hyperparameters**:
  - max_iter: 1000
  - class_weight: 'balanced' (handles class imbalance)
  - random_state: 42
- **Scaling**: Required (uses StandardScaler)
- **Pros**: Highly interpretable, fast training
- **Cons**: Assumes linear relationships

#### 5.2 Random Forest
- **Algorithm**: Ensemble of decision trees
- **Hyperparameters**:
  - n_estimators: 100
  - max_depth: 10
  - min_samples_split: 5
  - min_samples_leaf: 2
  - class_weight: 'balanced'
  - n_jobs: -1 (use all CPU cores)
- **Scaling**: Not required
- **Pros**: Robust, handles non-linear patterns, feature importance
- **Cons**: Less interpretable than linear models

#### 5.3 XGBoost
- **Algorithm**: Gradient boosting
- **Hyperparameters**:
  - n_estimators: 100
  - max_depth: 6
  - learning_rate: 0.1
  - subsample: 0.8
  - colsample_bytree: 0.8
  - scale_pos_weight: Calculated from class distribution
- **Scaling**: Not required
- **Pros**: High accuracy, fast, feature importance
- **Cons**: Requires hyperparameter tuning for optimal performance

### Step 6: Model Evaluation

#### Metrics Used
1. **Accuracy**: Overall correctness
2. **Precision**: True positives / (True positives + False positives)
3. **Recall**: True positives / (True positives + False negatives)
4. **F1-Score**: Harmonic mean of precision and recall
5. **ROC-AUC**: Area under ROC curve (best for imbalanced data)

#### Evaluation Process
- Make predictions on test set
- Calculate all metrics for each model
- Compare models side-by-side
- Identify best performing model

### Step 7: Model Comparison
- Create comparison table with all metrics
- Sort by ROC-AUC (primary metric for imbalanced data)
- Identify best model
- Generate detailed classification reports

### Step 8: Model Saving
- Save all trained models as .pkl files
- Save preprocessing objects (scaler, label encoders)
- Save feature names for reference
- Save model comparison results

### Step 9: Feature Importance Analysis
- Extract feature importance from tree-based models
- Identify most important features for predictions
- Save feature importance rankings
- Useful for model explainability

---

## How to Run Training

### Prerequisites
Install required Python packages:
```bash
pip install pandas numpy scikit-learn xgboost joblib
```

### Running the Training Script

1. **Navigate to Dataset folder**:
   ```bash
   cd Dataset
   ```

2. **Run the training script**:
   ```bash
   python train_models.py
   ```

3. **Wait for completion** (may take 5-15 minutes depending on your system)

4. **Check outputs**:
   - Models saved in `models/` folder
   - Results saved in `results/` folder

---

## Output Files

### Models Directory (`models/`)
- `logistic_regression_model.pkl` - Trained Logistic Regression model
- `random_forest_model.pkl` - Trained Random Forest model
- `xgboost_model.pkl` - Trained XGBoost model
- `scaler.pkl` - StandardScaler for feature scaling
- `label_encoders.pkl` - Label encoders for categorical features
- `feature_names.pkl` - List of feature names in order

### Results Directory (`results/`)
- `model_comparison.csv` - Comparison table with all metrics
- `classification_reports.txt` - Detailed classification reports for each model
- `random_forest_feature_importance.csv` - Feature importance from Random Forest
- `xgboost_feature_importance.csv` - Feature importance from XGBoost

---

## Model Selection Criteria

### Primary Metric: ROC-AUC
- Best metric for imbalanced datasets
- Measures model's ability to distinguish between classes
- Higher is better (range: 0-1)

### Secondary Metrics
- **Precision**: Important if false positives are costly
- **Recall**: Important if false negatives are costly
- **F1-Score**: Balanced measure of precision and recall
- **Accuracy**: Overall correctness (can be misleading with imbalanced data)

### Expected Results
Based on typical performance:
- **XGBoost**: Usually best ROC-AUC (0.85-0.95)
- **Random Forest**: Good performance (0.80-0.90)
- **Logistic Regression**: Baseline performance (0.75-0.85)

---

## Handling Class Imbalance

The dataset has significant class imbalance (88.4% vs 11.6%). We handle this by:

1. **Class Weighting**: 
   - Logistic Regression: `class_weight='balanced'`
   - Random Forest: `class_weight='balanced'`
   - XGBoost: `scale_pos_weight` parameter

2. **Stratified Splitting**: 
   - Maintains class distribution in train/test splits

3. **Metrics Selection**: 
   - ROC-AUC is preferred over accuracy for imbalanced data

---

## Using Trained Models

### Loading a Model
```python
import joblib

# Load model
model = joblib.load('models/xgboost_model.pkl')
scaler = joblib.load('models/scaler.pkl')
label_encoders = joblib.load('models/label_encoders.pkl')

# Preprocess new data
# (apply label encoding and scaling)

# Make prediction
prediction = model.predict(new_data)
probability = model.predict_proba(new_data)
```

### Making Predictions
1. Load the model and preprocessing objects
2. Preprocess new loan application data:
   - Apply label encoding to categorical features
   - Apply scaling (if using Logistic Regression)
3. Make prediction using `model.predict()`
4. Get probability using `model.predict_proba()`

---

## Next Steps

After training:

1. **Review Results**: Check `results/model_comparison.csv` to see which model performed best

2. **Feature Analysis**: Review feature importance to understand what drives predictions

3. **Model Deployment**: 
   - Integrate best model into backend API
   - Create prediction endpoint
   - Connect to frontend

4. **Model Monitoring**: 
   - Track model performance over time
   - Retrain periodically with new data
   - Monitor for model drift

---

## Troubleshooting

### Common Issues

1. **Memory Error**: 
   - Reduce dataset size or use chunking
   - Reduce n_estimators in tree models

2. **Slow Training**: 
   - Reduce n_estimators
   - Use fewer features
   - Reduce max_depth

3. **Poor Performance**: 
   - Try hyperparameter tuning
   - Feature engineering
   - Handle class imbalance better

4. **Import Errors**: 
   - Install missing packages: `pip install <package_name>`

---

## Model Performance Expectations

### Typical Performance Ranges

| Model | Accuracy | ROC-AUC | Precision | Recall |
|-------|----------|---------|-----------|--------|
| Logistic Regression | 0.85-0.90 | 0.75-0.85 | 0.60-0.75 | 0.50-0.70 |
| Random Forest | 0.88-0.93 | 0.80-0.90 | 0.65-0.80 | 0.55-0.75 |
| XGBoost | 0.90-0.95 | 0.85-0.95 | 0.70-0.85 | 0.60-0.80 |

*Note: Actual performance depends on data quality and hyperparameters*

---

## Best Practices

1. **Always split data before any preprocessing** (to avoid data leakage)
2. **Use stratified splitting** for imbalanced datasets
3. **Save preprocessing objects** along with models
4. **Document hyperparameters** used
5. **Compare multiple models** before selecting best one
6. **Use appropriate metrics** for imbalanced data (ROC-AUC)
7. **Validate on unseen test set** only once

---

## Summary

This training process:
- ✅ Loads and explores the dataset
- ✅ Preprocesses data (encoding, scaling)
- ✅ Trains 3 different models
- ✅ Evaluates and compares models
- ✅ Saves models and results
- ✅ Analyzes feature importance

**Result**: Three trained models ready for deployment, with XGBoost typically performing best.

---

*Last Updated: Training script generates this automatically*

