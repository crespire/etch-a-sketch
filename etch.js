function makeDrawArea(x,strClass) {
    function makeCell(sClass) {
        let newDiv = document.createElement('div');
        newDiv.classList.add(sClass);
        return newDiv;
    }

    let outputDiv = document.createElement('div');
    outputDiv.classList.add('mainContainer');

    for (let i = 0; i < x ** 2; i++) {
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

function gridReset() {
    if (gridLength > 0 ) {
        gridLength = Number(prompt('New length? (16-100)'));

        if (gridLength > 100) {
            gridLength = 100;
        } else if (gridLength < 16) {
            gridLength = 16;
        }

        contentWrapper.lastElementChild.remove();
    } else {
        gridLength = 16;
    }
    contentWrapper.appendChild(makeDrawArea(gridLength, 'pixel'));
    document.documentElement.style.setProperty('--length', gridLength);
    let drawArea = document.querySelector('.mainContainer');
    drawArea.addEventListener('mousemove', mouseDraw);
}

const contentWrapper = document.querySelector('.contentWrap');
const clearButton = document.querySelector('#reset');
let gridLength = 0;
clearButton.addEventListener('click', gridReset);
clearButton.dispatchEvent(new MouseEvent('click'));