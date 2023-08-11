import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const container = document.querySelector(".gallery")

function createMarcup(arr) {
  return arr.map(({ preview, original, description }) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join("")
}
container.insertAdjacentHTML('beforeend', createMarcup(galleryItems))
container.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.classList.contains(".gallery__item")) {
        return;
    }
  const galleryItem = evt.target.closest(".gallery_item")
  // console.log(evt.target.dataset)
  const { source } = evt.target.dataset;
  // console.log(source)
  const item = galleryItems.find((item) => item.original === source)
  console.log(item)
  
const instance = basicLightbox.create(`
    <img src="${item.original}" alt="${item.description}" width="800" height="600">
`);

instance.show();

})

