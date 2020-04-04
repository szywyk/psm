const staticDevCoffee = "bicycle-site-v1";
const assets = [
  "/",
  "/index.html",
  "/app.js",
  "/images/bicycle-192x192.png",
  "/images/bicycle-512x512.png",
  "/images/bicycle-apple-touch-icon.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
