// The user is prompted to enter a series of numbers seperated by commas.
const userInput = prompt(`Please input some numbers seperated by commas.`, `1,2,3,4,5`);

// The users numbers are seperated, and then converted from strings to actual numbers via for loop.
const userInputArray = userInput.split(`,`);
const userInputNumArray = [];

for (let index = 0; index < userInputArray.length; index = index +1) {
  userInputNumArray.push(Number(userInputArray[index]));
}

// A function that returns the number of numbers in the array.
const getLength = (array) => {
  return array.length;
}

// A function that returns the sum of all of the numbers in the array.
const getSum = (array) => {
let sum = 0;
for (let index = 0; index < array.length; index = index + 1) {
  sum += array[index];
}
  return sum;
}

// A function that returns the average of the numbers in the array.
const getMean = (array) => {
  let mean = 0;
  for (let index = 0; index < array.length; index = index + 1) {
    mean += array[index]/array.length;
  
  }
    return mean;
  }

// A function that returns the smallest number in the array.
const getMin = (array) => {
  let min = array[0];
  for (let index = 0; index < array.length; index = index + 1) {
    if (array[index] < min) {
      min = array[index];
    }
  }
    return min;
}

// A function that returns the largest number in the array.
const getMax = (array) => {
  let max = array[0];
  for (let index = 0; index <array.length; index = index+ 1) {
    if (array[index] > max) {
      max = array[index];
    }
  }
    return max;
}

// A function that returns the range of the numbers in the array.
const getRange = (array) => {
  let min = array[0];
  let max = array[0];
  for (let index = 0; index < array.length; index = index + 1) {
    if (array[index] < min) {
      min = array[index];
    }

    if (array[index] > max) {
      max = array[index];
    }
  }
  return max - min;
}

const getEvens = (array) => {
  let evens = [];
  for (let index = 0; index < array.length; index = index +1) {
    if (array[index] % 2 === 0) {
      evens.push(array[index]);
    }
  }
  return evens;
}

const getOdds = (array) => {
  let odds = [];
  for (let index = 0; index < array.length; index = index + 1) {
    if (array[index] % 2 !== 0 ) {
      odds.push(array[index]);
    }
  }
  return odds;
}
//Strings are logged in the console. These strings tell the user/developer various statistics about the numbers entered.
console.log(userInputNumArray);
console.log(`You have given ${getLength(userInputNumArray)} numbers.`);
console.log(`The sum of your numbers is ${getSum(userInputNumArray)}.`);
console.log(`The mean of your numbers is ${getMean(userInputNumArray)}.`);
console.log(`The smallest of your numbers is ${getMin(userInputNumArray)}.`);
console.log(`The largest of your numbers is ${getMax(userInputNumArray)}.`);
console.log(`The range of your number is ${getRange(userInputNumArray)}.`);
console.log(`The even numbers your provided are: ${getEvens(userInputNumArray)}`);
console.log(`The odds that you provided are: ${getOdds(userInputNumArray)}`);


