/* Select DOM elements and set up variables */
const slider = document.querySelector('.items');
const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
let isDown = false;
let startX; 
let scrollLeft;


/* Define functions */ 
function scroll(e) {
    if (!isDown) return;
    //console.log('scrolling');
    e.preventDefault();
    const ePageX = e.pageX;
    const sliderOffsetLeft = slider.offsetLeft;
    const x = e.pageX - slider.offsetLeft; // x and e.pageX are the same because we have no margin.  
    // x is just your place on the page.
    //console.log({x, startX});
    const walk = x - startX;
    // walk is the direction we've moved left or right.
    // -87 signifies 87px left, and 65 is 65px right
    const adjustedWalk = (scrollLeft - walk)*1.1;
    // I think if its get too far past its max value then we can't scroll back
    // currently scrollLeft - -87 will add 87px to scrollLeft.
    slider.scrollLeft = adjustedWalk;
    console.log({x, startX, walk, scrollLeft, adjustedWalk});
    // why does it break at the end if we multiply?
}

/* Set up event listeners */
slider.addEventListener('mousedown', (e) => {
    isDown=true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown=false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown=false;
    slider.classList.remove('active');

});
slider.addEventListener('mousemove', scroll)