const grid = document.querySelector('#container')

for (i = 0; i < 16; i++){
    const row = document.createElement("div");
    for (a = 0; a < 16; a++){
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