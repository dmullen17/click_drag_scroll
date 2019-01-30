/* Define variables */
items = document.querySelector('.items');
let scrolling = false;
let lastScreenX = 0;

/* Define functions */ 
function scrollItems(e) {
    if(!scrolling) return;
    // console.log('scrolling!');
    // console.log(e);
    //console.log(this.scrollLeft);
    
    // Just add one for each mousemove event 
    // this.scrollLeft += 1; // works as expected - now we need direction and #pixels
    
    if (lastScreenX == 0) {
        lastScreenX = e.screenX;
        return;
    }
    
    console.log(e.screenX - lastScreenX);
    this.scrollLeft += (e.screenX - lastScreenX) * -1; // we need the -1 to reverse the direction because scrolling goes in the opposite direction
    lastScreenX = e.screenX;
}

function resetScroll() {
    scrolling = false;
    lastScreenX = 0; // We need to reset the this to 0 because when we scroll again our reference point will change
}

function logEvent(e) {
    console.log(e);
    console.log(this.scrollLeft);
}

/* Set up event listeners */
items.addEventListener('mousedown', () => scrolling = true);
items.addEventListener('mouseup', resetScroll);
items.addEventListener('mouseexit', resetScroll);
items.addEventListener('mousemove', scrollItems); 
// For testing 
/*window.addEventListener('keypress', () => console.log(scrolling));
items.addEventListener('scroll', logEvent);*/
/*
items.addEventListener('mousemove', logEvent);
*/


