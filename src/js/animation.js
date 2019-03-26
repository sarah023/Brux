const animatedTags = document.querySelectorAll('h2, h3, p, section img, a.button');

//changes the opactiy for the animatedTags to 0
animatedTags.forEach(tag => {
  tag.style.opactiy = 0;
});

//fades in the selected tags
const fadeIn = () => {
  //staggers the time when the elements fade in
  let delay = 0.25;
  //finds where the top and bottom of each element is
  animatedTags.forEach(tag => {
    const tagTop = tag.getBoundingClientRect().top;
    const tagBottom = tag.getBoundingClientRect().bottom;
    //if the top of the tag is smaller than the browser windows height
    //and the bottom of the element is larger than 0
    //then the fade in animation runs
    //if those needs aren't met, then the opacity returns to 0
    if (tagTop < window.innerHeight && tagBottom > 0) {
      tag.style.animation = `fadeIn 1s ${delay}s both`;
      delay = delay + 0.25;
    } else {
      tag.style.opacity = 0;
      tag.style.animation = '';
    }
  });
};

//run function on load
fadeIn();

//run function on scroll
document.addEventListener('scroll', () => {
  fadeIn();
});

//run function when brower is resized
window.addEventListener('resize', () => {
  fadeIn();
});
