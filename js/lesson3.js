
//display JSON object
function displayParse() {
    var residentString = '{"name":"Mary", "apt":36}';
    var resident = JSON.parse(residentString);
    var output = resident;
    document.getElementById("parseDiv").innerHTML = output;
}

//display JavaScript object
function displayStringify() {
    var residentObject = {name:"Mary", apt:36};

//convert to JSON object with JSON.stringify
    var residentString = JSON.stringify(residentObject);
    var output = residentString;
    document.getElementById("stringifyDiv").innerHTML = output;
}

//display JavaScript object with date
function displayDate() {
    var residentString = '{"name":"Mary", "apt":36, "leaseDate":"2012-10-15"}';
    var residentObjectB = JSON.parse(residentStringB, function (key, value) {
    if (key == "leaseDate") {
        return new Date(value);} 
        else {
        return value;}
})
    var output = residentObjectB;
    document.getElementById("dateDiv").innerHTML = output;
}
