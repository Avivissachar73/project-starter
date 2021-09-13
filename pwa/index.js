// import './service-worker.js';
window.onload = () => {
  const elManifest = document.createElement('link');
  elManifest.rel = 'manifest';
  elManifest.href = 'pwa/manifest.json';
  document.head.appendChild(elManifest);

  if ('serviceWorker' in navigator) {
    'Registering'
    navigator.serviceWorker.register('pwa/service-worker.js');
  }
}