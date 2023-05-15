// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const ulElem = document.querySelector('.gallery');

const galleryHtml = galleryItems
  .map(
    galleryItem => `
  <li class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
      <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}">
    </a>
  </li>
`
  )
  .join('');

ulElem.insertAdjacentHTML('beforeend', galleryHtml);

const gallery = new SimpleLightbox('.gallery__link', {
  animationSpeed: 250,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
