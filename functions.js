////////////////// PROBLEM 1 ////////////////////
/*
  Create a function called helloWorld which simply console logs 'Hello, World!'
  Call the function.
*/

// CODE HERE
console.log("Hello, World")
////////////////// PROBLEM 2 ////////////////////

/*
    Write a function called 'jsPro' that returns the string: 'I am a JavaScript pro!'
*/

//CODE HERE
function jsPro() {
  return "I am a Javascript pro";
}
console.log(jsPro());

////////////////// PROBLEM 3 ////////////////////
/*
  Create a function called printName which takes in a person's name and console logs it.
  Ex. If 'Cameron' were passed in as the argument, Cameron would be console logged.
  Call the function, passing in an argument.
*/

//CODE HERE
let y = "cameron";
function printName(y) {
  return y ;
}
console.log(printName(y));
////////////////// PROBLEM 4 ////////////////////
/*
  Create a function called greeting that
  accepts name as its only parameter.
  greeting should log the string 'Hello, '
  plus the value of the name parameter.
  Ex. If Jake were passed in as the argument, the function would log 'Hello, Jake'
  Make sure to call your function and pass in an argument.
*/

//CODE HERE
let b = "Jake";
function greetings(b) {
  return "Hello, " + b + "." ;
}
console.log(greetings(b));
////////////////// PROBLEM 5 ////////////////////

/*
    Write a function called 'compareNums' that takes in 2 parameters,
    which will be numbers.
    The function should return the bigger number.
    If the numbers are the same, just return the number.

    Brownie points if you use something called a ternary statement (only spend significant
    time on this if you have wiggle room).
*/

//CODE HERE
a = 2;
b = 8;
function comprNum( a, b,){
 return (a>b)?a:b; //ternerary operator
}// or use Math.max(a,b)
console.log(comprNum(a,b));
/*
    The following problems are extreme challenges that will require you to do some additional research.
*/

////////////////// PROBLEM 6 ////////////////////
/*
  Write a function called nameCheck that takes in a name parameter.
  nameCheck should check if the name equals 'Steven'. If it does, return 'What is up Steven?'
  If the name parameter is equal to Bryan, return 'Hey Bryan!'
  If the name parameter is anything else, return 'Cool name, NAMEPARAM' (with NAMEPARAM
  being the value of the name parameter being passed in).

  Create a variable called 'nameGreeting' and set it equal to your function invoked
  (called) passing in an argument.
    - If you're confused about the instructions here, remember that we can store the
      results (or return) of a function into a variable!
*/

//CODE HERE
function nameCheck(name) {
  if (name === 'Steven') {
    return 'What is up Steven?';
  } else if (name === 'Bryan') {
    return 'Hey Bryan!';
  } else {
    return 'Cool name, ' + name;
  }
}
let nameGreeting = nameCheck('Emmanuel');
console.log(nameGreeting);
////////////////// PROBLEM 7 ////////////////////
const namesArr = ["Cameron", "Riley", "Eric", "Brenna", "Karl"];
/*
  Create a function called printAllNames that takes in a single argument (an array of names).
  Using a for loop, iterate over that array and console log each name.
  Call the function, passing in the `namesArr` array (above).
*/

//CODE HERE

////////////////// PROBLEM 8 ////////////////////
/*
    Write an ARROW FUNCTION called weatherCheck that takes in one parameter called 'weather'.
    If the 'weather' parameter is "sunny", return "What a lovely day!".
    If the 'weather' parameter is "rainy", return "Time for an umbrella.".
    If the 'weather' paraemeter is "snowy", return "Hot chocolate sounds delicious."
    Otherwise, return "Time for a nap."

    You will have to look up arrow functions in JavaScript to complete this task. Arrow
    functions are just another way of writing functions.
*/
const weatherCheck = (weather) =>
  weather === "sunny" ? "What a lovely day!" :
  weather === "rainy" ? "Time for an umbrella." :
  weather === "snowy" ? "Hot chocolate sounds delicious." :
  "Time for a nap.";
  console.log(weatherCheck("sunny"));  // Output: What a lovely day!