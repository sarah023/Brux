const headerTag = document.querySelector('header');

//changes header section to white
const toggleHeader = () => {
  const pixels = window.pageYOffset;

  if (pixels > 60) {
    headerTag.classList.add('scrolled');
  } else {
    headerTag.classList.remove('scrolled');
  }
};

//apply box shadow when page is scrolled down past a certian point
const fadeBox = () => {
  const pixels = window.pageYOffset;
  const alpha = Math.min(pixels / 1000, 0.5);

  headerTag.style.boxShadow = `0 0 10px rgba(0, 0, 0, ${alpha})`;
};

//runs functions on load
toggleHeader();
fadeBox();

//runs functions when scrolled
document.addEventListener('scroll', () => {
  toggleHeader();
  fadeBox();
});
