//Petrol Station
// Create a Station and a Car classes
// Station
// gasAmount
// refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
// gasAmount
// capacity
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100


class PetrolStation {

    public _stationGasAmount: number = 5000;

    refill(car: Car){
        this._stationGasAmount = this._stationGasAmount - (car._capacity - car._gasAmount);
        car._gasAmount = car._gasAmount + (car._capacity - car._gasAmount);
        
    }

}

class Car {

    public _gasAmount: number
    public _capacity: number

    constructor(){
        this._gasAmount = 0;
        this._capacity = 100;
    }
}

let trabant = new Car();

let station = new PetrolStation();

station.refill(trabant);

console.log(trabant._gasAmount)
console.log(station._stationGasAmount)