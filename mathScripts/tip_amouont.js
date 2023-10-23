"use strict";
//inputs
var billTotal = 70.0;
var tipPercentage = 0.2;

//calculation

var tip = billTotal * tipPercentage;
//tip = 14

var totalAndTip = billTotal + tip;
//totalAndTip = 84
//outputs
console.log(tip);
console.log(
  "The tip on  a $" +
    billTotal +
    " food bill with a tip percentage of " +
    tipPercentage +
    " is : " +
    totalAndTip.toFixed(2)
);
