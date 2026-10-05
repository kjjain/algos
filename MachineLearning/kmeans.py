"""
K-Means Clustering from scratch (Lloyd's algorithm).

Alternates between two steps until the assignments stop changing:
  1. Assign each point to its nearest centroid.
  2. Recompute each centroid as the mean of the points assigned to it.
"""
import random

from knn import euclidean_distance


class KMeans:
    def __init__(self, k=2, n_iterations=100, seed=42):
        self.k = k
        self.n_iterations = n_iterations
        self.seed = seed
        self.centroids = []
        self.labels_ = []

    def fit(self, X):
        rng = random.Random(self.seed)
        self.centroids = rng.sample(X, self.k)

        for _ in range(self.n_iterations):
            clusters = [[] for _ in range(self.k)]
            labels = []
            for point in X:
                distances = [euclidean_distance(point, c) for c in self.centroids]
                cluster_idx = distances.index(min(distances))
                clusters[cluster_idx].append(point)
                labels.append(cluster_idx)

            new_centroids = []
            for idx, cluster in enumerate(clusters):
                if not cluster:
                    new_centroids.append(self.centroids[idx])
                    continue
                n_features = len(cluster[0])
                centroid = [sum(p[j] for p in cluster) / len(cluster) for j in range(n_features)]
                new_centroids.append(centroid)

            self.labels_ = labels
            if new_centroids == self.centroids:
                break
            self.centroids = new_centroids

        return self

    def predict(self, X):
        labels = []
        for point in X:
            distances = [euclidean_distance(point, c) for c in self.centroids]
            labels.append(distances.index(min(distances)))
        return labels


if __name__ == '__main__':
    rng = random.Random(4)
    X = [[rng.gauss(0, 0.5), rng.gauss(0, 0.5)] for _ in range(30)]
    X += [[rng.gauss(6, 0.5), rng.gauss(6, 0.5)] for _ in range(30)]

    model = KMeans(k=2, seed=4).fit(X)
    print('Converged centroids:', [[round(c, 2) for c in centroid] for centroid in model.centroids])
