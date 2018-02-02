//create JavaScript Object
var residentObject = {name:"Mary", apt:36};

//convert to JSON object with JSON.stringify
var residentString = JSON.stringify(residentObject);

//convert from JSON object into JavaScript object with JSON.parse
var resident = JSON.parse(residentString);

//add date to resident object
resident.leaseDate = 2012-10-15;

//convert JavaScript object back to JSON object
var residentStringB = JSON.stringify(resident);

//convert date from JSON object into date in JavaScript Object
var residentObjectB = JSON.parse(residentStringB, function(key,value){
    if(key=="leaseDate"){
        return new Date(value);}
    else{
        return value;
    }

})

//display JSON object
function displayParse(){
    var residentObject = {name:"Mary", apt:36};

    //convert to JSON object with JSON.stringify
    var residentString = JSON.stringify(residentObject);

    //convert from JSON object into JavaScript object with JSON.parse
    var resident = JSON.parse(residentString);

    var output = resident;
    document.getElementById("parseDiv").innerHTML=output;
}

//display JavaScript object
function displayStringify(){
    //create JavaScript Object
    var residentObject = {name:"Mary", apt:36};

    //convert to JSON object with JSON.stringify
    var residentString = JSON.stringify(residentObject);

    var output = residentString;
    document.getElementById("stringifyDiv").innerHTML=output;
}

//display JavaScript object with date
function displayDate(){
    //create JavaScript Object
    var residentObject = {name:"Mary", apt:36};

    //add date to resident object
    resident.leaseDate = 2012-10-15;

    //convert JavaScript object back to JSON object
    var residentStringB = JSON.stringify(resident);

    //convert date from JSON object into date in JavaScript Object
    var residentObjectB = JSON.parse(residentStringB, function(key,value){
        if(key=="leaseDate"){
            return new Date(value);}
        else{
            return value;
        }

    })
    var output = residentObjectB;
    document.getElementById("dateDiv").innerHTML=output;
}

