/*
    Molly Peterson molly_peterson@student.uml.edu
    UMass Lowell Computer Science, COMP 4610 GUI I
    December 17, 2020
    Task: Scrabble with Drag and drop
*/

// global variables
var player_score = 0;
var slot1_tile = "Blank", slot2_tile = "Blank", slot3_tile = "Blank", slot4_tile = "Blank";
var slot5_tile ="Blank", slot6_tile = "Blank", slot7_tile = "Blank";
var double_word = false;

// Associative Array from Assignment details
var ScrabbleTiles = [] ;
ScrabbleTiles["A"] = { "t_value" : 1,  "original_distribution" : 9,  "number_remaining" : 9  } ;
ScrabbleTiles["B"] = { "t_value" : 3,  "original_distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["C"] = { "t_value" : 3,  "original_distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["D"] = { "t_value" : 2,  "original_distribution" : 4,  "number_remaining" : 4  } ;
ScrabbleTiles["E"] = { "t_value" : 1,  "original_distribution" : 12, "number_remaining" : 12 } ;
ScrabbleTiles["F"] = { "t_value" : 4,  "original_distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["G"] = { "t_value" : 2,  "original_distribution" : 3,  "number_remaining" : 3  } ;
ScrabbleTiles["H"] = { "t_value" : 4,  "original_distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["I"] = { "t_value" : 1,  "original_distribution" : 9,  "number_remaining" : 9  } ;
ScrabbleTiles["J"] = { "t_value" : 8,  "original_distribution" : 1,  "number_remaining" : 1  } ;
ScrabbleTiles["K"] = { "t_value" : 5,  "original_distribution" : 1,  "number_remaining" : 1  } ;
ScrabbleTiles["L"] = { "t_value" : 1,  "original_distribution" : 4,  "number_remaining" : 4  } ;
ScrabbleTiles["M"] = { "t_value" : 3,  "original_distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["N"] = { "t_value" : 1,  "original_distribution" : 6,  "number_remaining" : 6  } ;
ScrabbleTiles["O"] = { "t_value" : 1,  "original_distribution" : 8,  "number_remaining" : 8  } ;
ScrabbleTiles["P"] = { "t_value" : 3,  "original_distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["Q"] = { "t_value" : 10, "original_distribution" : 1,  "number_remaining" : 1  } ;
ScrabbleTiles["R"] = { "t_value" : 1,  "original_distribution" : 6,  "number_remaining" : 6  } ;
ScrabbleTiles["S"] = { "t_value" : 1,  "original_distribution" : 4,  "number_remaining" : 4  } ;
ScrabbleTiles["T"] = { "t_value" : 1,  "original_distribution" : 6,  "number_remaining" : 6  } ;
ScrabbleTiles["U"] = { "t_value" : 1,  "original_distribution" : 4,  "number_remaining" : 4  } ;
ScrabbleTiles["V"] = { "t_value" : 4,  "original_distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["W"] = { "t_value" : 4,  "original_distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["X"] = { "t_value" : 8,  "original_distribution" : 1,  "number_remaining" : 1  } ;
ScrabbleTiles["Y"] = { "t_value" : 4,  "original_distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["Z"] = { "t_value" : 10, "original_distribution" : 1,  "number_remaining" : 1  } ;
ScrabbleTiles["Blank"] = { "t_value" : 0,  "original_distribution" : 2,  "number_remaining" : 2  } ;

// This is to initiate the first hand of the game
window.onload = function() {
    random_hand();
}


/*
    This function chooses random tile letters based on a random number
    generator that returns a number and those numbers are assigned to
    the letters.There is no input and the return is the tile type.
*/

function get_random_letter(tile_type) {
    // generate a random number
    var random_num = Math.random() * (27-0) + 0;
    random_num = Math.floor(random_num);

    // match the number to corresponding letter and assign tile type
    if(random_num === 0){
        tile_type = "A";
    }
    else if(random_num === 1){
        tile_type = "B";
    }
    else if(random_num === 2){
        tile_type = "C";
    }
    else if(random_num === 3){
        tile_type = "D";
    }
    else if(random_num === 4){
        tile_type = "E";
    }
    else if(random_num === 5){
        tile_type = "F";
    }
    else if(random_num === 6){
        tile_type = "G";
    }
    else if(random_num === 7){
        tile_type = "H";
    }
    else if(random_num === 8){
        tile_type = "I";
    }
    else if(random_num === 9){
        tile_type = "J";
    }
    else if(random_num === 10){
        tile_type = "K";
    }
    else if(random_num === 11){
        tile_type = "L";
    }
    else if(random_num === 12){
        tile_type = "M";
    }
    else if(random_num === 13){
        tile_type = "N";
    }
    else if(random_num === 14){
        tile_type = "O";
    }
    else if(random_num === 15){
        tile_type = "P";
    }
    else if(random_num === 16){
        tile_type = "Q";
    }
    else if(random_num === 17){
        tile_type = "R";
    }
    else if(random_num === 18){
        tile_type = "S";
    }
    else if(random_num === 19){
        tile_type = "T";
    }
    else if(random_num === 20){
        tile_type = "U";
    }
    else if(random_num === 21){
        tile_type = "V";
    }
    else if(random_num === 22){
        tile_type = "W";
    }
    else if(random_num === 23){
        tile_type = "X";
    }
    else if(random_num === 24){
        tile_type = "Y";
    }
    else if(random_num === 25){
        tile_type = "Z";
    }
    else {
        tile_type = "Blank";
    }

    return tile_type;
}


/*
    This function takes no input and doesn't return anything. The purpose of
    random_hand() is to select the 7 tiles by calling get_random_letter()
    and then the tiles are placed on the page. Then the drag and drop
    functionality is added.
*/

function random_hand() {
    var temp_html = "", tile_type, i, need_more_tiles;

    // grab 7 letters for rack
    for(i = 1; i <= 7; i++){
        need_more_tiles = true;
        // ensures 7 tiles are pulled even when letters are depleted
        while(need_more_tiles === true){
            // pull that tile if there are some remaining
            tile_type = get_random_letter(tile_type);
            if(ScrabbleTiles[tile_type].number_remaining === 0) {
                need_more_tiles = true;
            }
            else {
                ScrabbleTiles[tile_type].number_remaining -= 1;
                need_more_tiles= false;
            }
        }

        // pick the correct image of tile selected
        temp_html = temp_html + "<div id=\"tile" + i + "\" class=\"draggable ui-draggable ui-draggable-handle\" name=\"" + tile_type + "\">";
        temp_html = temp_html + "<img id=\"" + tile_type + "\" src=\"img/" + tile_type + ".jpg\"";
        temp_html = temp_html + "width = \"60\"/></div>";
    }

    // add tile to the page
    document.getElementById('tiles').innerHTML = temp_html;

    // https://jqueryui.com/draggable/
    $(function(){
        // set up the drag for objects
        var my_drag_object;
        $(".draggable").draggable({
            start: function(event, ui) {
                my_drag_object = $(this).closest('div').attr('name');
            },
            // attempt to keep the letters only in the board
            containment: '#my_board',
            snap: '.droppable',
            snapMode: 'inner'
        });

        // create drop spaces for all the board spaces
        // https://jqueryui.com/droppable/
        $("#droppable1").droppable({
            drop: function(event, ui) {
                // assign the tile from drag object to global var

                $(ui.draggable).detach().css({top: 0, left: 0}).appendTo(this);
                $(this)
                .find("p")
                    .html(my_drag_object);
            }
        });

        $("#droppable2").droppable({
            drop: function(event, ui) {
                // turn on double word flag for score calculation
                double_word = true;
                slot2_tile = my_drag_object;
                $(this)
                .find("p")
                    .html(my_drag_object);
            }
        });

        $("#droppable3").droppable({
            drop: function(event, ui) {
                slot3_tile = my_drag_object;
                $(this)
                .find("p")
                    .html(my_drag_object);
            }
        });

        $("#droppable4").droppable({
            drop: function(event, ui) {
                slot4_tile = my_drag_object;
                $(this)
                .find("p")
                    .html(my_drag_object);
            }
        });

        $("#droppable5").droppable({
            drop: function(event, ui) {
                slot5_tile = my_drag_object;
                $(this)
                .find("p")
                    .html(my_drag_object);
            }
        });

        $("#droppable6").droppable({
            drop: function(event, ui) {
                double_word = true;
                slot6_tile = my_drag_object;
                $(this)
                .find("p")
                    .html(my_drag_object);
            }
        });

        $("#droppable7").droppable({
            drop: function(event, ui) {
                slot7_tile = my_drag_object;
                $(this)
                .find("p")
                    .html(my_drag_object);
            }
        });
    });

}


/*
    This function is called when the submit word button is pressed.
    It takes no arguments and doesn't return anything. The value of
    each tile is read in and added to the score tally for this hand
    and then added on to a running total before being written to the
    page. Then the tile information for each slot is reset as well
    as the double word flag.
*/

function submit_hand(){
    var score_tally = 0;

    // add up the score for each tile
    score_tally = score_tally + (ScrabbleTiles[slot1_tile].t_value);
    score_tally = score_tally + (ScrabbleTiles[slot2_tile].t_value);
    score_tally = score_tally + (ScrabbleTiles[slot3_tile].t_value);
    score_tally = score_tally + (ScrabbleTiles[slot4_tile].t_value);
    score_tally = score_tally + (ScrabbleTiles[slot5_tile].t_value);
    score_tally = score_tally + (ScrabbleTiles[slot6_tile].t_value);
    score_tally = score_tally + (ScrabbleTiles[slot7_tile].t_value);


    // add the bonus points when applicable
    if(double_word === true) {
        score_tally = score_tally * 2;
    }

    // update the score to the page
    player_score = player_score + score_tally;
    document.getElementById('score_total').innerHTML = "<p>" + player_score + "</p>";

    // reset for next word
    slot1_tile = "Blank";
    slot2_tile = "Blank";
    slot3_tile = "Blank";
    slot4_tile = "Blank";
    slot5_tile = "Blank";
    slot6_tile = "Blank";
    slot7_tile = "Blank";

    double_word = false;

    // get a new hand for next round
    random_hand();
}

/*
    This function is called when the reset button is clicked. It also takes
    no arguments and has no return. It resets the total points to 0 and
    then changes the number of remaining tiles to be how many were
    in the original distribution before calling random_hand().
*/

function game_reset(){
    // Reset game total
    document.getElementById('score_total').innerHTML = "<p>0</p>";
    player_score = 0;


    // change letters left to be the original amount
    for(var k in ScrabbleTiles) {
        ScrabbleTiles[k].number_remaining = ScrabbleTiles[k].original_distribution;
    }

    random_hand();

}
