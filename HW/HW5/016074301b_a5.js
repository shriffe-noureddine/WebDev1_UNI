/**
*   The function applyStyle() accepts two parameters: className and displayProperty.
*   It checks if the browser supports the getElementsByClassName method
*   and whether the displayProperty parameter is "none" or "table-row" 
*   then it will find all the cells within the className parameter and for each cell,
*   set the display style to the displayProperty parameter.
*/ 
function applyStyle(className, displayProperty){
    if (document.getElementsByClassName && (displayProperty == "none" || displayProperty == "table-row")){
        let cells = document.getElementsByTagName("tr");
        for (let x = 0; x < cells.length; x++) {
            let cell = cells[x];
            if (cell.getAttribute("class") == className) {
                cell.style.display = displayProperty;
            }
        }
    }
}

/**
 * The function iterates through the list of elements with id liste1 and liste2 
 * and hides the list by setting the display property to none.
 */
function hidelist() {
    for (let i = 1; i <= 2; i++) {
        let list = document.getElementById("liste" + i);
        list.style.display = "none";
    }
}

 /**
  * 
  *  The method returns the number of pixels the document is currently scrolled along the vertical axis
  */
function getPageScroll() {
    return self.pageYOffset;
}
