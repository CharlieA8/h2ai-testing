import pandas as pd
import numpy as np
import lightgbm as lgb
from lightgbm import LGBMClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

model = LGBMClassifier(learning_rate=0.1, verbose=-1)

def train(train_path, test_path):
    train_data = pd.read_csv(train_path)

    # Separate features and target
    X = train_data.drop(["prognosis"], axis=1)
    y = train_data["prognosis"]

    # Split data into train and test sets
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )
    model.fit(X_train, y_train)
    
    #testing
    test_data = pd.read_csv(test_path)
    test_X = test_data.drop(["prognosis"], axis=1)
    test_y = test_data["prognosis"]
    test_pred = model.predict(test_X)
    test_accuracy = accuracy_score(test_y, test_pred)
    print("Accuracy:", test_accuracy)


train("./Training.csv", "./Testing.csv")


def predict(features, model):
    predicted_classes = model.predict(features)
    return predicted_classes
