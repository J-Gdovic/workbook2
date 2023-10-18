//inputs

var savingsAccount = 500000;
var interestRates = 5;
var ruleOf72 = 72;

//calculations
console.log(ruleOf72 / interestRates);// years : 14.4
console.log(savingsAccount * 2) //savings doubled: 1000000

 

//output
console.log("At a 5% interest rate, your savings account will be worth " + 2 *  savingsAccount.toFixed(2)  + " in  14.4 years ");
