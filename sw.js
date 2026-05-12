self.addEventListener('install', (e) => {
    console.log('Service Worker: Instalado');
});

self.addEventListener('fetch', (e) => {
    // Aquí puedes agregar lógica de caché offline a futuro si lo deseas
});