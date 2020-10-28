/*
    Molly Peterson, molly_peterson@student.uml.edu
    University of Massachusetts Lowell
    Computer Science, COMP 4610 GUI I
    Task: Creating an Interactive Dynamic Table
    File: github.com/molly-peterson/mySite/A5/js/mult_table.js
    created: Oct 28, 2020 @ 8:00 PM
*/

// variables for holding form data
var cStart, cEnd, hStart, hEnd;
/*
    The getInput function takes no arguments and has no returns. This function
    is called by the click of the submit button on the form and takes in the
    numbers submitted on that form and stores them in variables. The error
    handling and drawing table functions are also called from here.
*/
function getInput() {
    // read in values from form, form checks for number input on its own
    cStart = document.getElementById('cStart').value;
    cEnd = document.getElementById('cEnd').value;
    rStart = document.getElementById('rStart').value;
    rEnd = document.getElementById('rEnd').value;

    isMinMax();
    drawTable();
}
/*
    The drawTable function does not take any arguments and has no returns. This
    function creates the table to display on the page with the multiplication
    data.
*/
function drawTable() {
    var tbl = "<table class=\"table-hover\">";

    // create a new row on each iteration of outer loop
    for(var i= cStart-1; i <= cEnd; i++) {
        tbl += "<tr>";

        // fill in each row on each iteration of inner loop
        for(var j= rStart-1; j <= rEnd; j++) {

            if(i == cStart-1 && j == rStart-1) {
                // add an empty cell in top left
                tbl += "<td></td>";
            }else if(i == cStart-1 && (j > rStart-1 || j <= rEnd)) {
                // add the column range
                tbl += "<td id=\"tbl_h\">" + j + "</td>";
            } else if(j == rStart-1 && (i > cStart-1 || i <= cEnd)) {
                // add the rows range
                tbl += "<td id=\"tbl_h\">" + i + "</td>";
            } else {
                // fill in inner table data
                var mult = i * j;
                tbl += "<td>" + mult + "</td>";
            }

        } // end j for
        tbl += "</tr>";
    } // end i for
    tbl += "</table>";
    document.getElementById('tbl').innerHTML = tbl;
} // end function

/*
    isMinMax function is used to make sure the min and max values entered
    are actually minimum and maximum values. This function takes no
    arguments and has no return. If values are not correct then they swap
    places.
*/
function isMinMax() {
    if(cStart > cEnd) {
        var temp = cEnd;
        cEnd = cStart;
        cStart = temp;
    }
    if(rStart > rEnd) {
        var temp = rEnd;
        rEnd = rStart;
        rStart = temp;
    }
    return;
}
