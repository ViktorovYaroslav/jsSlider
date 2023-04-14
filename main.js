// import styles
import './scss/style.scss';

// get elements

const slider     = document.querySelector('.slider');
const sliderBody = slider.querySelector('.slider__body');

let sliderBodyPosition = 0;

const changeSlide = (e) => {
   const t = e.target;

   const closestBtn = t.closest('[data-action]');


   if (closestBtn) {
      const closestBtnAction = closestBtn.dataset.action;

      const sliderItems     = sliderBody.querySelectorAll('.slider__item');
      const sliderItemWidth = sliderItems[0].clientWidth;
      const sliderBodyWidth = sliderItems.length * sliderItemWidth - sliderItemWidth;


      if (closestBtnAction === 'prev') {
         if (sliderBodyPosition !== 0) {
            sliderBodyPosition -= sliderItemWidth;
         } else {
            sliderBodyPosition = sliderBodyWidth;
         }
      }

      if (closestBtnAction === 'next') {
         if (sliderBodyWidth > sliderBodyPosition) {
            sliderBodyPosition += sliderItemWidth;
         } else {
            sliderBodyPosition = 0;
         }
      }

      sliderBody.style = `transform:  translateX(-${sliderBodyPosition}px)`;
   }
}

slider.addEventListener('click', changeSlide);