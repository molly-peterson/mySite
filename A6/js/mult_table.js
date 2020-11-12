/*
    Molly Peterson, molly_peterson@student.uml.edu
    University of Massachusetts Lowell
    Computer Science, COMP 4610 GUI I
    Task: Creating an Interactive Dynamic Table
    File: github.com/molly-peterson/mySite/A5/js/mult_table.js
    created: Oct 28, 2020 @ 8:00 PM
*/

// variables for holding form data
var cStart, cEnd, rStart, rEnd;
/*
    The getInput function takes no arguments and has no returns. This function
    is called by the click of the submit button on the form and takes in the
    numbers submitted on that form and stores them in variables. The error
    handling and drawing table functions are also called from here.
*/
$().ready(function() {
    // select the form for validation by name attribute
    $("#input-form").validate({
        rules: {
            // set requirements for column start input
            cStart: {
                required: true,
                digits: true,
                range: [-50,50]
            },
            // set requirements for column end input
            cEnd: {
                required: true,
                digits: true,
                range: [-50,50],
                max: [cStart]
            },
            // set requirements for row start input
            rStart: {
                required: true,
                digits: true,
                range: [-50,50]
            },
            // set requirements for row end input
            rEnd: {
                required: true,
                digits: true,
                range: [-50,50],
                max: [rStart]
            }
        },

        messages: {
            cStart: {
                required: "A column start value is required",
                digits: "The value of column start input must be a digit",
                range: "You must input a digit between -50 and 50"
            },
            cEnd: {
                required: "A column end value is required",
                digits: "The value of column end input must be a digit",
                range: "You must input a digit between -50 and 50"
            },
            rStart: {
                required:  "A row start value is required",
                digits: "The value of row start input must be a digit",
                range: "You must input a digit between -50 and 50"
            },
            rEnd: {
                required: "A row end value is required",
                digits: "The value of row end input must be a digit",
                range: "You must input a digit between -50 and 50"
            }
        },

        submitHandler: function(form) {
            form.submit();
        }
    })
})

// function for validation of max greater than min
jQuery.validator.addMethod("max", function(value, element, params) {
    return this.optional(element) || value > params[0];
}, "The max value must be greater than the min value");

function getInput() {
    // read in values from form, form checks for number input on its own
    cStart = parseInt(document.getElementById('cStart').value, 10);
    cEnd = parseInt(document.getElementById('cEnd').value, 10);
    rStart = parseInt(document.getElementById('rStart').value, 10);
    rEnd = parseInt(document.getElementById('rEnd').value, 10);

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
