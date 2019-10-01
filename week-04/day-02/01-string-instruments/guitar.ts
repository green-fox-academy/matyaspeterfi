'use strict'

import { StringedInstrument } from "./stringed-instrument"

export class ElectricGuitar extends StringedInstrument {

  sound() {
    return "Twang";
  }

  constructor(numberOfString = 6) {
    super(numberOfString, "Electric Guitar");
  }

}
