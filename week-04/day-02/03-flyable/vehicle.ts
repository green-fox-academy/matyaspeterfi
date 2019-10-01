'use strict'

import {Flyable} from "./flyable";
import { Eggers } from "../02-zoo/eggers";

export abstract class Vehicle extends Eggers{
  protected _name:string;
  protected _wingspan:number = 22;
  protected _speed:number = 500;

  takeOff(){
    console.log("I\'m takin off y\'all!");
  };
  fly(){
    console.log("I\'m Mary Poppins Y\'all!");
  };
  land(){
    console.log("I\'m landin y\'all!");
  };

  constructor(name, wingspan?, speed?){
    super()
    this._name = name;
    this._wingspan = wingspan;
    this._speed = speed;
  }
}