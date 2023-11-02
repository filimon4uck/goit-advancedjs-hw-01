// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

function createMurkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image"src="${preview}"  alt="${description}" />
   </a>
</li>`
    )
    .join('');
}
const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('afterbegin', createMurkup(galleryItems));

new SimpleLightbox('.gallery .gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});
