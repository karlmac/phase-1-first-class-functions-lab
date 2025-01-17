// Code your solution in this file!

//returnFirstTwoDrivers() — Declare the variable returnFirstTwoDrivers with const and assign an anonymous function to it. The assigned function should take one argument, an array containing the names of Scuber's drivers, and return a new array containing the first two drivers in the array:
const returnFirstTwoDrivers = function (arrayOfDrivers) {
    return arrayOfDrivers.slice(0, 2);
}

//returnLastTwoDrivers() — Declare a variable with const that is assigned an anonymous function. The assigned function should take one argument, an array containing the names of Scuber's drivers, and return a new array containing the last two drivers in the array:
const returnLastTwoDrivers = function (arrayOfDrivers) {
    return arrayOfDrivers.slice(-2);
}

//selectingDrivers — This is an array containing two elements: the two functions that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. For example, if createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.
function createFareMultiplier(number){
    return fare => fare * number;
    //return function (fare) { return fare * number; };
}

//fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.
const fareDoubler = fare => createFareMultiplier(2)(fare);

//fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.
const fareTripler = fare => createFareMultiplier(3)(fare);

//selectDifferentDrivers() — This function takes two arguments, an array of the names of Scuber's drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.
function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
}

// console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
// console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
// console.log(createFareMultiplier(7)(9));
// console.log(createFareMultiplier(7));
// console.log(createFareMultiplier(7).toString());
// console.log(fareDoubler(7));
// console.log(fareTripler(7));
// console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers));
// console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers));
