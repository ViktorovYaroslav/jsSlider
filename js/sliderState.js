export let sliderState = localStorage.jsSlider 
   ? JSON.parse(localStorage.jsSlider)
   : {
      sliderBodyPosition: 0,
      currentActiveSlide: 0,

      likes: {},
     };