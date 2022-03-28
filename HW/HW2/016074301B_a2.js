let seed = '016074301';

function rand () {
if (typeof seed != 'number') seed = Number(seed.match(/\d+/g));
var x = Math.sin(seed++) * 10000;
return x - Math.floor(x);
}

// get the table element from the document object
let table = document.body.children[0];

// assign a number from rand() method
let N = rand() * 100;

// call functions
createTable(table, N, N);
highlightCell(table, N, N);

// createTable method creates a table with numRows rows and numCols columns.
function createTable(domElement, numRows, numCols) {
 // iterate over the rows, creating a row for each iteration.
    for (let i = 0; i < numRows; i++) {
        let tr = domElement.insertRow(i);
// iterates over the columns, creating a column for each iteration.
        for (let y = 0; y < numCols; y++) {
            let td = tr.insertCell(y);
// create a cell for each iteration. 
            td.innerHTML = `(${i},${y})`;
// set the "onclick" attribute of each cell to the "clickMe" function.
            td.setAttribute("onclick", "clickMe(this)");
        }
    }
}

// For each row in the given table, the function loops through all the columns in that row.
function highlightCell(domElement, rowIndex, colIndex) {
    for (let i = 0; i < rowIndex; i++) {
        for (let y = 0; y < colIndex; y++) {
// If the row index is less than the column index, the cell is highlighted.
            if (i < y) {
                domElement.rows[i].cells[y].style.backgroundColor = "red";
            }
        }
    }
}





