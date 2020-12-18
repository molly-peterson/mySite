Assignment 8 README
Molly Peterson molly_peterson@student.uml.edu
COMP 4610 GUI I
Assignment 8: Scrabble with Drag and Drop

For this assignment I used two late tokens.

I did not get this assignment fully functioning. My droppable functions are
not being called upon the drop of a draggable item and I don't understand why.
This code seems to look exactly like how it is outlined on jQuery UI's
documentation website. Because of this, the score doesn't update since the
function exits right after calling draggable and the letter name is lost
since the variable is local to the function that contains all of the draggable
and droppable functions. If the droppables were called correctly then they
would update their slot_tile with the letter value to be able to
appropriately calculate score and the double word flag would be set if one
of the droppables containing that double word space was entered. I also have
a global variable for score that updates and adds on every time that a word
is submitted so that I can have a running total and on reset it will set that
global back to 0.

I added a new hand button to test that my tiles were being used up and decrementing
correctly, but this breaks if you hit new hand when no tiles are left and is left
hanging. I used it to test my reset, since I know new hand works and hangs when
no tiles are left. I waited until I saw both blank tiles and then would reset and
make sure I saw them again.

After each round the board clears, but all tiles are replaced instead of just the
few that are missing. My tiles are selected randomly with a random function. The
tiles can be dragged and dropped onto the board. I did not get it to lock onto 
the board or bounce back to the rack on bad placement. I also did not Implement
only placing letters next to each other. Any number of words can be played until
reset or when the player runs out of tiles.

repository link: https://github.com/molly-peterson/mySite/tree/gh-pages/A8
site link: https://molly-peterson.github.io/mySite/A8/index.html
