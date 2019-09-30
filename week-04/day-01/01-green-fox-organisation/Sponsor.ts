"use strict"

import { Person } from "./Person";

export class Sponsor extends Person{
    private _company:string;
    private _hiredStudents:number;

    protected specificIntroduction():string{
        return "who represents " + this._company + " and hired " + this._hiredStudents + " people so far"
    }
    public hire(){
        this._hiredStudents += 1;
    }
    protected specificGoal():string{
        return "Hire brilliant junior software developers"
    }
    constructor(name?:string, age?:number, gender?:string, company:string = "Google",hiredStudents:number = 0){
        super(name, age, gender);
        this._company = company;
        this._hiredStudents = hiredStudents;
    }
}

// let UKN = new Sponsor()
// let Zoltan = new Sponsor("Zoltan", 65, "male", "IBM", 12);

// // UKN.introduce();
// // UKN.getGoal()

// // Zoltan.introduce();
// // Zoltan.getGoal()