alert = function() {

var planet = document.querySelector("#redplanet");
planet.innerHTML = "Äliens approaching!";
planet.style.color = "red";

}
clear = function(){

    planet.innerHTML = "nothing to report";
planet.style.color = "black";
}
document.querySelector("#redplanet").onmouseover = alert;
document.querySelector("#redplanet").onmouseout = clear;