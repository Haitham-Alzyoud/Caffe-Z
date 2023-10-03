let save = document.querySelector("#yes");
var newParagraph = document.createElement('p');
var newList = document.createElement('ul');
var newListItem1 = document.createElement('li');
var newListItem2 = document.createElement('li');
var newListItem3 = document.createElement('li');
var newListItem4 = document.createElement('li');

newParagraph.innerHTML ="User Info";

save.addEventListener("click", function(event){
    event.preventDefault();
    newListItem1.innerHTML = document.querySelector("input[name = name]").value;
    newListItem2.innerHTML = document.querySelector("input[name = age]").value;
    newListItem3.innerHTML = document.querySelector("input[name = choose]").value;
    newListItem4.innerHTML = document.querySelector("input[name = drink]").value;
});

newList.appendChild(newListItem1);
newList.appendChild(newListItem2);
newList.appendChild(newListItem3);
newList.appendChild(newListItem4);

document.body.appendChild(newParagraph);
document.body.appendChild(newList);
