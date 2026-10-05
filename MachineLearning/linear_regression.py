"""
Linear Regression from scratch, trained with batch gradient descent.

Model: y_hat = w . x + b
Loss:  Mean Squared Error = (1/n) * sum((y - y_hat)^2)
Update rule, derived by differentiating the loss w.r.t. each parameter:
    w_j -= learning_rate * dLoss/dw_j
    b   -= learning_rate * dLoss/db
"""
import random

from utils import mean_squared_error, standardize


class LinearRegression:
    def __init__(self, learning_rate=0.05, n_iterations=500):
        self.learning_rate = learning_rate
        self.n_iterations = n_iterations
        self.weights = None
        self.bias = 0.0
        self.loss_history = []

    def fit(self, X, y):
        n_samples = len(X)
        n_features = len(X[0])
        self.weights = [0.0] * n_features
        self.bias = 0.0

        for _ in range(self.n_iterations):
            y_pred = [self._predict_one(row) for row in X]

            grad_w = [0.0] * n_features
            grad_b = 0.0
            for row, yt, yp in zip(X, y, y_pred):
                error = yp - yt
                for j in range(n_features):
                    grad_w[j] += error * row[j]
                grad_b += error

            for j in range(n_features):
                grad_w[j] = (2 / n_samples) * grad_w[j]
                self.weights[j] -= self.learning_rate * grad_w[j]
            grad_b = (2 / n_samples) * grad_b
            self.bias -= self.learning_rate * grad_b

            self.loss_history.append(mean_squared_error(y, y_pred))

        return self

    def _predict_one(self, row):
        return sum(w * x for w, x in zip(self.weights, row)) + self.bias

    def predict(self, X):
        return [self._predict_one(row) for row in X]


def _make_synthetic_data(n=100, seed=1):
    rng = random.Random(seed)
    X = [[rng.uniform(-10, 10)] for _ in range(n)]
    y = [3 * row[0] + 5 + rng.gauss(0, 2) for row in X]  # true relationship: y = 3x + 5, plus noise
    return X, y


if __name__ == '__main__':
    X, y = _make_synthetic_data()
    X_scaled, mean, std = standardize(X)

    model = LinearRegression(learning_rate=0.1, n_iterations=300).fit(X_scaled, y)
    print(f'Learned weight: {model.weights[0]:.3f}, bias: {model.bias:.3f}')
    print(f'Final training MSE: {model.loss_history[-1]:.3f} (started at {model.loss_history[0]:.3f})')
