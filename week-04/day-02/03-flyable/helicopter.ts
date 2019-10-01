'use strict'

import { Vehicle } from "./vehicle";
import { Flyable } from "./flyable";

class Helicopter extends Vehicle implements Flyable{
  constructor(name:string, wingspan?:number, speed?:number){
    super(name, wingspan, speed);
  }
}

let helicopter = new Helicopter("Sikorsky");

helicopter.takeOff();
helicopter.fly();
helicopter.land();