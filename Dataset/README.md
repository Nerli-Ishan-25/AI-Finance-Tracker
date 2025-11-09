# Dataset Directory Structure

This directory contains all machine learning models, data, scripts, and documentation for the FinRisk AI loan default prediction system.

## Directory Structure

```
Dataset/
├── data/
│   └── raw/
│       └── Loan_default.csv          # Original dataset (255,347 records)
│
├── models/                            # Production models (used by backend)
│   ├── xgboost_model.pkl             # Best model (ROC-AUC: 0.7561)
│   ├── random_forest_model.pkl       # Alternative model
│   ├── logistic_regression_model.pkl  # Baseline model
│   ├── scaler.pkl                     # Feature scaler
│   ├── label_encoders.pkl             # Categorical encoders
│   └── feature_names.pkl              # Feature names reference
│
├── results/                           # Training results (for reference/display)
│   ├── model_comparison.csv          # Performance comparison
│   ├── classification_reports.txt     # Detailed reports
│   ├── random_forest_feature_importance.csv
│   └── xgboost_feature_importance.csv
│
├── scripts/                           # Training scripts
│   └── train_models.py                # Main training script
│
└── docs/                              # Documentation
    ├── TRAINING_GUIDE.md              # Complete training guide
    └── QUICK_START.md                 # Quick reference guide
```

## Quick Reference

### For Backend Integration
- **Use**: `models/` folder - Contains all trained models and preprocessing objects
- **Primary Model**: `models/xgboost_model.pkl` (best performance)

### For Frontend Display
- **Use**: `results/` folder - Contains metrics and feature importance for Model Comparison tab

### For Retraining
- **Use**: `scripts/train_models.py` - Run this to retrain models with new data/parameters

### For Documentation
- **See**: `docs/` folder - Complete guides and quick references

## Model Performance

| Model | ROC-AUC | Accuracy | Status |
|-------|---------|----------|--------|
| XGBoost | 0.7561 | 70.22% | ⭐ Best |
| Random Forest | 0.7532 | 72.99% | Alternative |
| Logistic Regression | 0.7498 | 67.40% | Baseline |

## Usage

### Making Predictions (Backend)
```python
import joblib

# Load model
model = joblib.load('Dataset/models/xgboost_model.pkl')
encoders = joblib.load('Dataset/models/label_encoders.pkl')
scaler = joblib.load('Dataset/models/scaler.pkl')

# Make prediction
prediction = model.predict(preprocessed_data)
```

### Retraining Models
```bash
cd Dataset/scripts
python train_models.py
```

## Notes

- **Models folder** is the production folder - used by backend API
- **Results folder** is for reference - can be used to display metrics in frontend
- **Data folder** contains original dataset - not needed for predictions
- **Scripts folder** contains training code - only needed for retraining
- **Docs folder** contains documentation - for reference only

---

*Last Updated: After model training completion*

