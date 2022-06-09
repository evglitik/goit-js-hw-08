import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';

const containerGalery = document.querySelector('.gallery');

renderGalery(galleryItems);

function renderGalery(images) {
  const newGalery = images
    .map(
      el =>
        `<li><a class="gallery__item" href="${el.original}">
            <img class="gallery__image" src="${el.preview}" alt="${el.description}"/>
        </a></li>`
    )
    .join('');
  containerGalery.insertAdjacentHTML('beforeend', newGalery);
}

var lightbox = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.5,
  captionsData: 'alt',
  captionDelay: 250,
});







console.log(galleryItems);
