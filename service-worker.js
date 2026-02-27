self.addEventListener("install", function (e) {
    e.waitUntil(
        caches.open("iloilo-cache").then(function (cache) {
            return cache.addAll(["index.html"]);
        })
    );
});