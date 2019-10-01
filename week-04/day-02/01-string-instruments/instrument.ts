'use strict'

import { StringedInstrument } from "./stringed-instrument" 

export abstract class Instrument{
    protected _name:string;;

    abstract play() :void
}

