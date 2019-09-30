'use strict'
import { Person } from "./Person"

export class Student extends Person{
    private _previousOrganisation:string;
    private _skippedDays:number;

    protected specificGoal():string{
        return "Be a Junior Software Developer!"
    }
    protected specificIntroduction():string{
        return " from " + this._previousOrganisation + " who skipped " + this._skippedDays + " from the course already";
    }
    skipDays(numberOfDays){
        this._skippedDays += numberOfDays;
    }

    constructor(name?:string, age?:number, gender?:string, previousOrganisation = "School Of Life"){
        super(name, age, gender);
        this._previousOrganisation = previousOrganisation;
        this._skippedDays = 0;
    }

}

// let Geza = new Student("Geza", 29, "Male")
// // Geza.getGoal();
// Geza.skipDays(3);
// // Geza.introduce()