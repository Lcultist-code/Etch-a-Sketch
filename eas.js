
//Acessing main div

const div = document.getElementById('grid-container');
const gridSize = 16;
const totalCells = gridSize * gridSize;

//creating a grid
for (let i = 1; i <= totalCells; i++) {
    const cell = document.createElement('div');

    cell.classList.add('flex-item')
    cell.addEventListener('mouseenter', () => {
        cell.style.backgroundColor = 'red';
    });
    div.appendChild(cell)

}