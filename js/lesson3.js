
//display JSON object
function displayParse() {
    var resident = JSON.parse('{"name":"Mary", "apt":36}');
    document.getElementById("parseDiv").innerHTML = resident;
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
    var residentObjectB = JSON.parse(residentString, function (key, value) {
    if (key == "leaseDate") {
        return new Date(value);} 
        else {
        return value;}
})
    var output = residentObjectB;
    document.getElementById("dateDiv").innerHTML = output;
}
