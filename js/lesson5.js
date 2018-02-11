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
        var colorArrayString = JSON.stringify (colorArrayIn);
        localStorage.setItem("colorArray", colorArrayString);
    } else {
        var output = "I am sorry your browser doesn't support local storage.";
        document.getElementById("arrayOutput").innerHTML = output;
    }
}
//display array
function displayArray() {
    var colors = localStorage.getItem colorArrayString;
    var colorsArray = [JSON.parse (colors);
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
        var array = [name: nameIn, food: foodIn, music: musicIn, movie: movieIn, insect: insectIn];
        var assocArrayString = JSON.stringify(array);
        localStorage.setItem (assocArrayString);
    } else {
        var output = "I am sorry your browser doesn't support local storage.";
        document.getElementById("assocArrayOutput").innerHTML = output;
    }
}
//display Associative array
function displayAssocArrayValue() {
    var arrayName = document.getElementById("nameForArray");
    var arrayValue = document.getElementById("arrayValueName");
    if arrayValue == ("NAME" || "Name" || "name") {
        arrayValue = "name";
    }
    if arrayValue == ("FOOD" || "Food" || "food") {
        arrayValue = "food";
    }
    if
    else arrayValue == ("MUSIC" || "Music" || "music") {
        arrayValue = "music";
    }
    if
    else arrayValue == ("MOVIE" || "Movie" || "movie") {
        arrayValue = "movie";
    }
    if
    else arrayValue == ("INSECT" || "Insect" || "insect") {
        arrayValue = "insect";
    }
    else {
        document.getElementById("assocArrayOutput").innerHTML = "Please enter a vaild catagory."
    }
    var getArray = localStorage.getItem assocArrayString;
    var favoriteArray = [JSON.parse(getArray)]
    var output = favoriteArray.arrayValue;
    document.getElementById("assocArrayOutput").innerHTML = output;
}
