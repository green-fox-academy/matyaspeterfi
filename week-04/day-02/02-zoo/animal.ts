'use strict'

export abstract class Animal {
  protected _name: string;
  protected _age: number = 24;
  protected _gender:string = "female"
  protected _numberOfLegs:number;

  getName(){
    return this._name;
  };
  abstract breed();

  constructor(age?, gender?, numberOfLegs?){
    this._age = age;
    this._gender = gender;
    this._numberOfLegs = numberOfLegs;
  }
}