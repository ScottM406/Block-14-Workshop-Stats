// The user is prompted to enter a series of numbers seperated by commas.
const userInput = prompt(`Please input some numbers seperated by numbers`, `1,2,3,4,5`);

// The users numbers are seperated, and then converted from strings to actual numbers via for loop.
const userInputArray = userInput.split(`,`);
const userInputNumArray = [];

for (let index = 0; index < userInputArray.length; index = index +1) {
  userInputNumArray.push(Number(userInputArray[index]));
}

//A function that returns the number of numbers in the array.
const getLength = () => {
  return userInputNumArray.length;
}

//A function that returns the sum of all of the numbers in the array.
const getSum = () => {
let sum = 0;
for (let index = 0; index < userInputNumArray.length; index = index + 1) {
  sum += userInputNumArray[index];
}
  return sum;
}

//A function that returns the average of the numbers in the array.
const getMean = () => {
  let mean = 0;
  for (let index = 0; index < userInputNumArray.length; index = index + 1) {
    mean += userInputNumArray[index]/userInputNumArray.length;
  
  }
    return mean;
  }

//A function that returns the smallest number in the array
const getMin = () => {
  let min = userInputNumArray[0]
  for (let index = 0; index < userInputNumArray.length; index = index + 1) {
    if (userInputNumArray[index] < min) {
      min = userInputNumArray[index];
    }
  }
    return min;
}

//Strings are logged in the console. These strings tell the user/developer various statistics about the numbers entered.
console.log(userInputNumArray);
console.log(`You have given ${getLength(userInputNumArray)} numbers.`);
console.log(`The sum of your numbers is ${getSum(userInputNumArray)}.`);
console.log(`The mean of your numbers is ${getMean(userInputNumArray)}.`);
console.log(`The smallest of your numbers is ${getMin(userInputNumArray)}.`);


