'use strict'

import * as test from 'tape';
import { Apple } from "./01-apples";
import { Sum } from "./02-sum";
import { Anagram } from './03-anagram';
import { Count } from "./04-count-letters"

test("test if getApple() returns 'apple'", t => {
  let testApple = new Apple();
  let actual: string = testApple.getApple();
  let expected: string = "apple"


  t.equal(actual, expected);
  t.end();
})

test("test if sum.getSum(_numbers) returns the expected amount", t => {
  let testSum = new Sum();
  let actual: number = testSum.getSum(testSum._numbers);
  let expected: number = 70;

  t.equal(actual, expected);
  t.end();
})
test("test if sum.getSum(_emptyNumbers) returns the expected amount", t => {
  let testSum = new Sum();
  let actual: number = testSum.getSum(testSum._emptyNumbers);
  let expected: number = 0;

  t.equal(actual, expected);
  t.end();
})
test("test if sum.getSum(_oneElement) returns the expected amount", t => {
  let testSum = new Sum();
  let actual: number = testSum.getSum(testSum._oneElement);
  let expected: number = 5;

  t.equal(actual, expected);
  t.end();
})

test("test if anagram.getAnagram does it's job", t => {
  let testAnagram = new Anagram();
  let actual: boolean = testAnagram.getAnagramAlt("fork", "krof");
  let expected: boolean = true;

  t.equal(actual, expected);
  t.end();
})

test("test if anagram.getAnagram does it's job", t => {
  let testAnagram = new Anagram();
  let actual: boolean = testAnagram.getAnagramAlt("wheel", "wheel");
  let expected: boolean = true;

  t.equal(actual, expected);
  t.end();
})

test("test if anagram.getAnagram does it's job", t => {
  let testAnagram = new Anagram();
  let actual: boolean = testAnagram.getAnagramAlt("airplane", "");
  let expected: boolean = true;

  t.equal(actual, expected);
  t.end();
})

test("test if count Letters does it's job", t => {
  let testCount = new Count();
  let str1 = JSON.stringify(testCount.countLetters("asdfeweaff ljnkfsjdn jnjn"))
  let actual: {} = str1
  let expected: {} = '{"a":2,"d":2,"e":2,"f":4,"j":4,"k":1,"l":1,"n":4,"s":2,"w":1}'

  t.equal(actual, expected);
  t.end();
})
