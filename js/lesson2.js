//Create an object
var galaxyx = {
    model: "GalaxyX",
    make: "Samsung",
    release: "2018"
};

var iphonex = {
    model: "iPhoneX",
    make: "Apple",
    release: "2017"
};
//Display galaxyx and iphonex object values
function displayObject() {
    var output = Object.values(galaxyx) + "<br>" + Object.values(iphonex);
    document.getElementById("displayobj").innerHTML=output;
}

// add a method to display make and model together
function createMethod() {
    galaxyx.display = function(){return this.make + " " + this.model;};
    iphonex.display = function(){return this.make + " " + this.model;};
}

// display object with new method
function addMethod() {
    createMethod();
    output = galaxyx.display() + "<br>" + iphonex.display();
    document.getElementById("methoddiv").innerHTML=output;
}

//Display all objects
function displayAllObjects() {
    output = Object.values(galaxyx) + "<br>" + Object.values(iphonex);
    document.getElementById("displayalldiv").innerHTML=output;
}
