self.addEventListener('activate', (event) => {
    if (self.registration?.navigationPreload) {
        event.waitUntil(self.registration.navigationPreload.enable());
    }
});

self.addEventListener("fetch", function(event) {
    
});