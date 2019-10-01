'use strict'

import { Animal } from "./animal";

export class Mammal extends Animal{
  getName(){
    return this._name;
  }
  breed(){
    return "By pushing out miniature versions of itself"
  }
  constructor(name, age= 10, gender="female", numberOfLegs=4){
    super()
    this._name = name;
    this._age = age;
    this._gender = gender;
    this._numberOfLegs = numberOfLegs;
  }
}