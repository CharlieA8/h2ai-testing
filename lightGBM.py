import pandas as pd
import numpy as np

train_path = "/Users/maggieshen/Desktop/h2ai-testing/Training.csv"
train_data = pd.read_csv(data_path)
train_data

import lightgbm as lgb
from lightgbm import LGBMClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score


X = train_data.drop(['prognosis'], axis=1)
y = train_data['prognosis']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = LGBMClassifier(learning_rate=0.1, n_estimators=100)
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
y_pred

accuracy = accuracy_score(y_test, y_pred)
print('Accuracy:', accuracy)

#actual test
test_path = "/Users/maggieshen/Desktop/h2ai-testing/Testing.csv"
test_data = pd.read_csv(test_path)
test_data

test_X = test_data.drop(['prognosis'], axis=1)
test_y = test_data['prognosis']

test_y_pred = model.predict(test_X)
test_y_pred

test_accuracy = accuracy_score(test_y, test_y_pred)
print('Accuracy:', test_accuracy)