const CACHE_NAME = 'app_cache';
// const FILES_TO_CACHE = ['*']; // files pathes

// to get all files psthes:: console.log(performance.getEntriesByType('resource').map(file => file.name.slice(location.origin.length)))
const FILES_TO_CACHE = [
  "/css/main.css",
  "/pwa/index.js",
  "/js/index.js",
  "/css/base/index.css",
  "/css/base/base.css",
  "/css/base/helpers.css",
  "/css/base/layout.css",
  "/js/lib/AvivJs.js",
  "/js/routes.js",
  "/js/store.js",
  "/js/cmps/AppHeader.js",
  "/js/cmps/AppFooter.js",
  "/js/views/HomePage.js",
  "/js/views/AboutPage.js",
  "/pwa/manifest.json"
];

self.addEventListener('install', ev => {
  console.log('Installing service worker');
  ev.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
          return cache.addAll(FILES_TO_CACHE);
      })
  );
});

self.addEventListener('fetch', ev => {
  ev.respondWith(
    caches.match(ev.request)
      .then(response => {
        return response || fetch(ev.request);
      })
  );
});

// self.addEventListener('activate', ev => {
//   ev.waitUntil(
//     caches.keys()
//       .then(keyList => {
//         return Promise.all(keyList.map(key => {
//           if (key === CACHE_NAME) return;
//           return caches.delete[key];
//         }))
//       })
//   )
// });