importScripts('https://www.gstatic.com/firebasejs/6.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.0.1/firebase-messaging.js');

workbox.setConfig({ debug: true }); //eslint-disable-line

/**
 * Precache handling
 */
const initCaching = () => {
  //precache from precache manifest
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []); //eslint-disable-line
  const { CacheFirst, NetworkFirst } = workbox.strategies;
  //images
  workbox.routing.registerRoute(/(.*)\.(?:png|gif|jpg|svg|ico|jpeg)/, new CacheFirst({ cacheName: 'images' }));

  //fonts
  workbox.routing.registerRoute(/(.*)\.(?:ttf|woff)/, new CacheFirst({ cacheName: 'fonts' }));
  //api
  workbox.routing.registerRoute(/^https:\/\/octopus-be.tikal.io\/api\//, new NetworkFirst({ cacheName: 'api' }));
};

initCaching();
