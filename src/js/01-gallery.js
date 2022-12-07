// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const galleryItemsArr = [];

galleryItems.map(element => {
    const galleryItem = `<div class="gallery__item"><a class="gallery__link" href=${element.original}>
    <img
      class="gallery__image"
      src=${element.preview}
      data-source=${element.original}
      alt=${element.description}
    />
  </a></div>`;
    galleryItemsArr.push(galleryItem);
})

galleryList.innerHTML = galleryItemsArr.join('');

galleryList.addEventListener('click', (event) => {
    event.preventDefault();    
})

let gallery = new SimpleLightbox('.gallery a');