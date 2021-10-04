function makeDrawArea(x,y,strClass) {
    function makeCell(sClass) {
        let newDiv = document.createElement('div');
        newDiv.classList.add(sClass);
        return newDiv;
    }

    let outputDiv = document.createElement('div');
    let maxElements = x * y;

    for (let i = 0; i < maxElements; i++) {
        outputDiv.appendChild(makeCell(strClass));
    }

    return outputDiv;
}

let mainContainer = document.querySelector('.mainContainer');
let gridLength = 16;
let drawArea = makeDrawArea(gridLength, gridLength, 'pixel');

document.documentElement.style.setProperty('--length', gridLength);

mainContainer.appendChild(drawArea);

function mouseDraw(event) {
    console.log(event);
    if (event.target.classList[0] === 'pixel') {
        event.target.classList.add('flipped');
    }
}

drawArea.addEventListener('mousemove', mouseDraw);

function resetGrid(event) {
    mainContainer.textContent = '';

    gridLength = Number(prompt("What is the length of the grid you want to use? (Number between 16 and 100)"));

    if (gridLength > 100) {
        gridLength = 100;
    } else if (gridLength < 16) {
        gridLength = 16;
    }
    
    drawArea = makeDrawArea(gridLength,gridLength,'pixel');
    document.documentElement.style.setProperty('--length', gridLength);
    mainContainer.appendChild(drawArea);
}

let clearButton = document.querySelector('#reset');
clearButton.addEventListener('click', resetGrid);