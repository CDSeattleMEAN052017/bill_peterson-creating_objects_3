function VehicleConstructor(name, numWheels, numPassengers, speed){
  this.name = name;
  this.numWheels = numWheels;
  this.numPassengers = numPassengers;
  this.speed = speed;
  this.vin = this.createVIN();

  this.move = function(){
    updateDistanceTravelled();
    this.makeNoise();
  }

  this.checkMiles = function(){
    console.log(distance_travelled);
  }

  var self = this;
  var distance_travelled = 0;

  var updateDistanceTravelled = function(){
    distance_travelled += self.speed;
  }
}

VehicleConstructor.prototype.makeNoise = function(){
  console.log("Beep beep");
}

VehicleConstructor.prototype.createVIN = function(){
  var newVIN = "";
  for(var i = 0; i < 10; i++){
    newVIN += Math.floor(Math.random() * 10);
  }
  return newVIN;
}

var bike = new VehicleConstructor("Bike", 2, 1, 15);

bike.makeNoise = function(){
  console.log("Ring ring!");
}

var sedan = new VehicleConstructor("Sedan", 4, 5, 100);

sedan.makeNoise = function(){
  console.log("Honk Honk!");
}

var bus = new VehicleConstructor("Bus", 6, 40, 50);

bus.passengerCount = 0;

bus.pickUp = function(numPickUp){
  if(this.passengerCount + numPickUp > this.numPassengers){
    console.log("These passengers will overload the bus, you must pick up fewer passengers.")
  }
  else{
    this.passengerCount += numPickUp;
    console.log(numPickUp + " people have been picked up!  The bus is now carrying " + this.passengerCount + " people!");
  }
}

bike.makeNoise();
sedan.makeNoise();
bus.makeNoise();
bus.pickUp(12);
bus.pickUp(15);
bus.pickUp(6);
bus.pickUp(20);

bike.move();
bike.checkMiles();
console.log(bus.vin);
console.log(bike.vin);
console.log(sedan.vin);
