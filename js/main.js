// import styles
import '../scss/style.scss';

// import state
import { sliderState } from './sliderState';

// import helpers
import { updateSliderLikesSection } from './updateSliderLikesSection';
import { rateSlide } from './rateSlide';
import { updateUIFirstRender } from './updateUIFirstRender';


function slider() {
   // get elements
   const slider = document.querySelector('.slider');
   const sliderBody = slider.querySelector('.slider__body');
   const sliderItems = sliderBody.querySelectorAll('.slider__item');

   const sliderLikes = slider.querySelector('.slider__likes');
   const likesCounter = slider.querySelector('.likes .counter');
   const dislikesCounter = slider.querySelector('.dislikes .counter');

   updateUIFirstRender(sliderBody, sliderItems);

   // changeSlide
   const changeSlide = (e) => {
      const t = e.target;

      const closestBtn = t.closest('[data-action]');

      if (closestBtn) {
         const closestBtnAction = closestBtn.dataset.action;

         const sliderItemWidth = sliderItems[0].clientWidth;
         const sliderBodyWidth = sliderItems.length * sliderItemWidth - sliderItemWidth;


         if (closestBtnAction === 'prev') {
            if (sliderState.sliderBodyPosition !== 0) {
               sliderState.sliderBodyPosition -= sliderItemWidth;
               sliderState.previousActiveSlide = sliderState.currentActiveSlide
               sliderState.currentActiveSlide -= 1;
            } else {
               sliderState.sliderBodyPosition = sliderBodyWidth;
               sliderState.previousActiveSlide = sliderState.currentActiveSlide
               sliderState.currentActiveSlide = sliderItems.length - 1;
            }
         }

         if (closestBtnAction === 'next') {
            if (sliderBodyWidth > sliderState.sliderBodyPosition) {
               sliderState.sliderBodyPosition += sliderItemWidth;
               sliderState.previousActiveSlide = sliderState.currentActiveSlide
               sliderState.currentActiveSlide += 1;
            } else {
               sliderState.sliderBodyPosition = 0;
               sliderState.previousActiveSlide = sliderState.currentActiveSlide
               sliderState.currentActiveSlide = 0;
            }
         }

         sliderItems[sliderState.previousActiveSlide].classList.remove('_active');
         sliderItems[sliderState.currentActiveSlide].classList.add('_active');

         updateSliderLikesSection(likesCounter, dislikesCounter, sliderItems[sliderState.currentActiveSlide]);

         sliderBody.style = `transform:  translateX(-${sliderState.sliderBodyPosition}px)`;

         localStorage.jsSlider = JSON.stringify(sliderState);
      }
   }
   //localStorage.clear()
   slider.addEventListener('click', changeSlide);

   // update counters on first render
   updateSliderLikesSection(likesCounter, dislikesCounter, sliderBody.querySelector('.slider__item._active'));

   // change likes/dislikes
   sliderLikes.addEventListener('click', (e) => {
      rateSlide(e, sliderBody)
   });
}

slider();

