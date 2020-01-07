var car = {
make: "Audi",
model: "A3",
year: 2019,
color: "red",
passengers: 4,
mileage: 2000,
engineIsOn: false,
fuel: 50,
maxFuel:50,
consumption: 7.5,
refill: function(num) {
    this.fuel += num;
    if (this.fuel + num > this.maxFuel) {
        this.fuel = this.maxFuel;
        console.log("too much!");

    } else{
        this.fuel += num;
    }

},



stop: function() {
    this.engineIsOn = false;
    if (this.engineIsOn){
        console.log("car stopped")}

        else {
            console.log("cars is already started");
        } 
},
start: function() {

    if (this.engineIsOn) {
        this.engineIsOn= true;
        console.log("car started");
    } else {
        console.log("cars is already stoped");
    } 
  },
}

car.mileage = 2150;
console.log(car.year);
console.log(car.mileage);
car.start();
car.stop();
car.start();
car.start();
car.engineIsOn = false;

for(prop in car) {
    console.log(prop + " = " + car[prop]);

}




































































