import { SliderController } from "./sliderController";

class View {
   constructor() {
      this.elements = {
         imageElement: document.querySelector('#slider-image-js'),
         descriptionElement: document.querySelector('#slider-description-js'),

         prevBtnElement: document.querySelector('#prev-slide-js'),
         nextBtnElement: document.querySelector('#next-slide-js'),

         likesCounterElement: document.querySelector('#like-counter-js'),
         dislikesCounterElement: document.querySelector('#dislike-counter-js'),

         likeBtnElement: document.querySelector('#like-slide-js'),
         dislikeBtnElement: document.querySelector('#dislike-slide-js'),

         dotsElement: document.querySelector('#slider-dots-js'),
         dotsListElement: document.querySelector('#slider-dotsList-js'),
      }
   }
   /**
    * renders dots elements
    * 
    * 1.resets innerHTML for dotsListElement
    * 
    * 2.sets new dots
    * 
    * @this {View} view class
    * @returns {void}
    */
   renderDots() {
      this.elements.dotsListElement.innerHTML = '';

      for (let i = 0; i < SliderController.getSlidesQuantity(); i++) {
         this.elements.dotsListElement.innerHTML +=
            `
         <li class="dots__item">
            <button 
               class="dots__btn ${i === SliderController.getCurrentSlideIndex() ? '_active' : ''}" 
               aria-label="go to slide number: ${i + 1}" 
               type="button"
            ></button>
         </li>
         `
      }
   }
   /**
    * initializes view
    * 
    * @this {View} view class
    * @returns {void}
    */
   initView() {
      this.registerEvents();
      this.render();
   }
   /**
    * registers event listeners for view elemens
    * 
    * @returns {void}
    */
   registerEvents() {
      this.elements.nextBtnElement.addEventListener('click', () => {
         SliderController.increaseCurrentSlideIndex();
         this.render();
         this.animateSliderChanging();
         SliderController.setDataToLocalstorage();
      })

      this.elements.prevBtnElement.addEventListener('click', () => {
         SliderController.decreaseCurrentSlideIndex();
         this.render();
         this.animateSliderChanging();
         SliderController.setDataToLocalstorage();
      })

      this.elements.likeBtnElement.addEventListener('click', () => {
         SliderController.increaseCurrentSlideLikes();
         this.render();
         SliderController.setDataToLocalstorage();
      })

      this.elements.dislikeBtnElement.addEventListener('click', () => {
         SliderController.increaseCurrentSlideDislikes();
         this.render();
         SliderController.setDataToLocalstorage();
      })

      this.elements.dotsElement.addEventListener('click', (e) => {
         const t = e.target;

         if (t.tagName !== 'BUTTON') return;

         const dotsQuantity = Array.from(this.elements.dotsListElement.querySelectorAll('button'));
         
         SliderController.setCurrentSlideIndex(dotsQuantity.indexOf(t))
         
         this.render();
         this.animateSliderChanging();
         SliderController.setDataToLocalstorage();
      })
   }
   /**
    * animate slider changes
    * 
    * @returns {void}
    */
   animateSliderChanging () {
      this.elements.imageElement.style = `filter: opacity(0);`;
      this.elements.descriptionElement.children[0].style = `filter: opacity(0);`;

      const animationStages = 100;

      for (let i = 1; i < animationStages; i++) {
         const opacity = i / animationStages;
         
         setTimeout(() => {
            this.elements.imageElement.style = `filter: opacity(${opacity}); transition: .5s all ease;`;
            this.elements.descriptionElement.children[0].style = `filter: opacity(${opacity}); transition: .5s all ease;`;

         }, 0)
      }
   }
   /**
    * updates UI
    * 
    * @this {View} view class
    * @returns {void}
    */
   render() {
      const currentSlide = SliderController.getCurrentSlide();
      
      
      this.elements.imageElement.src = currentSlide.imageSrc;
      this.elements.imageElement.alt = currentSlide.imageAlt;
      
      this.elements.descriptionElement.innerHTML = `<span>${currentSlide.imageDescription}</span>`;

      this.elements.likesCounterElement.innerHTML = currentSlide.likes;
      this.elements.dislikesCounterElement.innerHTML = currentSlide.dislikes;

      this.renderDots();
   }
}

export const SliderView = new View();