import { sliderState } from "./sliderState";

/**
 * this function helps to update UI on first render after getting data from localstorage
 * 
 * @param {Element} sliderBody 
 * @param {Element} sliderItems 
 */

export const updateUIFirstRender = (sliderBody, sliderItems) => {
   if (localStorage.jsSlider) {
      const sliderItemWidth = sliderItems[0].clientWidth;
      sliderBody.style = `transform:  translateX(-${sliderState.sliderBodyPosition}px)`;

      sliderItems[0].classList.remove('_active');
      sliderItems[sliderState.previousActiveSlide].classList.remove('_active');
      sliderItems[sliderState.currentActiveSlide].classList.add('_active');

      for (let slideData in sliderState.likes) {
         sliderItems[slideData].dataset.likes = sliderState.likes[slideData].likes;
         sliderItems[slideData].dataset.dislikes = sliderState.likes[slideData].dislikes;
      }
   }
}