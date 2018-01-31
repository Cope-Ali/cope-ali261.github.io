//create JavaScript Object
var residentObject = {"name":"Mary", "apt":36};

//convert to JSON object with JSON.stringify
var residentString = JSON.stringify(resident);

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
    document.getElementById(parseDiv).innerHTML=resident;
}

//display JavaScript object
function displayStringify(){
    document.getElementById(stringifyDiv).innerHTML=residentString;
}

//display JavaScript object with date
function displayDate(){
    document.getElementById(dateDiv).innerHTML=residentObjectB;
}

