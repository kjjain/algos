"""
A minimal feedforward Neural Network from scratch (no NumPy): one hidden
layer, sigmoid activations, trained with backpropagation. Demonstrated on
XOR - the classic example of a pattern a single linear model can't learn,
which is exactly why hidden layers exist.
"""
import math
import random

from utils import matmul, transpose


def sigmoid(z):
    z = max(-500, min(500, z))  # avoid math range errors on extreme values
    return 1 / (1 + math.exp(-z))


def sigmoid_derivative(activated):
    # given the already-activated value s = sigmoid(z), ds/dz = s * (1 - s)
    return activated * (1 - activated)


class NeuralNetwork:
    def __init__(self, n_inputs, n_hidden, n_outputs, learning_rate=0.5, seed=0):
        rng = random.Random(seed)
        self.learning_rate = learning_rate
        self.W1 = [[rng.uniform(-1, 1) for _ in range(n_hidden)] for _ in range(n_inputs)]
        self.b1 = [0.0] * n_hidden
        self.W2 = [[rng.uniform(-1, 1) for _ in range(n_outputs)] for _ in range(n_hidden)]
        self.b2 = [0.0] * n_outputs

    def _forward(self, X):
        z1 = matmul(X, self.W1)
        a1 = [[sigmoid(v + self.b1[j]) for j, v in enumerate(row)] for row in z1]
        z2 = matmul(a1, self.W2)
        a2 = [[sigmoid(v + self.b2[j]) for j, v in enumerate(row)] for row in z2]
        return a1, a2

    def predict(self, X):
        _, a2 = self._forward(X)
        return a2

    def fit(self, X, y, n_epochs=5000):
        loss_history = []
        for epoch in range(n_epochs):
            a1, a2 = self._forward(X)

            # Output layer error: dLoss/dz2, where Loss = mean squared error
            d2 = [[(a2[i][j] - y[i][j]) * sigmoid_derivative(a2[i][j])
                   for j in range(len(a2[0]))] for i in range(len(X))]

            # Hidden layer error, backpropagated through W2
            d1_raw = matmul(d2, transpose(self.W2))
            d1 = [[d1_raw[i][j] * sigmoid_derivative(a1[i][j])
                   for j in range(len(a1[0]))] for i in range(len(X))]

            grad_W2 = matmul(transpose(a1), d2)
            grad_W1 = matmul(transpose(X), d1)
            n = len(X)

            for i in range(len(self.W2)):
                for j in range(len(self.W2[0])):
                    self.W2[i][j] -= self.learning_rate * grad_W2[i][j] / n
            for j in range(len(self.b2)):
                self.b2[j] -= self.learning_rate * sum(row[j] for row in d2) / n

            for i in range(len(self.W1)):
                for j in range(len(self.W1[0])):
                    self.W1[i][j] -= self.learning_rate * grad_W1[i][j] / n
            for j in range(len(self.b1)):
                self.b1[j] -= self.learning_rate * sum(row[j] for row in d1) / n

            if epoch % 500 == 0 or epoch == n_epochs - 1:
                loss = sum((a2[i][j] - y[i][j]) ** 2 for i in range(len(X)) for j in range(len(y[0]))) / len(X)
                loss_history.append(loss)

        return loss_history


if __name__ == '__main__':
    X = [[0, 0], [0, 1], [1, 0], [1, 1]]
    y = [[0], [1], [1], [0]]  # XOR

    nn = NeuralNetwork(n_inputs=2, n_hidden=4, n_outputs=1, learning_rate=0.8, seed=0)
    loss_history = nn.fit(X, y, n_epochs=5000)

    print('Loss every 500 epochs:', [round(l, 4) for l in loss_history])
    predictions = nn.predict(X)
    print('XOR predictions:')
    for inputs, pred in zip(X, predictions):
        print(f'  {inputs} -> {pred[0]:.3f} (rounds to {round(pred[0])})')
