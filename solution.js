
var numString = '' //create string variable to hold buttons that have been pushed 
var numArray = [] //create an empty array variable to push numbers to when calculating. 
let display = document.getElementById('view') //create display variable and set it to textview.

listen() 
///create function to listen for clicks which calls another function that gets the button value that was clicked 
function listen () {  
  document.addEventListener('click', getButtonValue)
}
//create a function that gets the button value. 
function getButtonValue () {
  let button = event.target.value // create button variable and assign it the value of the event target / the button that was clicked
  // use if else statement to call functions on different buttons. 
  if (!isNaN(button) || button === '.') { //if the button IS a number, or '.', run number function on the button
    number(button)
  } else if (button === 'AC') { //if the button is AC, run all clear function
    allClear()
  } else if (button === 'CE') { // if the button is CE, run clear function 
    clear()
  } else if (button === '=') { //if the button is '=', run calculate function
    calculate()
  } else {
    storeNumber(button) // else, run a function on the button to store the number
  }
}

function number (button) { //create number function to use on the numbers when they are clicked
  if (button === '.' && numString.includes('.')) { // if the button is a decimal and the string includes a decimal,return
    return //can't have two decimals
  } else if (numString.charAt(0) === '0' && button === '0') { // or if the first value in numstring is 0 (use charAt?) and the button pushed was 0, return
    return //can't have two 0's at the start 
  } else { // otherwise make the numstring equal to itself plus the button that was just clicked.
    numString += button 
    display.value = numString //set the new numstring value to the display value.
  }
}

function allClear () { //create a function to clear all. 
  numString = '' //reset numString variable to an empty string
  numArray = [] // reset numArray variable to an emptyu array.
  display.value = '0' //reset display value to '0'
}

function clear () {
  numString = ''
  display.value = '0'
}

function storeNumber (button) {
  if (numString === '' && numArray === '0') { //if the numstring is empty and the numArray is '0',
    return                                    // return (do nothing)
  } else if (numString === '') {             
    //if the numString is empty, that meansthat means that the string has
    // already been pushed to the array by an operator) take that operator off
    //the end of the array (reduce the length of the array by 1) and add the new operator. 
    //This is to fulfil one of the user stories that if you push 2 operator buttons in a row, 
    //then the second operator button is the one that should be used.
    numArray.length = numArray.length - 1
    numArray.push(button)
  } else {
    //Otherwise, (if the string isn’t empty), push the string to the array, 
    //then push the operator to the array, then clear the string.
    numArray.push(numString) 
    numArray.push(button)
    numString = '' 
  }
}

function calculate () { //create calculate function. 
  numArray.push(numString) //push numstring to numarray
  let currentNumber = Number(numArray[0]) 
  //define current number and set value as the first item 
  //in num array using js number function to change it from a string.
  for (var i = 0; i < numArray.length; i++) { //initiate for loop , starting from 0 - array.length
    let nextNumber = Number(numArray[i + 1]) // defne next number in numArray (i+1) also using js Number function
    let symbol = numArray[i]    // define symblol, set as the nth term of the numArray.
    if (symbol === '+') {       // if the symbol is strictly equal to '+'
      currentNumber += nextNumber   //add current next number to current number 
    } else if (symbol === '-') {    // if the symbol is strictly equal to '-'
      currentNumber -= nextNumber   // subract next number from current number
    } else if (symbol === '*') {    // if the symbol is strictly equal to '*'
      currentNumber *= nextNumber   // multiply current number by next number 
    } else if (symbol === '/') {    // if the symbol is strictly equal to '/'
      currentNumber /= nextNumber   // divide current number by nextnumber
    }                               //close for loop.
  }
  if (currentNumber < 0) {      //if the current number is smaller than 0, 
    currentNumber = Math.abs(currentNumber) + '-' // set it to the absolute value of the current number + '-'
  }
  display.value = currentNumber // set display vallue equal to the current number
  numString = currentNumber    // set numstring to the current number
  numArray = []                // set numArray to an empty string. 
}