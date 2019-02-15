/* Select DOM elements and define variables */
const base16 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const panels = document.querySelectorAll('.panel');
const container = document.querySelector('.container');
let scrolling = false;
let startX; 
let scrollLeft;

/* Define functions */
function randomColor() {
    const results = Array(6).fill('X');
    return results.map(el => {
        const index = Math.floor(Math.random() * 16);
        return base16[index];
    }).join('');
}

function scroll(e) {
    if (!scrolling) return;
    e.preventDefault(); // stops text selecting 
    
    const x = e.pageX - container.offsetLeft;
    const walk = x - startX;
    console.log({scrollLeft, walk});
    container.scrollLeft = scrollLeft - walk;
} 
/* Set up event listeners and call functions */
panels.forEach(panel => panel.style.background = `#${randomColor()}`);
container.addEventListener('mousedown', (e) => {
    scrolling = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});
container.addEventListener('mouseup', () => scrolling = false);
container.addEventListener('mouseleave', () => scrolling = false);
container.addEventListener('mousemove', scroll);