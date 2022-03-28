//Create a new XMLHttpRequest object.
let xhr = new XMLHttpRequest();
//Open a GET connection to the specified URL
xhr.open('get', 'https://luis.leiva.name/ajax/bnaic2021_preproceedings.pdf');
//Send the request.
xhr.send();

let file = document.getElementById('file');
let span = document.querySelector('span');

xhr.addEventListener('load', function (e) {
    // analyze HTTP status of the response
    // if status isn't 200 then alert the actual status (e.g. 404) and status text (e.g. Not Found) 
    if (xhr.status != 200) { 
        alert(`Error ${xhr.status}: ${xhr.statusText}`); 
    // if status is 200 then alert the size of the file
    } else {
        alert(`Done, got ${xhr.response.length} bytes`); 
      }
  });
  
  //event listener for the error event displays an alert box if there’s an error.
  xhr.addEventListener('error', function(){
    alert(`Network Error`);
  });

// method is used to be executed during progress event.
xhr.addEventListener('progress', function (e) {
    //set the "value" attribute of the the progress element in the HTML document to loaded progress 
    file.setAttribute('value', e.loaded);
        //set the "max" attribute of the the progress element in the HTML document to total progress 
    file.setAttribute('max', e.total);
    //set the innerHTML of the span element to the percentage of loading
      span.innerHTML = `${Math.round((e.loaded * 100) / e.total)}%`;
});
  
//  listen for a keydown event if the Escape key was pressed, the abort() method is called to abort the request.
document.addEventListener('keydown', function(e){
    if (e.key === "Escape") {
        xhr.abort();
    }
});

