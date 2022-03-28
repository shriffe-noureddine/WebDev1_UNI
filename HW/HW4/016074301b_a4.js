/*
@author NourEldin_CHARIFH
*
*/

let seed = '016074301';

function rand () {
if (typeof seed != 'number') seed = Number(seed.match(/\d+/g));
var x = Math.sin(seed++) * 10000;
return x - Math.floor(x);
}

//It waits until the page is fully loaded before running the code.
window.addEventListener('load', function () {

    // Select the form in HTML into 'form' variable
    let button = document.querySelector('button');
    let form = document.querySelector('form');

    // The click event is triggered when the user submits the form.
    button.addEventListener('click', function (e) {
        // If the user is holding down the ALT key and the SHIFT key (windows OS)
        // or if the user is holding down the Cmd key and the SHIFT key(mac OS) 
        if ((e.ctrlKey && e.shiftKey) || (e.metaKey && e.shiftKey)) {
            e.preventDefault();
            form.submit();
            return;
            //If the user submits the form without pressing (ALT, SHIFT OR CMD, SHIFT) keys
            // then a dialog box is displayed which returns 'boolean' 
            // if cancel clicked (false) it prevent the default behavior and doesn't submit
        }else if(!confirm('Do you really want to submit the form?')) {
            e.preventDefault();
        } else {
            //if OK clicked (true) then an input element is created with 'hidden', 'name', value attributes
            //and we set what rand() method returns as a value, and add the hidden input to the form.
            let input = document.createElement('input');
            input.setAttribute('type', 'hidden');
            input.setAttribute('name', 'random');
            input.setAttribute('value', rand());
            button.appendChild(input);
            }
        });
    });

