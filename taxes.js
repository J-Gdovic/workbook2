"use strict";
//inputs
var federalTax = 23 / 100;
var yearlySalary = 55000;
var monthsInAYear = 12;

//calculations and
console.log(yearlySalary / monthsInAYear);

var salaryPerMonth = 4583.333333333333;

console.log(federalTax * salaryPerMonth);

var taxWitheldPerMonth = 1054.1666666666667;

console.log(taxWitheldPerMonth * monthsInAYear);

var taxWhitheldPerYear = 12650;

console.log("With 23% of taxes witheld of a salary of " + yearlySalary + " is " + taxWhitheldPerYear.toFixed(2));
