const container = document.getElementById("grid-container");
const btn = document.getElementById("grid");

function createGrid(n) {
    container.innerHTML = "";

    const cellSize = 960 / n;

    for (let i = 0; i < n * n; i++) {
        const cell = document.createElement("div");
        cell.className = "flex-item";

        // THIS LINE MAKES THE GRID WORK
        cell.style.flex = `0 0 ${cellSize}px`;
        cell.style.height = `${cellSize}px`;


        cell.addEventListener("mouseenter", () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        });

        container.appendChild(cell);
    }
}

createGrid(16);

btn.addEventListener("click", () => {
    const n = Number(prompt("Enter grid size (1–100)"));
    if (n >= 1 && n <= 100) {
        createGrid(n);
    } else {
        alert("Enter a number between 1 and 100");
    }
});
