import Alpine from 'alpinejs';
import gallery from './slider';
 
window.Alpine = Alpine;
 
Alpine.start();

document.addEventListener('DOMContentLoaded', () => {
    gallery.mount();
} );