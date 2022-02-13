const mainDiv = document.getElementById('main-div');
const headerDiv = document.getElementById('header-div');

while (true) {
    var divCountPrompt = +prompt('How large do you want your grid to be? (max=100)').trim()
    if (divCountPrompt) {break} else {continue};
}

const headerTitle = document.createElement('h1');
headerTitle.style.color = 'white';
setHeaderTitle(divCountPrompt);
headerTitle.classList.add('header-title');

const buttonDiv = document.createElement('div');
buttonDiv.classList.add('button-div');

const clearGrid = document.createElement('button');
const newGrid = document.createElement('button');

clearGrid.classList.add('button-34');
newGrid.classList.add('button-34');
clearGrid.textContent = 'Clear Grid';
newGrid.textContent = 'New Grid';

// Place the header Title, clear button and new grid buttons after
headerDiv.appendChild(headerTitle);
headerDiv.appendChild(buttonDiv);
buttonDiv.appendChild(clearGrid);
buttonDiv.appendChild(newGrid);

clearGrid.addEventListener('click', clearDivs);
newGrid.addEventListener('click', newDivs);

createDivs(divCountPrompt);

let buttonActive = false;
mainDiv.addEventListener('click', () => {
    buttonActive = !buttonActive;
    draw();
})

function setHeaderTitle(count) {
    headerTitle.textContent = `CURRENT GRID: ${count}x${count}`;
}

function clearDivs () {
    buttonActive = false;
    draw();
    let buttons = mainDiv.getElementsByClassName('grid-item');
    for (const button of buttons) {
        button.style.backgroundColor = 'black';
    }
}

function newDivs() {
    mainDiv.querySelectorAll('div').forEach(div => {div.remove()});
    // for (const div of divs) {
    //     div.remove();
    // }
    var divCountPrompt = +prompt('How large do you want your grid to be? (max=100)').trim();
    createDivs(divCountPrompt);
    setHeaderTitle(divCountPrompt);
}

function createDivs (gridNum) {
    let total = gridNum * gridNum;
    for (let i = 0; i < total; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        let screenWidth = window.screen.width;
        let gridItemWidth = Math.floor(screenWidth / gridNum);
        mainDiv.setAttribute('style', `grid-template-columns: repeat(${gridNum}, ${gridItemWidth}px); grid-template-rows: repeat(${gridNum}, ${gridItemWidth}px);`)
        mainDiv.appendChild(gridItem);
    }
}

function draw() {
    const buttons = document.getElementsByClassName('grid-item');
    for (const button of buttons) {
        if (buttonActive) {
            button.addEventListener('mouseover', changeButtonBackground)
        } else if (!buttonActive){
            button.removeEventListener('mouseover', changeButtonBackground);
        }
    };
}

function changeButtonBackground (event) {
    this.style.backgroundColor = 'white';
}



