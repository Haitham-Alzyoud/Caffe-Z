let userName = prompt("Please enter your name:");
let userGender = prompt("Please enter your gender (male or female):").toLowerCase();
let userDrinkType = prompt("Would you like a hot or cold drink?").toLowerCase();
let userDrinkName = prompt("Please enter the name of the drink you want:");

var div = document.getElementById("orderInfo");
var newParagraph = document.createElement('p');
var newList = document.createElement('ul');
var newListItem1 = document.createElement('li');
var newListItem2 = document.createElement('li');
var newListItem3 = document.createElement('li');
var newListItem4 = document.createElement('li');

div.appendChild(newParagraph);
newParagraph.innerHTML ="User Info";
div.appendChild(newList);

newListItem1.innerHTML = `name: ${userName}`;
newListItem2.innerHTML = `Gender: ${userGender}`;
newListItem3.innerHTML = `Drink Type: ${userDrinkType}`;
newListItem4.innerHTML = `Drink Name: ${userDrinkName}`;

newList.appendChild (newListItem1);
newList.appendChild (newListItem2);
newList.appendChild (newListItem3);
newList.appendChild (newListItem4);

document.body.appendChild(div);
