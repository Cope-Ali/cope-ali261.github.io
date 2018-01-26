// times table function. accepts a times table number and table size from user and displays the times table using a while loop//

function timesTable(timesTableNum, tableSize) {
    var timesTableNum = parseInt(document.getElementById("timesTableNumInput").value);
    var tableSize = parseInt(document.getElementById("timesTableSizeInput").value);
    var ans = 0;
    var i = 0;
    var output = "";
    while (i <= tableSize) {
        ans = timesTableNum * i;
        output += timesTableNum + " x " + i + " = " + ans + "<br>";
        i++;
    }
    document.getElementById("timesTableDiv").innerHTML = output;
}

// Can you Ride function. Determine if a rider can ride space mountain by themselves. Conditions=Must be 7 and 40 in
function canRide(age, height) {
    var age = parseInt(document.getElementById("riderAge").value);
    var height = parseInt(document.getElementById("riderHeight").value);
    var output = "";
    if (age >= 7 && height >= 40) {
        output = "Hooray! You can ride Space Mountain by yourself!";
    } else if (height >= 40) {
        output = "Not quite old enough, but don't give up! You can still ride with another rider who is 14 or older!";
    } else {
        output = "I am sorry you must be over 40 inches to ride, and 7 or older to ride by yourself";
    }
    document.getElementById("rideDiv").innerHTML = output;
}
var rides = new Array(6);
var rides = ["Space Mountain", " Dumbo", " Star Tours", " Splash Mountain", " Jungle Cruise", " Teacups"];

function addRide() {
    newArrayRide = document.getElementById("newRide").value;
    rides.push(newArrayRide);
    document.getElementById("ridesArrayDiv").innerHTML = rides.toString();
}

function addPirates() {
    rides[4] = "Pirates";
    document.getElementById("updatedRidesDiv").innerHTML = rides.toString();
}
