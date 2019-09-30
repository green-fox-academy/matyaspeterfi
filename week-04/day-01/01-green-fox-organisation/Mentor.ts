'use strict'

import { Person } from "./Person";

export class Mentor extends Person{
    _level:string;

    protected specificGoal():string{
        return "Educate brilliant junior software developers!"
    }
    protected specificIntroduction():string{
        return this._level + " mentor";
    }

    constructor(name?, age?, gender?, level = "intermediate"){
        super(name, age, gender);
        this._level = level;
    }
}

// let Rozi = new Mentor("Rozi", 25, "female", "advanced")

// // Rozi.getGoal();
// //Rozi.introduce();


