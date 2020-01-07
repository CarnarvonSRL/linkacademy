var name = "Alex";
var message = "Hello " + name + "!";
var timeout = 2000;
var isNight = false;
var isMorning = true;
var nothing = null;

var date = new Date();
var hour = date.getHours();

 if(hour >= 20  || hour <= 6) { 
     alert("Noapte buna!"); 
     alert("somn usor");

 } else if(hour <= 11) {
     alert("buna dimineata");

 } else if(hour<= 17) { 
     alert("buna ziua");
 } else { 
     alert("buna seara");
 }
setTimeout(sayHello, timeout);
function sayHello() {
    // alert(message);
    console.log(message);
    
}