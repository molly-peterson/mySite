/*
    Molly Peterson, molly_peterson@student.uml.edu
    University of Massachusetts Lowell
    Computer Science, COMP 4610 GUI I
    Task: Using jquery Slider and Tab widgets
    File: github.com/molly-peterson/mySite/A7/js/mult_table.js
    created: Nov 24, 2020 @ 9:00 PM
*/



// variables for holding form data
var cStart, cEnd, rStart, rEnd;
cStart = $("#cStart");
rStart = $("#rStart");
errortab = $("#error-tab");
var tbl, num_tabs;

// code found at: https://stackoverflow.com/questions/14702631/in-jquery-ui-1-9-how-do-you-create-new-tabs-dynamically
// this function creates the dynamic tabs as long as there are 10 or less
$(function(){
    $("#tabs").tabs();
    $("#save_button").click(function() {
        if($("#tabs ul li").length <= 10)
        {
            num_tabs = $("#tabs ul li").length + 1;
            $("#tabs ul").append(
                "<li id='tab_head" + num_tabs + "'><a href='#tab" + num_tabs + "'>" + cStart + "-" + cEnd
                + " x " + rStart + "-" + rEnd + "</a></li>"
            );
            $("#tabs").append(
                "<div id='tab" + num_tabs + "'>" + tbl + "</div>"
            );
            $("#tabs").tabs("refresh");
        }
    });
});

// delete the last tab
$(function(){
    $("#remove_single").click(function(){
        $("#tab_head" + num_tabs).remove();
        $("#tab" + num_tabs).remove();
        num_tabs = num_tabs - 1;
        $("#tabs").tabs("refresh");
    });
})

// delete all tabs
$(function(){
    $("#remove_all").click(function(){
        var i = parseInt(num_tabs, 10);
        for(i; i > 0; i--){
            $("#tab_head" + num_tabs).remove();
            $("#tab" + num_tabs).remove();
            num_tabs = num_tabs - 1;
        }
        $("#tabs").tabs("refresh");
    });
})

$(function() {
    // set up the first slider for column start
    $("#slider1").slider({
        min: -50,
        max: 50,
        step: 1,
        animate: true,
        values: [0],
        // update the slider and table
        slide: function(event, ui) {
            $("#cStart").val(ui.values[0]);
            getInput();
        }
    });
    $("#cStart").val($("#slider1").slider("values", 0));

    // set up the second slider for column end
    $("#slider2").slider({
        min: -50,
        max: 50,
        step: 1,
        animate: true,
        values: [0],
        // update the slider and table
        slide: function(event, ui) {
            $("#cEnd").val(ui.values[0]);
            getInput();
        }
    });
    $("#cEnd").val($("#slider2").slider("values", 0));

    // set up to third slider for row start
    $("#slider3").slider({
        min: -50,
        max: 50,
        step: 1,
        animate: true,
        values: [0],
        // update the slider and Table
        slide: function(event, ui) {
            $("#rStart").val(ui.values[0]);
            getInput();
        }
    });
    $("#rStart").val($("#slider3").slider("values", 0));

    // set up the fourth slider for row end
    $("#slider4").slider({
        min: -50,
        max: 50,
        step: 1,
        animate: true,
        values: [0],
        // update the slider and table
        slide: function(event, ui) {
            $("#rEnd").val(ui.values[0]);
            getInput();
        }
    });
    $("#rEnd").val($("#slider4").slider("values", 0));

    // The following is to update slider after input box use, code taken from
    // https://stackoverflow.com/questions/13058330/how-can-i-set-the-value-of-a-jquery-slider-based-on-a-form-submitted-input-field
    $("#cStart").on("keyup", function(){
        $("#slider1").slider("values", 0, ($("#cStart").val()));
        getInput();
    }).trigger("keyup");

    $("#cEnd").on("keyup", function(){
        $("#slider2").slider("values", 0, ($("#cEnd").val()));
        getInput();
    }).trigger("keyup");

    $("#rStart").on("keyup", function(){
        $("#slider3").slider("values", 0, ($("#rStart").val()));
        getInput();
    }).trigger("keyup");

    $("#rEnd").on("keyup", function(){
        $("#slider4").slider("values", 0, ($("#rEnd").val()));
        getInput();
    }).trigger("keyup");
});

/*
    This function is for form validation to make sure the inputs in the
    form are correct before table generation.
*/

$().ready(function() {

    // select the form for validation by name attribute

    $("#input-form").validate({

        rules: {

            // set requirements for column start input
            cStart: {
                required: true,
                range: [-50,50],
                digit: true,
				        max: false
            },

            // set requirements for column end input
            cEnd: {
                required: true,
                range: [-50,50],
                digit: true,
                max: cStart
            },

            // set requirements for row start input
            rStart: {
                required: true,
                range: [-50,50],
                digit: true,
				        max: false
            },

            // set requirements for row end input
            rEnd: {
                required: true,
                range: [-50,50],
                digit: true,
                max: rStart
            }
        },

        // move the error message placement
        errorElement: "div",
        errorPlacement: function(error, element) {
                element.after(error);
				error.css({position: "absolute"});
        },

        messages: {
            // custom error messages for column start
            cStart: {
                required: "A column start value is required",
                digit: "The value of column start input must be an integer",
                range: "You must input a digit between -50 and 50"
            },
            // custom error messages for column end
            cEnd: {
                required: "A column end value is required",
                digit: "The value of column end input must be an integer",
                range: "You must input a digit between -50 and 50"
            },
            // custom error messages for row start
            rStart: {
                required:  "A row start value is required",
                digit: "The value of row start input must be an integer",
                range: "You must input a digit between -50 and 50"
            },
            // custom error messages for row end
            rEnd: {
                required: "A row end value is required",
                digit: "The value of row end input must be an integer",
                range: "You must input a digit between -50 and 50"
            }
        },
    })
})

// function for validation of max greater than min
jQuery.validator.addMethod("max", function(value, element, param) {
return +$(element).val() > +$(param[0]).val();
}, "The max value must be greater than the min value");

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

    drawTable();
}

/*
    The drawTable function does not take any arguments and has no returns. This
    function creates the table to display on the page with the multiplication
    data.
*/

function drawTable() {
    tbl = "<table class=\"table-striped\">";

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
