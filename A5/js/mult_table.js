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
    cStart = parseInt(document.getElementById('cStart').value, 10);
    cEnd = parseInt(document.getElementById('cEnd').value, 10);
    rStart = parseInt(document.getElementById('rStart').value, 10);
    rEnd = parseInt(document.getElementById('rEnd').value, 10);

    isMinMax();
    if(isInRange() == 0) { return; }
    drawTable();
}
/*
    The drawTable function does not take any arguments and has no returns. This
    function creates the table to display on the page with the multiplication
    data.
*/
function drawTable() {
    var tbl = "<table class=\"table-striped\">";

    // create a new row on each iteration of outer loop
    for(var i= (rStart-1); i <= rEnd; i++) {
        tbl += "<tr>";

        // fill in each row on each iteration of inner loop
        for(var j= (cStart-1); j <= cEnd; j++) {

            if((i == (rStart-1)) && (j == (cStart-1))) {
                // add an empty cell in top left
                tbl += "<td></td>";
            }else if((i == (rStart-1)) && ((j > (cStart-1)) || (j <= cEnd))) {
                // add the column range
                tbl += "<td id=\"tbl_h\">" + j + "</td>";
            } else if((j == (cStart-1)) && ((i > (rStart-1)) || (i <= rEnd))) {
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
}
/*
    This function has a boolean return and takes no arguments. This is to ensure
    that the numbers fall within a limited range of -50 - 50.
*/
function isInRange() {
    if((cEnd < -50) || (cEnd > 50)) {
        return 0;
    }
    if((cStart < -50) || (cStart > 50)) {
        return 0;
    }
    if((rStart < -50) || (rStart > 50)) {
        return 0;
    }
    if((rEnd < -50) || (rEnd > 50)) {
        return 0;
    }

    return 1;
}
