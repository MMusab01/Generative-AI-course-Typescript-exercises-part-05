/*

Question 12
Create a new array named lastTwoFruits that contains the last two elements of the fruits array using the method.

*/

let fruits=[ "Apple", "banana", "pineapple", "orange"]

let lastTwoFruits = fruits.slice(2);
console.log(lastTwoFruits);

// fruits.splice(0,2);
// console.log(fruits);