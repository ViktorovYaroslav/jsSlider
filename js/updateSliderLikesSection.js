/**
 * updateSliderLikesSection gets list of necessary elements(they are described below) 
 * and update UI of likes/dislikes counters
 * 
 * @param {Element} likesCounter 
 * @param {Element} dislikesCounter 
 * @param {Element} activeSlide 
 */
export const updateSliderLikesSection = (likesCounter, dislikesCounter, activeSlide) => {
   const likes    = activeSlide.dataset.likes;
   const dislikes = activeSlide.dataset.dislikes;
   
   likesCounter.innerText    = likes;
   dislikesCounter.innerText = dislikes;
}