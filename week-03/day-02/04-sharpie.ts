'use strict'

export class sharpie{

    _color: string;
    _width: number;
    _inkAmount: number = 100;


    use(){
        this._inkAmount -= 1;
    }


    constructor(_color, _width, _inkAmount?){
        this._color = _color;
        this._width = _width;
    };
};

let yellow = new sharpie("yellow", 0.5);

yellow.use()
yellow.use()


console.log(yellow._inkAmount)

