class Model {
   
   constructor() { 
      this.data = {
         currentSlideIndex: 0,
         slides: [
            {
               imageSrc: './gallery/1.webp',
               imageAlt: 'Green mountains',
               imageDescription: 'Green mountains',

               likes: 0,
               dislikes: 0,
            },
            {
               imageSrc: './gallery/2.webp',
               imageAlt: 'Greener mountains',
               imageDescription: 'Greener mountains',

               likes: 0,
               dislikes: 0,
            },
            {
               imageSrc: './gallery/3.webp',
               imageAlt: 'Sunset',
               imageDescription: 'Sunset',

               likes: 0,
               dislikes: 0,
            },
            {
               imageSrc: './gallery/4.webp',
               imageAlt: 'Sunset in the mountains',
               imageDescription: 'Sunset in the mountains',

               likes: 0,
               dislikes: 0,
            },
            {
               imageSrc: './gallery/5.webp',
               imageAlt: 'nature image',
               imageDescription: 'Beautiful nature',

               likes: 0,
               dislikes: 0,
            },
            {
               imageSrc: './gallery/6.webp',
               imageAlt: 'Volcano',
               imageDescription: 'Volcano',

               likes: 0,
               dislikes: 0,
            },
            {
               imageSrc: './gallery/7.webp',
               imageAlt: 'Fog in the forest',
               imageDescription: 'Fog in the forest',

               likes: 0,
               dislikes: 0,
            },
            {
               imageSrc: './gallery/8.webp',
               imageAlt: 'Pine forest',
               imageDescription: 'Pine forest',

               likes: 0,
               dislikes: 0,
            },
            {
               imageSrc: './gallery/9.webp',
               imageAlt: 'Forest paints',
               imageDescription: 'Forest paints',

               likes: 0,
               dislikes: 0,
            },
            {
               imageSrc: './gallery/10.webp',
               imageAlt: 'Green forest',
               imageDescription: 'Green forest',

               likes: 0,
               dislikes: 0,
            },
         ],
      }
   }
   /**
    * gets data from localstorage and puts it to model data
    * 
    * @this {Model} controller class
    * @returns {void}
    */
   getDataFromLocalstorage () {
      const data = localStorage.jsSlider

      if (!data) return;
      
      this.data = JSON.parse(data);
   }
   /**
    * initializes model
    * 
    * @returns {void}
    */
   initModel () {
      this.getDataFromLocalstorage();
   }
}

export const SliderModel = new Model();