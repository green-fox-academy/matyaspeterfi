'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let totalCodingHours: number = (17*5)*6;

console.log(totalCodingHours + 'hours are spent with coding by a student in a semester');

let totalHours: number = 17*52;

let percentage: number = ((totalCodingHours/totalHours)*100);

console.log(Math.round(percentage) + "% of work hours are spent with coding")
