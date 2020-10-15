const lightbox = document.querySelector('.lightbox');

const next = document.querySelector('.lightbox .arrow-next');
const prev = document.querySelector('.lightbox .arrow-prev');
let selectedImage = -1;

const imgs = document.querySelectorAll('.gallery img');
for (let index = 0; index < imgs.length; index++) {
    const img = imgs[index];
    img.addEventListener('click', (event) => showLightbox(event, index));
}
  

function showLightbox(ev, nr) {  
    const lightbox = document.querySelector('.lightbox');
    const img = document.querySelector('.lightbox img');
    selectedImage = nr;
    const imgUrl = ev.target.src;
    img.src = imgUrl;
    lightbox.classList.add('visible');
}
prev.addEventListener('click', prev);

function remove(){
    const lightbox = document.querySelector('.lightbox');
    lightbox.classList.remove('visible');
    console.log("hello");
}
next.addEventListener('click', nextimg);
function nextimg(ev){
    ev.stopPropagation;
    console.log("hell-nextt");
    const lightbox = document.querySelector('.lightbox');
    const img = document.querySelector('.lightbox img');
    const imgUrl = ev.target.src;
    if (selectedImage + 1 < imgs.length) {
      const nextEl = imgs[++selectedImage];
      img.src = nextEl.src;
    }
}
//
prev.addEventListener('click', previmg);
function previmg(ev){
    ev.stopPropagation;
    console.log("hell-nextt");
    const lightbox = document.querySelector('.lightbox');
    const img = document.querySelector('.lightbox img');
    const imgUrl = ev.target.src;
    if (selectedImage - 1 < imgs.length) {
      const nextEl = imgs[--selectedImage];
      img.src = nextEl.src;
    }
}