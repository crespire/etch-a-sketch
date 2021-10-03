/**
 * Set up variables in the global scope:
 *      * set up a reference to the parent container. We will add eventListeners to this, plus use it to add the grid of divs we will generate in Javascript
 * 
 * Generate a grid of divs to use for the drawing area, make sure it has the right class so we can work with it later.
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