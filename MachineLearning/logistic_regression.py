"""
Logistic Regression from scratch, trained with batch gradient descent.

Model: p = sigmoid(w . x + b)
Loss:  Binary Cross-Entropy = -(1/n) * sum(y*log(p) + (1-y)*log(1-p))
The gradient of this loss w.r.t. w and b simplifies to the same clean
"error * x" form as linear regression's, which is why logistic regression
is usually taught right after it.
"""
import math
import random

from utils import accuracy, standardize


def sigmoid(z):
    if z >= 0:
        return 1 / (1 + math.exp(-z))
    ez = math.exp(z)  # rearranged to avoid overflow for very negative z
    return ez / (1 + ez)


class LogisticRegression:
    def __init__(self, learning_rate=0.1, n_iterations=500):
        self.learning_rate = learning_rate
        self.n_iterations = n_iterations
        self.weights = None
        self.bias = 0.0

    def fit(self, X, y):
        n_samples = len(X)
        n_features = len(X[0])
        self.weights = [0.0] * n_features
        self.bias = 0.0

        for _ in range(self.n_iterations):
            grad_w = [0.0] * n_features
            grad_b = 0.0
            for row, yt in zip(X, y):
                p = sigmoid(sum(w * x for w, x in zip(self.weights, row)) + self.bias)
                error = p - yt
                for j in range(n_features):
                    grad_w[j] += error * row[j]
                grad_b += error

            for j in range(n_features):
                self.weights[j] -= self.learning_rate * grad_w[j] / n_samples
            self.bias -= self.learning_rate * grad_b / n_samples

        return self

    def predict_proba(self, X):
        return [sigmoid(sum(w * x for w, x in zip(self.weights, row)) + self.bias) for row in X]

    def predict(self, X, threshold=0.5):
        return [1 if p >= threshold else 0 for p in self.predict_proba(X)]


def _make_synthetic_data(n=200, seed=2):
    rng = random.Random(seed)
    X, y = [], []
    for _ in range(n // 2):
        X.append([rng.gauss(-2, 1), rng.gauss(-2, 1)])
        y.append(0)
    for _ in range(n // 2):
        X.append([rng.gauss(2, 1), rng.gauss(2, 1)])
        y.append(1)
    combined = list(zip(X, y))
    rng.shuffle(combined)
    X, y = zip(*combined)
    return list(X), list(y)


if __name__ == '__main__':
    X, y = _make_synthetic_data()
    X_scaled, mean, std = standardize(X)

    model = LogisticRegression(learning_rate=0.5, n_iterations=300).fit(X_scaled, y)
    predictions = model.predict(X_scaled)
    print(f'Training accuracy: {accuracy(y, predictions):.1%}')
