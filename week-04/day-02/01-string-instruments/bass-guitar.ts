'use strict'

import { StringedInstrument } from "./stringed-instrument"

export class BassGuitar extends StringedInstrument {

  sound() {
    return "Duum-duum-duum";
  }

  constructor(numberOfString: number = 4) {
    super(numberOfString, "Bass Guitar");
  }

}