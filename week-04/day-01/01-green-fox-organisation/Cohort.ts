'use strict'

import { Person } from "./Person";
import { Student } from "./Student";
import { Sponsor } from "./Sponsor";
import { Mentor } from "./Mentor";

export class Cohort{
    protected _name:string;
    protected _students = [];
    protected _mentors = [];

    addStudent(student: Student){
        this._students.push(student);
    }
    addMentor(mentor: Mentor){
        this._mentors.push(mentor);
    }
    info():void{
        console.log("The " + this._name + " cohort has " + this._students.length + " students and " + this._mentors.length + " mentors.")
    }
    
    constructor(name:string){
        this._name = name;
        this._students = [];
        this._mentors = [];
    }
}

// let Chama = new Cohort("Chama")
// let Bela = new Student("Bela", 21, "male")
// let Jane = new Student();


// Chama.addStudent(Bela);
// Chama.addStudent(Jane);


// let Gizella = new Mentor("Gizella", 19, "female")

// Chama.addMentor(Gizella);

// Chama.info();