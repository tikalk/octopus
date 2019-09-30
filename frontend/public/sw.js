
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerRoute(
    /https:\/\/octopus-be.tikal.io/,
    new workbox.strategies.StaleWhileRevalidate()
);