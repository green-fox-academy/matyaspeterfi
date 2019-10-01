'use strict'

export abstract class Animal {
  protected _name: string;
  protected _age: number;
  protected _gender:string;
  protected _numberOfLegs:number;

  abstract getName();
  abstract breed();
}