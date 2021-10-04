function makeDrawArea(x,strClass) {
    function makeCell(sClass) {
        let newDiv = document.createElement('div');
        newDiv.classList.add(sClass);
        return newDiv;
    }

    let outputDiv = document.createElement('div');
    outputDiv.classList.add('mainContainer');
    let maxElements = x ** 2;

    for (let i = 0; i < maxElements; i++) {
        outputDiv.appendChild(makeCell(strClass));
    }

    return outputDiv;
}

function mouseDraw(event) {
    let pixelDiv = event.target;
    if (pixelDiv.classList[0] === 'pixel') {
        pixelDiv.classList.add('flipped');
    }
}

function gridReset(event) {
    if (gridLength > 0 ) {
        contentWrapper.lastElementChild.remove();
        gridLength = Number(prompt('New length? (16-100)'));

        if (gridLength > 100) {
            gridLength = 100;
        } else if (gridLength < 16) {
            gridLength = 16;
        }        
    } else {
        gridLength = 16;
    }
    contentWrapper.appendChild(makeDrawArea(gridLength, 'pixel'));
    document.documentElement.style.setProperty('--length', gridLength);
    let drawArea = document.querySelector('.mainContainer');
    drawArea.addEventListener('mousemove', mouseDraw);
}

let contentWrapper = document.querySelector('.contentWrap');
let gridLength = 0;
let clearButton = document.querySelector('#reset');
clearButton.addEventListener('click', gridReset);
let initialGrid = new MouseEvent('click');
clearButton.dispatchEvent(initialGrid);