const cacheName = 'v3';
const cacheAssets = ['signup.html', 'main.css', 'script.js'];

self.addEventListener('install', (event) => {
  console.log('Serive Worker: Installed');

  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
      .catch((err) => console.log(err))
  );
});

self.addEventListener('activate', (event) => {
 console.log('Serive Worker: Activated');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  console.log('Service Worker: Fetching');
  event.respondWith(fetch(event.request)).catch(() => caches.match(e.request));
})