import { sliderState } from "./sliderState";

/**
 * rateSlide is updating the state of likes/dislikes in active slide element
 * 
 * @param {Event} e 
 * @param {Element} sliderBody 
 */

export const rateSlide = (e, sliderBody) => {
   const t = e.target;

   const closestBtn = t.closest('[data-action]');
   const closestBtnAction = closestBtn.dataset.action;

   const activeSlide = sliderBody.querySelector('.slider__item._active');

   if (closestBtn) {
      if (closestBtnAction === 'like'){
         activeSlide.dataset.likes = 1 + +activeSlide.dataset.likes;
      }

      if (closestBtnAction === 'dislike'){
         activeSlide.dataset.dislikes = 1 + +activeSlide.dataset.dislikes;
      }

      // update likes state
      sliderState.likes = {
         ...sliderState.likes,
         [sliderState.currentActiveSlide]: {
            likes: activeSlide.dataset.likes,
            dislikes: activeSlide.dataset.dislikes,
         },
      }
   }
}