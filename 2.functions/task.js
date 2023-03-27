function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let avg = 0;
  min = Math.min(...arr);
  max = Math.max(...arr);
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  avg = +(sum / arr.length).toFixed(2);
   return { min: min, max: max, avg: avg };
 }
 
 
 
 function summElementsWorker(...arr) {
   const initialValue = 0;
   if (arr.length === 0) {
     return 0;
   } else {
   return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
   }
 }
 

 function differenceMaxMinWorker(...arr) {
   let min = Math.min(...arr);
   let max = Math.max(...arr);
   
   if (arr.length === 0) {
     return 0;
   } else {
     return max - min;
   }
 }
 

 function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) {
     return 0;
   }
   let sumEvenElement = 0;
   let sumOddElement = 0;
 
   for (let i = 0; i < arr.length; i++) {
     if (arr[i] % 2 === 0) {
       sumEvenElement += arr[i]; 
     } else {
       sumOddElement += arr[i];
     }
   }
   return sumEvenElement - sumOddElement;
 }
 

 function averageEvenElementsWorker(...arr) {
   if (arr.length === 0) {
     return 0;
   }
   let sumEvenElement = 0;
   let countEvenElement = 0;
 
   for (let i = 0; i < arr.length; i++) {
     if (arr[i] % 2 === 0) {
       sumEvenElement += arr[i]; 
       countEvenElement += 1;
     }
   }
   return sumEvenElement / countEvenElement;
 }
 
 
 
 function makeWork (arrOfArr, func) {
 let maxWorkerResult = -Infinity;
 for (let i = 0; i < arrOfArr.length; i++) {
   const variable = func(...arrOfArr[i]);
   if (variable > maxWorkerResult )
   maxWorkerResult = variable;
 }
  return maxWorkerResult;
 }
