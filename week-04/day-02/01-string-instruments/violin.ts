'use strict'

import { StringedInstrument } from "./stringed-instrument"

export class Violin extends StringedInstrument {

  sound() {
    return "Screech";
  }

  constructor(numberOfString = 4) {
    super(numberOfString, "Violin")
  }

}