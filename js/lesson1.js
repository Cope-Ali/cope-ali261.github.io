<!doctype html>
<html lang="en-us">
<meta charset="utf-8">
<script type = "text/javascript">

var timesTableNum = parseInt(document.getElementById("timesTableNumInput").value);
var tableSize = parseInt(document.getElementById("timesTableSizeInput").value);
function timesTable(timesTableNum, tableSize){
    var ans = 0;
    var i = 0;
    var output = "";
    while (i<=tableSize){
    ans = timesTableNum*i
    output += timesTableNum + " x " + i + " = " + ans <br>;
    }
    document.getElementById("timesTableDiv").innerHTML = output;
}
</script>
