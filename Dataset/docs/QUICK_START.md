# Quick Start Guide - Using Trained Models

## Training Results Summary

### Best Model: **XGBoost**
- **ROC-AUC**: 0.7561 (Best)
- **Accuracy**: 70.22%
- **Precision**: 23.15%
- **Recall**: 67.46%
- **F1-Score**: 34.48%

### All Models Performance

| Model | Accuracy | ROC-AUC | Precision | Recall | F1-Score |
|-------|----------|---------|-----------|--------|----------|
| **XGBoost** | 70.22% | **0.7561** | 23.15% | 67.46% | 34.48% |
| Random Forest | 72.99% | 0.7532 | 24.43% | 63.31% | 35.26% |
| Logistic Regression | 67.40% | 0.7498 | 21.88% | 70.31% | 33.37% |

### Top Important Features
1. **Age** - Most important feature
2. **InterestRate** - Second most important
3. **Income** - Third most important
4. **MonthsEmployed** - Employment stability
5. **LoanAmount** - Loan size

---

## Files Created

### Models (`models/` folder)
- `xgboost_model.pkl` - **Best model (recommended)**
- `random_forest_model.pkl` - Alternative model
- `logistic_regression_model.pkl` - Baseline model
- `scaler.pkl` - Feature scaler (for Logistic Regression)
- `label_encoders.pkl` - Categorical encoders
- `feature_names.pkl` - Feature names in order

### Results (`results/` folder)
- `model_comparison.csv` - Performance comparison
- `classification_reports.txt` - Detailed reports
- `random_forest_feature_importance.csv` - Feature importance (RF)
- `xgboost_feature_importance.csv` - Feature importance (XGBoost)

---

## How to Use Trained Models

### Example: Making a Prediction

```python
import joblib
import pandas as pd
import numpy as np

# Load the best model (XGBoost)
model = joblib.load('models/xgboost_model.pkl')
label_encoders = joblib.load('models/label_encoders.pkl')
feature_names = joblib.load('models/feature_names.pkl')

# Example: New loan application data
new_loan = {
    'Age': 35,
    'Income': 75000,
    'LoanAmount': 50000,
    'CreditScore': 720,
    'MonthsEmployed': 60,
    'NumCreditLines': 3,
    'InterestRate': 5.5,
    'LoanTerm': 36,
    'DTIRatio': 0.35,
    'Education': 'Bachelor',
    'EmploymentType': 'Full-time',
    'MaritalStatus': 'Married',
    'HasMortgage': 'Yes',
    'HasDependents': 'No',
    'LoanPurpose': 'Auto',
    'HasCoSigner': 'No'
}

# Convert to DataFrame
df = pd.DataFrame([new_loan])

# Encode categorical variables
for col in ['Education', 'EmploymentType', 'MaritalStatus', 
            'HasMortgage', 'HasDependents', 'LoanPurpose', 'HasCoSigner']:
    if col in label_encoders:
        df[col] = label_encoders[col].transform(df[col].astype(str))

# Reorder columns to match training data
df = df[feature_names]

# Make prediction
prediction = model.predict(df)[0]  # 0 = No Default, 1 = Default
probability = model.predict_proba(df)[0]  # [prob_no_default, prob_default]

print(f"Prediction: {'Default' if prediction == 1 else 'No Default'}")
print(f"Probability of Default: {probability[1]:.2%}")
print(f"Probability of No Default: {probability[0]:.2%}")
```

---

## Model Selection Guide

### Use XGBoost When:
- ✅ You need best overall performance (ROC-AUC)
- ✅ You want good recall (catches more defaults)
- ✅ You need feature importance insights

### Use Random Forest When:
- ✅ You need highest accuracy
- ✅ You want more balanced precision/recall
- ✅ You need robust predictions

### Use Logistic Regression When:
- ✅ You need interpretability (coefficients)
- ✅ You need fast predictions
- ✅ You want baseline comparison

---

## Integration with Backend API

### Step 1: Copy models to backend
```bash
# Copy models folder to backend directory
cp -r Dataset/models backend/models
```

### Step 2: Create prediction endpoint
```python
# In backend/src/controllers/risk.controller.ts or .py
# Load model and make predictions
```

### Step 3: Connect to frontend
- Frontend sends loan application data
- Backend uses model to predict default risk
- Return prediction and probability to frontend

---

## Retraining Models

To retrain with new data or different parameters:

1. Update `train_models.py` with new hyperparameters
2. Run: `python train_models.py`
3. New models will overwrite old ones
4. Compare new results with previous results

---

## Notes

- **Class Imbalance**: Dataset has 88.4% non-default vs 11.6% default
- **Metrics**: ROC-AUC is best metric for imbalanced data
- **Precision is Low**: Due to class imbalance, precision is lower but recall is good
- **Feature Importance**: Age and InterestRate are most predictive features

---

*Models trained successfully and ready for deployment!*

