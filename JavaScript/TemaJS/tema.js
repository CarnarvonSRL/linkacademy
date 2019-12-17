

function myFunction() {
    var age = document.getElementById("age").value;
    var message = document.getElementById("answer")


   if (age < 6){
message.innerHTML = "La varsta de " + age + "Tu esti in generatia Alpha";
}

else if (age < 20){
    message.innerHTML = "La varsta de " + age + "Tu esti in generatia Z";
}
else if (age < 35){
    message.innerHTML = "La varsta de " + age + "Tu esti in generatia Y";
}
else if (age < 50){
    message.innerHTML = "La varsta de " + age + "Tu esti in generatia X";
}
else if (age < 69 ){
    message.innerHTML = "La varsta de " + age + "Tu esti in generatia Boomers";
}
else {
    message.innerHTML = "La varsta de " + age + "Tu esti in generatia Builders";
}
}