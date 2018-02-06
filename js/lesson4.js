function requestDisplay(){
var xhttp = new XMLHttpRequest();
    var results = document.getElementById('displayDiv');
xhttp.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200){
        var data = JSON.parse(r.responseText);
        for (i=0;i<data.length;i++){
            results.innerHTML += '<li>'+data[i].f+'</li>'
        }
    }
}
xhttp.open("GET", "https://www.filltext.com/?rows=10&firstname={firstName}&lastname={lastName}&email={email}&pretty=true", true);
    xhttp.send();
};
