const CACHE_NAME = "borderotech-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./login.html",
  "./mensagem.html",
  "./assets/tailwind.min.css",
  "./assets/fonts/fonts.css",
  "./assets/manifest.json",
  "./assets/favicon.png",
  "./assets/favicon.ico"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
