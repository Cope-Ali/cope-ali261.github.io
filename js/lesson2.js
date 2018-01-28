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
    document.getElementById(displayObject1).innerHTML = output;
}

// add a method to display make and model together
function createMethod() {
    galaxyx["display"] = "function(){return this.make + "
    " + this.model}";
    iphonex["display"] = "function(){return this.make + "
    " + this.model}";
}

// display object with new method
function addMethod() {
    createMethod()
    output = Object.values(galaxyx) + "<br>" + Object.values(iphonex);
    document.getElementById(methoddiv).innerHTML = output;
}

// create new phone model using galaxyx as a prototype
function createPrototype() {
    var galaxys9 = Object.create(galaxyx);
}

//display prototype
function displayObject2() {
    output = Object.values(galaxys9);
    document.getElementById(prototypediv).innerHTML = output;
}

//change the value of model to GalaxyS9
function changeModel() {
    galaxys9.model = "GalaxyS9";
}

//Display function with changed model
function displayChangedModel() {
    output = Object.values(galaxys9);
    document.getElementById(changedmodeldiv).innerHTML = output;
}

//Display all objects
function displayAllObjects() {
    output = Object.values(galaxyx) + "<br>" + Object.values(iphonex) + "<br>" + Object.values(galaxys9);
    document.getElementById(displayalldiv).innerHTML = output;
}
