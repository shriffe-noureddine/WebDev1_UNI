let seed = '016074301';

function rand () {
    if (typeof seed != 'number') seed = Number(seed.match(/\d+/g));
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}
// create an array with 10000 elements
let matrix = new Array(100);

// loop through the  array and for each element initialize its elements
for(let i = 0; i<matrix.length; i++){
    let row = new Array(100);
        for(let y = 0; y<row.length; y++){
            row[y] = Math.round(rand());
    }
    matrix[i] = row;
}
// console.log(arr);

// create a variable to be increased when the element is non-zero
let countNonZero = 0;
for(let i = 0; i<matrix.length; i++){
    for(let y = 0; y<matrix[i].length; y++){
    if(matrix[i][y] !== 0){
        countNonZero++;
        }
    }
}
console.log(`non-zero elementns: ${countNonZero}`);

// loop over the the array and accumulate the elements in diagonal 
let trace = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let y = 0; y < matrix[i].length; y++) {
        if (i === y) {
            trace += matrix[i][y];
        }
    }
}
console.log(`trace: ${trace}`);