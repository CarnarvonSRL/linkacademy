var scores = [11, 112, 14, 23, 24, 99, 89, 78, 67];
var fruits = ["mandarine", "nuci", "struguri"];

var max = 0;
var poss;

for(var i = 0; i < scores.length; i++){
    if(scores[i] > max) {
        max = scores[i];
        position = i;
    }
}

document.write(max + " bule pe pozitia " + position);

max = fruits[0];

for(var i = 0; i < fruits.length; i++){
    if(scores[i] > max) {
        max = scores[i];
        position = i;
    }
}

document.write("cele mai mari fructe sunt " + max);




// array cu while exemplul
