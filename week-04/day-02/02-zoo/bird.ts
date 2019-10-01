'use strict'

import { Animal } from "./animal";
import { Eggers } from "./eggers"

export class Bird extends Eggers{
  getName(){
    return this._name;
  }
  constructor(name, age= 5, gender="female", numberOfLegs=2){
    super()
    this._name = name;
    this._age = age;
    this._gender = gender;
    this._numberOfLegs = numberOfLegs;
  }
}