//Object//
//save object
function saveColor() {
    if (typeof (Storage) !== "undefined") {
        var colorIn = document.getElementById('favoriteColor');
        localStorage.setItem("favColor", colorIn);
    } else {
        var output = "I am sorry your browser doesn't support local storage.";
        document.getElementById("outputColor").innerHTML = output;
    }
}
//display object
function showColor() {
    var colorOut = localStorage.getItem("favColor");
    document.getElementById("outputColor").innerHTML = "Favorite Color: " + colorOut;
}

//Array//
//save array
function saveArray() {
    if (typeof (Storage) !== "undefined") {
        var colorArrayIn = [document.getElementById('colorArray')];
        var colorArrayString = JSON.stringify(colorArrayIn);
        localStorage.setItem("colorArray", colorArrayString);
    } else {
        var output = "I am sorry your browser doesn't support local storage.";
        document.getElementById("arrayOutput").innerHTML = output;
    }
}
//display array
function displayArray() {
    var colors = localStorage.getItem("colorArrayString");
    var colorsArray = [JSON.parse(colors)];
    var number = parseFloat(document.getElementById('arrayNum'));
    var output = colorsArray[number];
    document.getElementById("arrayOutput").innerHTML = output;
}

//Associative Array//
//save Associative Array
function saveAssocArray() {
    if (typeof (Storage) !== "undefined") {
        var nameIn = document.getElementById("name");
        var foodIn = document.getElementById("food");
        var musicIn = document.getElementById("music");
        var movieIn = document.getElementById("movie");
        var insectIn = document.getElementById("insect");
        var array = {
            name: nameIn,
            food: foodIn,
            music: musicIn,
            movie: movieIn,
            insect: insectIn
        };
        var assocArrayString = JSON.stringify(array);
        localStorage.setItem(assocArrayString);
    } else {
        var output = "I am sorry your browser doesn't support local storage.";
        document.getElementById("assocArrayOutput").innerHTML = output;
    }
}
//display Associative array
function displayAssocArrayValue() {
    var arrayValue = document.getElementById("arrayValueName");
    var value = function convertValue(arrayValue){
    if (arrayValue == "NAME" || arrayValue == "Name" || arrayValue == "name") {
        arrayValue = "name";
    }
    else if (arrayValue == "FOOD" || arrayValue == "Food" || arrayValue == "food") {
        arrayValue = "food";
    }
   else if (arrayValue == "MUSIC" || arrayValue == "Music" || arrayValue == "music") {
        arrayValue = "music";
    }
    else if(arrayValue == "MOVIE" || arrayValue == "Movie" || arrayValue == "movie") {
        arrayValue = "movie";
    }
    else if (arrayValue == "INSECT" || arrayValue == "Insect" || arrayValue == "insect") {
        arrayValue = "insect";
    }
    else {
        document.getElementById("assocArrayOutput").innerHTML = "Please enter a vaild catagory."
    }
    return arrayValue}
    var getArray = localStorage.getItem( "assocArrayString");
    var favoriteArray = [JSON.parse(getArray)]
    var output = favoriteArray.arrayValue;
    document.getElementById("assocArrayOutput").innerHTML = output;
}
