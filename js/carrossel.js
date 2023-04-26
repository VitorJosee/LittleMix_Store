const controls = document.querySelectorAll('.control');
let correntItem = 0;
const imgs = document.querySelectorAll('.imgcarrossel');
const maxImgs = imgs.length;

controls.forEach(control =>{control.addEventListener('click',() => {
    const isLeft = control.classList.contains('arrow-left');
   if (isLeft){
    correntItem -= 1;
   }else{
    correntItem += 1;
   }

   if(correntItem >= maxImgs){
    correntItem = 0;
   }

   if(correntItem < 0){
    correntItem = maxImgs - 1;
   }

   imgs.forEach(imgs => imgs.classList.remove('current-item'));
   imgs[correntItem].scrollIntoView({
    inline: 'center', behavior: 'smooth'
   });

   imgs[correntItem].classList.add('current-item');
})});