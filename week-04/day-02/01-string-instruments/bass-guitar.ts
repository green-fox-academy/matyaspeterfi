'use strict'

import { StringedInstrument } from "./stringed-instrument"

export class BassGuitar extends StringedInstrument {

  sound() {
    return "Duum-duum-duum";
  }

  constructor(numberOfString: number = 4, name: string = "Bass Guitar") {
    super()
    this._name = name;
    this._numberOfString = numberOfString;
  }

}