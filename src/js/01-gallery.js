// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

// ------------------ Create and render markup according to the gallery template. -----------------

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const createGalleryItemMarkup = ({ preview, original, description }) => {
  return `
    <a class="gallery__item" href="${original}">
    <img
    style="display:block"
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
  </a>
  `;
};

const createGalleryMarkup = galleryItems.map(createGalleryItemMarkup).join('');

const galleryElements = document.querySelector('.gallery');

galleryElements.insertAdjacentHTML('beforeend', createGalleryMarkup);

// ------ Add caption display to image from alt attribute according to the code from the library (SimpleLightbox). ------

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
