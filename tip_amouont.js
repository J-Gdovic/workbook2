//inputs
var billTotal = 70.00
var tipPercentage = 0.20


//calculation

var tip = (billTotal * tipPercentage)
//tip = 14

var totalAndTip = (billTotal + tip)
//totalAndTip = 84
//outputs
console.log(tip)
console.log("The tip on  a $70 food bill with a tip percentage of 20 is : " + totalAndTip.toFixed(2))
