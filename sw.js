const cacheName = 'joke-offline';
const preCache = [
    './',
    './index.html',
    './sw.js',   
    './manifest.json'
]



self.addEventListener('install', e => {
    console.log('The SW is installed!');
    e.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(preCache))
    );

});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(res => res || fetch(e.request))
    );
});



