'use strict'

import { Instrument } from "./instrument";

export abstract class StringedInstrument extends Instrument {

  _numberOfString: number;

  abstract sound();

  play() {
    console.log((`${this._name} a ${this._numberOfString}-stringed instrument that goes that goes ${this.sound()}`))
  }
  constructor(numberOfString:number, name?:string){
    super(name);
    this._numberOfString = numberOfString;
  }
}