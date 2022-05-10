//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

class Car extends Vehicle {
    constructor (make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassenger(num) {
        if (this.passenger < this.maximumPassengers){
            if ((num + this.passenger) <= this.maximumPassengers) {
                this.passenger = num;
                return this.passenger;
        } 
    
        else {
            console.log(this.model + " " + this.make + " cannot take all passengers.");
        }
     }
      else {
            console.log(this.model + " " + this.make + " is full");
        }
    }
    start() {
        if (this.fuel > 0){
            console.log("Engine On!");
            return this.started = true
        }
        else {
            console.log("Out of Fuel!");
            return this.started = false;
        }
    }
    scheduleService() {
        if (this.mileage > 30000){
            this.scheduleService = true
            return this.scheduleService;
        }
    }
}


//this shows how to call from this module...
//  let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
//  console.log(v.make)