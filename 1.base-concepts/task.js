"use strict"

function solveEquation(a, b, c) {
    if(a == 0) {
      return false;
    }
    let result = [];
    let d = Math.pow(b, 2) - 4 * a * c;
    console.log("Дискриминант равен: " + d);
    if (d < 0) {
      console.log("Корней нет");
    }
    if (d == 0) {
      console.log("Один корень");
      result.push(-b / (2 * a));
    }
    if (d > 0) {
      console.log("Два корня");
      result.push((-b + Math.sqrt(d)) / (2 * a));
      result.push((-b - Math.sqrt(d)) / (2 * a));
    }
    return result;
}
console.log(solveEquation(1,1,-56));


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }
 let interestRate = (percent / 100) / 12;
 let residualAmount = amount - contribution;
 let monthlyPayment = residualAmount * (interestRate + (interestRate / (((1 + interestRate)**countMonths) - 1)));
 let sum = +(monthlyPayment * countMonths).toFixed(2);
 return sum;
}
console.log("Сумма выплаты: " + calculateTotalMortgage(10,0,50000,12));