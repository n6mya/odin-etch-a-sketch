const grid = document.querySelector('#container')
const resetBtn = document.querySelector('#reset')

function createGrid(reso){
    for (i = 0; i < reso; i++){
        const row = document.createElement("div");
        for (a = 0; a < reso; a++){
            const column = document.createElement("div");
            column.setAttribute("id", "column");
            row.appendChild(column);
            column.addEventListener('mouseover', () => {
                column.style.backgroundColor = 'red';
            });
        }
        row.setAttribute("id", "row");
        grid.appendChild(row);
    }
}

function deleteGrid(){
    while (grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
}

createGrid(16);

resetBtn.addEventListener('click', () => {
    let newSquare = ''
    while (true) {
        newSquare = parseInt(prompt('What resolution do you want for the canvas? (1 - 100)'));
        if (newSquare > 0 && newSquare <= 100){
            break;
        } else {
            alert('Invalid input')
            continue;
        }
    };
    deleteGrid();
    createGrid(newSquare);
});