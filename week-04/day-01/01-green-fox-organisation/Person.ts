'use strict'


export class Person{

    protected _name:string;
    protected _age:number;
    protected _gender:string;

    public introduce() :void{
        console.log("Hi, I'm " + this._name + " a " + this._age + " year old " + this._gender + " " + this.specificIntroduction() + ".");
    }
    public getGoal() : void{
        console.log("My goal is: " + this.specificGoal() + ".")
    }

    protected specificGoal():string{
        return "Live for the moment!";
    }
    protected specificIntroduction():string{
        return "";
    }
    constructor(name:string = "Jane Doe", age:number = 30, gender:string = "female"){
        
            this._name = name,
            this._age = age,
            this._gender = gender
    }
} 

let Kalman = new Person("Kalman", 90, "male");

