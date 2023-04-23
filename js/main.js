// import styles
import '../scss/style.scss';

// import helpers
import { updateSliderLikesSection } from './updateSliderLikesSection';
import { rateSlide } from './rateSlide';

function slider() {
   // get elements
   const slider     = document.querySelector('.slider');
   const sliderBody = slider.querySelector('.slider__body');

   const sliderLikes     = slider.querySelector('.slider__likes');
   const likesCounter    = slider.querySelector('.likes .counter');
   const dislikesCounter = slider.querySelector('.dislikes .counter');
   
   // imitate states
   let sliderBodyPosition = 0;

   let currentActiveSlide  = 0;
   let previousActiveSlide = currentActiveSlide;

   // changeSlide
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
               sliderBodyPosition  -= sliderItemWidth;
               previousActiveSlide = currentActiveSlide
               currentActiveSlide  -= 1;
            } else {
               sliderBodyPosition  = sliderBodyWidth;
               previousActiveSlide = currentActiveSlide
               currentActiveSlide  = sliderItems.length - 1;
            }
         }

         if (closestBtnAction === 'next') {
            if (sliderBodyWidth > sliderBodyPosition) {
               sliderBodyPosition  += sliderItemWidth;
               previousActiveSlide = currentActiveSlide
               currentActiveSlide  += 1;
            } else {
               sliderBodyPosition  = 0;
               previousActiveSlide = currentActiveSlide
               currentActiveSlide  = 0;
            }
         }

         sliderItems[previousActiveSlide].classList.remove('_active');
         sliderItems[currentActiveSlide].classList.add('_active');

         updateSliderLikesSection(likesCounter, dislikesCounter, sliderItems[currentActiveSlide]);

         sliderBody.style = `transform:  translateX(-${sliderBodyPosition}px)`;
      }
   }
   
   slider.addEventListener('click', changeSlide);

   // update counters on first render
   updateSliderLikesSection(likesCounter, dislikesCounter, sliderBody.querySelector('.slider__item._active'));

   // change likes/dislikes
   sliderLikes.addEventListener('click',(e) => { 
      rateSlide(e, sliderBody) 
   });
}

slider();

