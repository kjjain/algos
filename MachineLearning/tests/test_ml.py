import os
import random
import sys
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..'))

from kmeans import KMeans
from knn import KNNClassifier
from linear_regression import LinearRegression
from linear_regression import _make_synthetic_data as _linreg_data
from logistic_regression import LogisticRegression
from logistic_regression import _make_synthetic_data as _logreg_data
from neural_network import NeuralNetwork
from utils import accuracy, matmul, standardize, train_test_split


class TestUtils(unittest.TestCase):
    def test_train_test_split_sizes(self):
        X = [[i] for i in range(10)]
        y = list(range(10))
        X_train, X_test, _, _ = train_test_split(X, y, test_ratio=0.3, seed=1)
        self.assertEqual(len(X_train), 7)
        self.assertEqual(len(X_test), 3)

    def test_standardize_zero_mean(self):
        X = [[1.0], [2.0], [3.0]]
        scaled, _, _ = standardize(X)
        avg = sum(row[0] for row in scaled) / len(scaled)
        self.assertAlmostEqual(avg, 0.0, places=6)

    def test_matmul(self):
        A = [[1, 2], [3, 4]]
        B = [[5, 6], [7, 8]]
        self.assertEqual(matmul(A, B), [[19, 22], [43, 50]])


class TestLinearRegression(unittest.TestCase):
    def test_loss_drops_sharply_during_training(self):
        X, y = _linreg_data(n=100, seed=1)
        X_scaled, _, _ = standardize(X)
        model = LinearRegression(learning_rate=0.1, n_iterations=300).fit(X_scaled, y)
        self.assertLess(model.loss_history[-1], model.loss_history[0] * 0.05)


class TestLogisticRegression(unittest.TestCase):
    def test_separates_two_well_separated_clusters(self):
        X, y = _logreg_data(n=200, seed=2)
        X_scaled, _, _ = standardize(X)
        model = LogisticRegression(learning_rate=0.5, n_iterations=300).fit(X_scaled, y)
        preds = model.predict(X_scaled)
        self.assertGreater(accuracy(y, preds), 0.9)


class TestKNN(unittest.TestCase):
    def test_classifies_well_separated_clusters(self):
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
        self.assertGreater(accuracy(y_test, preds), 0.9)


class TestKMeans(unittest.TestCase):
    def test_finds_two_well_separated_clusters(self):
        rng = random.Random(4)
        X = [[rng.gauss(0, 0.5), rng.gauss(0, 0.5)] for _ in range(30)]
        X += [[rng.gauss(6, 0.5), rng.gauss(6, 0.5)] for _ in range(30)]
        model = KMeans(k=2, seed=4).fit(X)
        centroids = model.centroids
        near_origin = any(abs(c[0]) < 1.5 and abs(c[1]) < 1.5 for c in centroids)
        near_six = any(abs(c[0] - 6) < 1.5 and abs(c[1] - 6) < 1.5 for c in centroids)
        self.assertTrue(near_origin)
        self.assertTrue(near_six)


class TestNeuralNetwork(unittest.TestCase):
    def test_learns_xor(self):
        X = [[0, 0], [0, 1], [1, 0], [1, 1]]
        y = [[0], [1], [1], [0]]
        nn = NeuralNetwork(n_inputs=2, n_hidden=4, n_outputs=1, learning_rate=0.8, seed=0)
        nn.fit(X, y, n_epochs=5000)
        preds = [round(p[0]) for p in nn.predict(X)]
        self.assertEqual(preds, [0, 1, 1, 0])


if __name__ == '__main__':
    unittest.main()
