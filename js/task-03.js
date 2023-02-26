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

const arrayImg = images.map(({url}, {alt}) => `<img
  style="width:90vw;display:block;border-radius:15px; box-shadow:5px 5px 15px;list-style:none;margin:auto" src="${url}"
  alt="${alt}"></img>`).join("")
console.log(arrayImg)

galleryEl.insertAdjacentHTML(`afterbegin`, arrayImg);