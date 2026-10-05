"""
Runs every from-scratch ML demo in this folder and prints a one-line
summary of each. No external dependencies - everything here is pure
Python 3 standard library, so this just works: `python3 run_all_demos.py`.
"""
import random

from utils import accuracy, standardize, train_test_split
from linear_regression import LinearRegression, _make_synthetic_data as _linreg_data
from logistic_regression import LogisticRegression, _make_synthetic_data as _logreg_data
from knn import KNNClassifier
from kmeans import KMeans
from neural_network import NeuralNetwork


def run_linear_regression():
    X, y = _linreg_data()
    X_scaled, _, _ = standardize(X)
    model = LinearRegression(learning_rate=0.1, n_iterations=300).fit(X_scaled, y)
    print(f'[Linear Regression]   final MSE: {model.loss_history[-1]:.3f} '
          f'(started at {model.loss_history[0]:.1f})')


def run_logistic_regression():
    X, y = _logreg_data()
    X_scaled, _, _ = standardize(X)
    model = LogisticRegression(learning_rate=0.5, n_iterations=300).fit(X_scaled, y)
    preds = model.predict(X_scaled)
    print(f'[Logistic Regression] training accuracy: {accuracy(y, preds):.1%}')


def run_knn():
    rng = random.Random(3)
    X, y = [], []
    for _ in range(60):
        X.append([rng.gauss(-2, 1), rng.gauss(-2, 1)])
        y.append('A')
    for _ in range(60):
        X.append([rng.gauss(2, 1), rng.gauss(2, 1)])
        y.append('B')
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_ratio=0.25, seed=3)
    model = KNNClassifier(k=5).fit(X_train, y_train)
    preds = model.predict(X_test)
    print(f'[K-Nearest Neighbors] test accuracy: {accuracy(y_test, preds):.1%}')


def run_kmeans():
    rng = random.Random(4)
    X = [[rng.gauss(0, 0.5), rng.gauss(0, 0.5)] for _ in range(30)]
    X += [[rng.gauss(6, 0.5), rng.gauss(6, 0.5)] for _ in range(30)]
    model = KMeans(k=2, seed=4).fit(X)
    centroids = [[round(c, 2) for c in centroid] for centroid in model.centroids]
    print(f'[K-Means]              converged centroids: {centroids}')


def run_neural_network():
    X = [[0, 0], [0, 1], [1, 0], [1, 1]]
    y = [[0], [1], [1], [0]]
    nn = NeuralNetwork(n_inputs=2, n_hidden=4, n_outputs=1, learning_rate=0.8, seed=0)
    loss_history = nn.fit(X, y, n_epochs=5000)
    preds = [round(p[0]) for p in nn.predict(X)]
    print(f'[Neural Network XOR]  final loss: {loss_history[-1]:.4f} | predictions: {preds}')


if __name__ == '__main__':
    print('Running all from-scratch ML demos (pure Python, no dependencies)...\n')
    run_linear_regression()
    run_logistic_regression()
    run_knn()
    run_kmeans()
    run_neural_network()
