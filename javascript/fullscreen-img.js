const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const buttons = document.querySelectorAll('.view-image');

buttons.forEach(btn => {
  btn.addEventListener('click', function(e){
    e.preventDefault();
    const img = this.closest('.project').querySelector('img').src;
    lightboxImg.src = img;
    lightbox.style.display = 'flex';
  });
});

lightbox.addEventListener('click', function(){
  lightbox.style.display = 'none';
});