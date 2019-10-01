'use strict'

import { Animal } from "./animal";
import { Eggers } from "./eggers"

export class Reptile extends Eggers{
  getName(){
    return this._name;
  }
  constructor(name, age= 10, gender="female", numberOfLegs=4){
    super()
    this._name = name;
    this._age = age;
    this._gender = gender;
    this._numberOfLegs = numberOfLegs;
  }
}