let seed = '016074301';

function rand () {
if (typeof seed != 'number') seed = Number(seed.match(/\d+/g));
var x = Math.sin(seed++) * 10000;
return x - Math.floor(x);
}
// select the ordered list in the document
let ol = document.querySelector('ol');
// when click on an item, the list item will be at the begining of the list
// we can apply the function into the list itself thanks to bubbling
ol.addEventListener('click', function(e){
    let clickedItem = e.target.parentElement;
    ol.prepend(clickedItem);
});

// select the "shuffle" button in the document by its ID
let shuffle = document.getElementById('shuffle');
// select the items of the list as an array 
let itemsArray = ol.children;
shuffle.addEventListener('click', function (e) {
    // loop over the array of items
    for (let i = 0; i < itemsArray.length; i++) {
       // Create a random number between 0 and the length of the array.
        let randomPosition = rand() * (itemsArray.length - 1);
        // Create a temporary variable to store the item at the current index.
        let temp = itemsArray[i];
        // Assign the item at the current index to the item at the random index.
        itemsArray[i] = itemsArray[randomPosition];
        // Assign the item at the random index to the temporary variable.
        itemsArray[randomPosition] = itemsArray[i];
        // Append the item at the current index to the ordered list.
        ol.appendChild(itemsArray[i]);
    }
});

// select the "colorize" button in the document by its ID
let colorize = document.getElementById('colorize');

colorize.addEventListener('click', function (e) {
    // loop over the array of items
    for (let i = 0; i < itemsArray.length; i++) {
        // Generate a random hexadecimal color code. 
        let randomColor = '#' + Math.round(rand() * 0xFFFFFF).toString(16);
        // sometimes it gives 5 digits instead of 6 (in addition to # => 7 digits), if so regenerate it
        while (randomColor.length < 7) {
            randomColor = '#' + Math.floor(rand() * 0xFFFFFF).toString(16);
        }
        // Change the background color of the selected item to a random color.
        itemsArray[i].style.backgroundColor = randomColor;

    }
});

// for (let i = 0; i < 20; i++) {
//     let randomColor = '#' + Math.floor(rand() * 0xFFFFFF).toString(16);
//     while (randomColor.length < 7) {
//         randomColor = '#' + Math.floor(rand() * 0xFFFFFF).toString(16);
//     }
// console.log(randomColor);
// }