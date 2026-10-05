"""
Shared helpers for the from-scratch ML implementations in this folder.
Everything here uses only the Python standard library - no NumPy, no
scikit-learn - so every algorithm's math stays visible in the code itself.
"""
import math
import random


def train_test_split(X, y, test_ratio=0.2, seed=42):
    """Shuffle (X, y) together and split into train/test sets."""
    rng = random.Random(seed)
    indices = list(range(len(X)))
    rng.shuffle(indices)
    split = int(len(X) * (1 - test_ratio))
    train_idx, test_idx = indices[:split], indices[split:]
    X_train = [X[i] for i in train_idx]
    y_train = [y[i] for i in train_idx]
    X_test = [X[i] for i in test_idx]
    y_test = [y[i] for i in test_idx]
    return X_train, X_test, y_train, y_test


def standardize(X, mean=None, std=None):
    """Zero-mean, unit-variance scale each feature column of X."""
    n_features = len(X[0])
    if mean is None or std is None:
        mean = [sum(row[j] for row in X) / len(X) for j in range(n_features)]
        std = []
        for j in range(n_features):
            variance = sum((row[j] - mean[j]) ** 2 for row in X) / len(X)
            std.append(math.sqrt(variance) or 1.0)
    scaled = [[(row[j] - mean[j]) / std[j] for j in range(n_features)] for row in X]
    return scaled, mean, std


def mean_squared_error(y_true, y_pred):
    n = len(y_true)
    return sum((yt - yp) ** 2 for yt, yp in zip(y_true, y_pred)) / n


def accuracy(y_true, y_pred):
    n = len(y_true)
    correct = sum(1 for yt, yp in zip(y_true, y_pred) if yt == yp)
    return correct / n


def dot(a, b):
    return sum(x * y for x, y in zip(a, b))


def matmul(A, B):
    """Multiply matrix A (m x n) by matrix B (n x p) -> (m x p)."""
    B_T = list(zip(*B))
    return [[dot(row, col) for col in B_T] for row in A]


def transpose(A):
    return [list(row) for row in zip(*A)]
