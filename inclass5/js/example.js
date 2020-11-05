// ADD NEW ITEM TO END OF LIST
var new_el = document.createElement('li');
var text_node = document.createTextNode("cream");

new_el.appendChild(text_node);
document.getElementById("page").appendChild(new_el);

// ADD NEW ITEM START OF LIST
new_el = document.createElement('li');
text_node = document.createTextNode("kale");

new_el.appendChild(text_node);
document.getElementById("page").insertBefore(new_el, document.getElementById("page").childNodes[4]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
document.getElementsByTagName('li')[0].className = "cool";
document.getElementsByTagName('li')[1].className = "cool";
document.getElementsByTagName('li')[2].className = "cool";
document.getElementsByTagName('li')[3].className = "cool";
document.getElementsByTagName('li')[4].className = "cool";
document.getElementsByTagName('li')[5].className = "cool";

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
document.getElementsByTagName('h2')[0].innerHTML = "Buy groceries (" + (document.querySelectorAll('li').length + ")");
