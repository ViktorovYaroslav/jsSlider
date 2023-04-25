import { SliderModel } from './sliderModel';
import { SliderView } from './sliderView';

class Controller {
   /**
    * returns quantity of slides
    * 
    * @returns {number} slides quantity
    */
   getSlidesQuantity() {
      return SliderModel.data.slides.length;
   }
   /**
    * returns index of current slide
    * 
    * @returns {number} current slide index
    */
   getCurrentSlideIndex() {
      return SliderModel.data.currentSlideIndex;
   }
   /**
    * sets new index value of current slide
    * 
    * @param {number} newIndex the number which will be set as the new index
    * @returns {void}
    */
   setCurrentSlideIndex(newIndex) {
      SliderModel.data.currentSlideIndex = newIndex;
   }
   /**
    * returns current slide
    * 
    * @returns {Element} current slide
    */
   getCurrentSlide() {
      return SliderModel.data.slides[SliderModel.data.currentSlideIndex];
   }
   /**
    * increases index value of current slide
    * 
    * @example
    * if (SliderModel.data.currentSlideIndex + 1 === SliderModel.data.slides.length) {
         SliderModel.data.currentSlideIndex = 0;
      } else {
         SliderModel.data.currentSlideIndex++;
      }
    * @returns {void}
    */
   increaseCurrentSlideIndex() {
      if (SliderModel.data.currentSlideIndex + 1 === SliderModel.data.slides.length) {
         SliderModel.data.currentSlideIndex = 0;
      } else {
         SliderModel.data.currentSlideIndex++;
      }
   }
   /**
    * decreases new index value of current slide
    * 
    * @example
    * if (!SliderModel.data.currentSlideIndex) {
         SliderModel.data.currentSlideIndex = SliderModel.data.slides.length - 1;
      } else {
         SliderModel.data.currentSlideIndex--;
      }
    * @returns {void}
    */
   decreaseCurrentSlideIndex() {
      if (!SliderModel.data.currentSlideIndex) {
         SliderModel.data.currentSlideIndex = SliderModel.data.slides.length - 1;
      } else {
         SliderModel.data.currentSlideIndex--;
      }
   }
   /**
    * increases likes quantity for current slide
    * 
    * @this {Controller} controller class
    * @returns {void}
    */
   increaseCurrentSlideLikes() {
      SliderModel.data.slides[this.getCurrentSlideIndex()].likes++
   }
   /**
    * decreases likes quantity for current slide
    * 
    * @this {Controller} controller class
    * @returns {void}
    */
   increaseCurrentSlideDislikes() {
      SliderModel.data.slides[this.getCurrentSlideIndex()].dislikes++
   }
   /**
    * puts model data to localstorage
    * 
    * @returns {void}
    */
   setDataToLocalstorage() {
      localStorage.jsSlider = JSON.stringify(SliderModel.data);
   }
   /**
    * initializes controller
    * 
    * @returns {void}
    */
   initController() {
      SliderModel.initModel();
      SliderView.initView();
   }
}


export const SliderController = new Controller();