function requestDisplay() {
    var xhttp = new XMLHttpRequest();
    var results = document.getElementById('displayDiv');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(xhttp.responseText);
            for (i = 0; i < 10; i++) {
                results.innerHTML += '<li>' + "family: " + data.items[i].family + " , " +
                    "category: " + data.items[i].category + '</li>';
                console.log(data);
            }
        }
    }
    xhttp.open("GET", "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDGCSG48HaUElIeULsDvk5XyHfSh7gNGNM", true);
    xhttp.send();
};
