/* Select DOM elements and define variables */
const base16 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const panels = document.querySelectorAll('.panel');

/* Define functions */
function randomColor() {
    const results = Array(6).fill('X');
    return results.map(el => {
        const index = Math.floor(Math.random() * 16);
        return base16[index];
    }).join('');
}

/* Set up event listeners and call functions */
panels.forEach(panel => panel.style.background = `#${randomColor()}`);