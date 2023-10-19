"use strict";

var payRate = 25;
var hoursWorked = 45;
var hoursOverTime = hoursWorked - 40;
var payOverTimeRate = payRate * hoursOverTime * 1.5;
var grossPay = payRate * (hoursWorked - hoursOverTime);

if (hoursWorked > 40) {
  payOverTimeRate;
}

console.log(payOverTimeRate + grossPay);
