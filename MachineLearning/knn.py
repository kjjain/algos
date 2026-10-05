"""
K-Nearest Neighbors classifier from scratch.

There's nothing to "train" - KNN just memorizes the training set. At
predict time it finds the k closest training points (by Euclidean distance)
to the query point and returns their majority class.
"""
import math
from collections import Counter


def euclidean_distance(a, b):
    return math.sqrt(sum((x - y) ** 2 for x, y in zip(a, b)))


class KNNClassifier:
    def __init__(self, k=3):
        self.k = k
        self.X_train = []
        self.y_train = []

    def fit(self, X, y):
        self.X_train = X
        self.y_train = y
        return self

    def _predict_one(self, row):
        distances = [(euclidean_distance(row, train_row), label)
                     for train_row, label in zip(self.X_train, self.y_train)]
        distances.sort(key=lambda pair: pair[0])
        nearest_labels = [label for _, label in distances[:self.k]]
        return Counter(nearest_labels).most_common(1)[0][0]

    def predict(self, X):
        return [self._predict_one(row) for row in X]


if __name__ == '__main__':
    import random

    from utils import accuracy, train_test_split

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
    predictions = model.predict(X_test)
    print(f'Test accuracy: {accuracy(y_test, predictions):.1%}')
