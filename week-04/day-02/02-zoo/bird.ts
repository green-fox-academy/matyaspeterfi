'use strict'

import { Animal } from "./animal";
import { Eggers } from "./eggers"

export class Bird extends Eggers{

  constructor(name){
    super()
    this._name = name;
  }
}