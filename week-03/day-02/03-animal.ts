export class animal{

    _hunger: number = 50;
    _thirst: number = 50;
    
    eat(){
        this._hunger -= 1;
    }

    drink(){
        this._thirst -= 1;
    }

    play(){
        this._thirst += 1;
        this._hunger += 1;
    }

}

let zebra = new animal();

zebra.drink();
zebra.eat();

console.log(zebra._thirst);
console.log(zebra._hunger);

zebra.play();

console.log(zebra._thirst);
console.log(zebra._hunger);
