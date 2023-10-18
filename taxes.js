"use strict";
//inputs
var federalTax = 23 / 100;
var yearlySalary = 55000;
var monthsInAYear = 12;

//calculations

var salaryPerMonth = yearlySalary / monthsInAYear;

var taxWitheldPerMonth = federalTax * salaryPerMonth;

var taxWhitheldPerYear = taxWitheldPerMonth * monthsInAYear;

//output

console.log("With 23% of taxes witheld of a salary of " + yearlySalary + " is " + taxWhitheldPerYear.toFixed(2));
