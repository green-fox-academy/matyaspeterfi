'use strict'

import { Animal } from "./animal";

export abstract class Eggers extends Animal{
  breed(){
    return "By Laying Eggs"
  }
  abstract getName();
}