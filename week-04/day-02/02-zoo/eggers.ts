'use strict'

import { Animal } from "./animal";

export abstract class Eggers extends Animal{
  breed(){
    return "Laying Eggs"
  }
}