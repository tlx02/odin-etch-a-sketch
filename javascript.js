container = document.querySelector('#container');
console.log(container);

size = 16;

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