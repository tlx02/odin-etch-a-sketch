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
                const currentOpacity = grid.style.opacity;
                grid.style.opacity = Number(currentOpacity) + 0.1;
                console.log(currentOpacity);
                const r = Math.random() * 255;
                const g = Math.random() * 255;
                const b = Math.random() * 255;
                grid.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
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