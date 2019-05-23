var numString = "";
var numArray = [];
var display = document.getElementById("view");

listen();

function listen() {
  document.addEventListener("click", getButton);
}

function getButton() {
  let button = event.target.value;
    console.log('yo', numArray)
  if (!isNaN(button) || button === ".") {
    number(button);
  } else if (button === "C") {
    clearAll();
  } else if (button === "←") {
    back();
  } else if (button === "=") {
    calculate();
  } else {
    storeNumber(button);
  }
}

function number(button) {
    if (button === "." && numString.includes(".")) {
    return;
  } else if (numString.charAt(0) === "0" && button === "0") {
    return;
  } else {
    numString += button;
    display.value = numString;
  }
}

function clearAll() {
  numString = "";
  numArray = [];
  display.value = "0";
}

function back() {
  numString = ''
  display.value = "0"}

function storeNumber(button) {
    if (numString === '' && numArray === '0') { 
    return
  } else  if (numString === '') {
    numArray.length = numArray.length - 1;
    numArray.push(button);
  } else {
    numArray.push(numString)
    numArray.push(button)
    numString = '';
  }
}


function calculate() {
    console.log(21, numArray)
    numArray.push(numString)
    let currentNumber = Number(numArray[0]);
    console.log(currentNumber)
    console.log(20, numArray)
    for (i = 0; i < numArray.length; i++) {
        console.log(33, numArray)
        let nextNumber = Number(numArray[i+1])
        let symbol = numArray[i]
        if (symbol === '+') {
            currentNumber += nextNumber
        }


        if (symbol === '-') {
            currentNumber = currentNumber - nextNumber
        }


        if (symbol === '*') {
            currentNumber = currentNumber * nextNumber
        }


        if (symbol === '/') {
            currentNumber = currentNumber / nextNumber
        }
    }
    
    if (currentNumber < 0) {
        currentNumber=Math.abs(currentNumber) + '-' ; 
    }
    display.value = currentNumber;
    numString = currentNumber    
    numArray = []
}


//create string variable to hold buttons that have been pushed
//create an empty array variable to push numbers to when calculating.
//create display variable and set it to textview.

//create function to listen for clicks which calls another function that gets the button value that was clicked

//create a function that gets the button value.

// create button variable and assign it the value of the event target / the button that was clicked

// use if else statement to call functions on different buttons.
//if the button IS a number, or '.', run number function on the button
//if the button is AC, run all clear function
// if the button is CE, run back function

//if the button is '=', run calculate function
// else, run a function on the button to store the number

//create number function to use on the numbers when they are clicked

// if the button is a decimal and the string includes a decimal,return
//can't have two decimals

// or if the first value in numstring is 0 (use charAt) and the button pushed was 0, return
//can't have two 0's at the start!!

// otherwise make the numstring equal to itself plus the button that was just clicked.
//set the new numstring value to the display value.

//create a function to clear all.
//reset numString variable to an empty string
// reset numArray variable to an emptyu array.
//reset display value to '0'

//create clear function

//if the numstring is empty and the numArray is '0', (potentially useless)
// return (do nothing)

//if the numString is empty, that meansthat means that the string has
// already been pushed to the array by an operator) take that operator off
//the end of the array (reduce the length of the array by 1) and ADD(push) the new operator.

//This is to fulfil one of the user stories that if you push 2 operator buttons in a row,
//then the second operator button is the one that should be used.

//Otherwise, (if the string isn’t empty), push the string to the array,
//then push the operator to the array, then clear the string.

//--------------------------------------------------------------

//create calculate function.
//push numstring to numarray

//define current number and set value as the first item
//in num array using js number function to change it from a string.
//initiate for loop , starting from 0 - array.length
// defne next number in numArray (i+1) also using js Number function
// define symblol, set as the nth term of the numArray.
// if the symbol is strictly equal to '+'
//add current next number to current number
// if the symbol is strictly equal to '-'
// subract next number from current number
// if the symbol is strictly equal to '*'
// multiply current number by next number
// if the symbol is strictly equal to '/'
// divide current number by nextnumber
//close for loop.

//if the current number is smaller than 0,
// set it to the absolute value of the current number + '-'

// set display vallue equal to the current number
// set numstring to the current number
// set numArray to an empty string.
