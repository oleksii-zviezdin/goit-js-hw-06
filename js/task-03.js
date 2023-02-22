const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');
galleryEl.style.display = `flex`;
galleryEl.style.flexDirection = `column`;
galleryEl.style.gap = `50px`;

const createGallery = (arr, gallery) => arr.forEach(({ url, alt }) => {
  const image = document.createElement(`img`);
  image.src = `${url}`;
  image.alt = `${alt}`;
  image.width = "1450";
  image.style.display = `block`;
  image.style.borderRadius = `15px`;

  const itemEl = document.createElement(`li`);
  itemEl.style.listStyle = `none`;
  itemEl.style.boxShadow = `5px 5px 15px`;
  itemEl.style.borderRadius = `15px`;
  itemEl.style.margin = `auto`;

  itemEl.appendChild(image);
  gallery.appendChild(itemEl);
});

createGallery(images, galleryEl)

