const container = document.querySelector('#container');
const btn = document.querySelector('button');

function generateGrid(size) {
    container.textContent = '';

    for (let i=0; i<size; i++) {
        const row = document.createElement('div');
        container.appendChild(row);
        for (let j=0; j<size; j++) {
            const grid = document.createElement('div');
            row.appendChild(grid);
            grid.addEventListener('mouseenter', () => {
                grid.style.backgroundColor = "Blue";
            })
        }
    }
}

generateGrid(16);

btn.addEventListener('click', () => {
    let numOfSquares = Number(prompt('How many squares would you like on each side?'));
    while (numOfSquares > 100) {
        numOfSquares = Number(prompt('Please input a value not more than 100:'));
    }
    generateGrid(numOfSquares);
});