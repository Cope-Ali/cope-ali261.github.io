// create a new paragraph with text
function createStar() {
    var para = document.createElement("p");
    var node = document.createTextNode("This is a new paragraph element you just created!");
    para.appendChild(node);
    var element = document.getElementById("div1");
    element.appendChild(para);
}

//change list adding new li at the end
function changeList() {
    var node = document.createElement("li");
    var name = document.createTextNode("Joe vs. the Volcano");
    node.appendChild(name);
    document.getElementById("movies").appendChild(node);
}

//change list by adding new li at the top of list
function addFirst() {
    var newListItem = document.createElement("li");
    var name = document.createTextNode("Star Wars");
    newListItem.appendChild(name);
    var list = document.getElementById("movies2");
    list.insertBefore(newListItem, list.childNodes[0]);
}

//change list by removing item from list
function remove() {
    var list = document.getElementById("movies3");
    list.removeChild(list.childNodes[0]);
}
