'use strict'

import { Animal } from "./animal";

export class Mammal extends Animal{
  breed(){
    return "pushing out miniature versions of itself"
  }
  constructor(name){
    super()
    this._name = name;
  }
}