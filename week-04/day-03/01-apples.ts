'use strict'

export class Apple{

  getApple():string {
    return "apple";
  }
}

import * as test from 'tape';

test("test if getApple() returns 'apple'", t=> {
    let testApple = new Apple();
    let actual: string = testApple.getApple();
    let expected: string = "apple"


t.equal(actual, expected)
t.end();
})