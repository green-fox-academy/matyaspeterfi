'use strict'

import { StringedInstrument } from "./stringed-instrument"

export class Violin extends StringedInstrument {

  sound() {
    return "Screech";
  }

  constructor(numberOfString = 4, name = "Violin") {
    super()
    this._name = name;
    this._numberOfString = numberOfString;
  }

}