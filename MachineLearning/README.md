# Machine Learning From Scratch

Five core ML algorithms implemented from first principles in pure Python —
no NumPy, no scikit-learn, no PyTorch. Every gradient, every matrix
multiply, every distance calculation is hand-written, so the math is fully
visible in the code instead of hidden behind a library call.

That also means it has **zero dependencies** — clone the repo and run it,
nothing to `pip install`.

## Why this exists

Most "ML project" repos call `model.fit()` on a library and stop there.
This one exists to show the reverse: that I understand what `.fit()` is
actually doing — gradient descent, backpropagation, distance-based
classification, and iterative clustering — well enough to write it myself.

## What's here

| File | Algorithm | Idea in one line |
|---|---|---|
| [`linear_regression.py`](linear_regression.py) | Linear Regression | Fits `y = wx + b` by gradient descent on mean squared error. |
| [`logistic_regression.py`](logistic_regression.py) | Logistic Regression | Same idea as linear regression, passed through a sigmoid for binary classification. |
| [`knn.py`](knn.py) | K-Nearest Neighbors | Classifies a point by majority vote among its k closest training points. |
| [`kmeans.py`](kmeans.py) | K-Means Clustering | Alternates "assign to nearest centroid" and "recompute centroid" until stable (Lloyd's algorithm). |
| [`neural_network.py`](neural_network.py) | Neural Network | A 1-hidden-layer network trained with backpropagation, demonstrated learning XOR — the pattern a linear model provably cannot learn. |
| [`utils.py`](utils.py) | — | Shared helpers: matrix multiply/transpose, train/test split, standardization, accuracy, MSE. |

## Running it

Every file runs standalone and prints a small demo on synthetic data:

```bash
python3 linear_regression.py
python3 logistic_regression.py
python3 knn.py
python3 kmeans.py
python3 neural_network.py
```

Or run all five at once:

```bash
python3 run_all_demos.py
```

```
Running all from-scratch ML demos (pure Python, no dependencies)...

[Linear Regression]   final MSE: 3.796 (started at 340.8)
[Logistic Regression] training accuracy: 100.0%
[K-Nearest Neighbors] test accuracy: 100.0%
[K-Means]              converged centroids: [[0.04, -0.06], [6.09, 6.08]]
[Neural Network XOR]  final loss: 0.0040 | predictions: [0, 1, 1, 0]
```

Run the test suite (standard library `unittest`, no extra tooling needed):

```bash
python3 -m unittest discover -s tests
```

## Notes on the implementations

- **Linear/Logistic Regression** use batch gradient descent with a
  hand-derived gradient. Logistic regression's gradient works out to the
  same `error * x` form as linear regression's — that's not a coincidence,
  it falls out of pairing a sigmoid with cross-entropy loss.
- **KNN** does no training at all — it just stores the data and does the
  work at prediction time, which is the classic accuracy/speed trade-off
  of instance-based learning.
- **K-Means** is randomly seeded (`random.sample` for initial centroids),
  so results are reproducible per seed but, as with any K-Means
  implementation, are not guaranteed to find the global optimum on harder
  data.
- **Neural Network** implements forward and backward passes over plain
  Python lists via the `matmul`/`transpose` helpers in `utils.py`, so the
  chain rule through both layers is explicit rather than delegated to
  autograd.

## Possible next steps

- Swap the array-based `matmul` for NumPy and compare training speed.
- Add a multi-class softmax layer to the neural network.
- Add L2 regularization to linear/logistic regression and show its effect
  on the loss curve.
