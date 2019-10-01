'use strict'

import { StringedInstrument } from "./stringed-instrument"

export class ElectricGuitar extends StringedInstrument{

    sound(){
        return "Twang";
    }

    constructor(numberOfString=6, name="Guitar"){
        super()
        this._name = name;
        this._numberOfString = numberOfString;
    }

}
