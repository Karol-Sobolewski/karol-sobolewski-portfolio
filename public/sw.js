const cacheName = `cookie-go`;
const filesToCache = [
  `/images/hex.svg`,
  `/images/logo.svg`,
  `/images/language/paczek.png`,
  `/images/me.jpg`,
  `/images/stars1.png`,
  `/images/stars2.png`,
  `/index.html`,
];
window.self.addEventListener(`install`, function (e) {
  console.log(`[ServiceWorker] Install`);
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log(`[ServiceWorker] Caching app shell`);
      return cache.addAll(filesToCache);
    })
  );
});
window.self.addEventListener(`activate`, (event) => {
  event.waitUntil(window.self.clients.claim());
});
window.self.addEventListener(`fetch`, (event) => {
  event.respondWith(
    caches
      .match(event.request, { ignoreSearch: true })
      .then((response) => response || fetch(event.request))
  );
});
