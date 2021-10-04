/**
 * Set up variables in the global scope:
 *      * set up a reference to the parent container. We will add eventListeners to this, plus use it to add the grid of divs we will generate in Javascript
 * 
 * Generate a grid of divs to use for the drawing area, make sure it has the right class so we can work with it later.
 *       let pixelContainer = getDiv with class maincontainer
 *       create a function createDiv that returns a new div with the class we want.
 *
 *       let drawArea = new Array(16).fill( new Array(16).fill(createDiv);
 *      
 * Append those divs to the maincontainer in HTML.
 *       
 * Add event listeners to the parent container. I think it is best to start with 3 event listeners so we can get the behaviour down. Once we have that, we can think about making the code more concise.
 *  EventListeners
 *      - For a 'mousedown' event, turn on "drawing" boolean
 *      - For a 'mousemove' event,
 *          If we are drawing
 *              If the target has a "pixel" class
 *                  Add a "flip" CSS class to the target element
 *          Otherwise, do nothing
 *      - For a 'mouseup' event, turn off "drawning" boolean
 */

/**
window.addEventListener('mousemove', function (e){
    if (e.target.classList[0] === 'pixel') { // Checks if the element is one we are looking to manipulate.
        console.dir(e);        
    }
}); */

// Makes the correct size draw area and returns it as a documentFragment
function makeDrawArea(x,y,strClass) {
    // Helper function to return a new div
    function makeCell(sClass) {
        let newDiv = document.createElement('div');
        newDiv.classList.add(sClass);
        return newDiv;
    }

    let docFrag = document.createDocumentFragment();
    let maxElements = x * y;

    for (let i = 0; i < maxElements; i++) {
        docFrag.appendChild(makeCell(strClass));
    }

    return docFrag;
}

// Set up document
let mainContainer = document.querySelector('.mainContainer'); // Get the main container DOM element
let gridLength = 16; // Set the length of one side, this is set as a variable as we will let the user change this later.
let drawArea = makeDrawArea(gridLength, gridLength, 'pixel'); // Make the draw area cells all with specified class.

 // Update the CSS varaible to match our draw area.
document.documentElement.style.setProperty('--length', gridLength);

// Add grid to our document.
mainContainer.appendChild(drawArea);