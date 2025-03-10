// For problems 1-2 use the following lines of code:
const arr = [10, 20, 30, 40, 50, 60];

////////// PROBLEM 1 //////////
/*
  Create a variable named 'firstItem' and set it equal to the first value of the 'arr'
  array.
*/

//Code Here
const arr = [10, 20, 30, 40, 50, 60];
const firstItem = arr[0];


////////// PROBLEM 2 //////////
/*
  Remove the last item from the 'arr' array and store it in a variable named
  'lastItemRemoved'. Console.log the array to verify you no longer have the last item.
*/

//Code Here
const arr = [10, 20, 30, 40, 50, 60];
const lastItemRemoved = arr.pop();
console.log(arr); // Output: [10, 20, 30, 40, 50]

////////// PROBLEM 3 //////////

// Do not edit the code below.
const family = ["Tyler", "Jordan", "Ryan", "Alice", "Ireland"];
// Do not edit the code above.

/*
  Loop through the 'family' array and console.log every item.
*/

//Code Here
const family = ["Tyler", "Jordan" ,"Ryan", "Alice", "Ireland"]
for (let i = 0; i < family.length; i++) {
  console.log(family[i]);
}

////////// PROBLEM 4 //////////

// Do not edit the code below.
const nums = [1, 2, 3, 6, 22, 98, 45, 23, 22, 12];
const evensArr = [];
// Do not edit the code above.

/*
  Use a for-loop to iterate through each number in the 'nums' array, if the number is
  even, append it to the 'evensArr'.
*/

//Code Here
const nums = [1, 2, 3, 6, 22, 98, 45, 23, 22, 12];
const evensArr = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    evensArr.push(nums[i]);
  }
}
console.log(evensArr); // Output: [2, 6, 22, 98, 22, 12]

////////// PROBLEM 5 //////////

// Do not edit the code below.
const score = 74;
// Do not edit the code above.

/*
  Determine if the letter grade of the given variable 'score'. If the variable is a 90 or
  above, console log an 'A', between 80 and 89, console log a 'B', between 70 and 79, 'C',
  between 60 and 69, 'D', and anything below 60 should console log an 'F'.
*/

//Code Here
const score = 74;

if (score >= 90) {
  console.log('A');
} else if (score >= 80 && score <= 89) {
  console.log('B');
} else if (score >= 70 && score <= 79) {
  console.log('C');
} else if (score >= 60 && score <= 69) {
  console.log('D');
} else {
  console.log('F');
}

////////// Intermediate Problems //////////

////////// PROBLEM 6 //////////

// Do not edit the code below.
const myFavoriteNumbers = [4, 8, 12, 16, 20, 24];
// Do not edit the code above.

/*
  Create a variable named 'someNum' and set it equal to the fifth value of the
  'myFavoriteNumbers' array.
*/

//Code Here
const myFavoriteNumbers = [4, 8, 12, 16, 20, 24];
const someNum = myFavoriteNumbers[4];


////////// PROBLEM 7 //////////

// Subscripting (accessing values using their index) an array can fail. What happens if
// you subscript to the 7th element, but there are not 7 elements in the array? Let's
// write some code to check for that. Use an if statement to check the length of the
// 'myFavoriteNumbers' array. If it's less than 7, log 'There are not enough elements in
// this array' to the console. If the length is more than 7, reassign the value of
// 'someNum' to the value of the 7th element in the array. (Hint: how can you make sure
// that your code works for exactly 7 elements? What index do you use to get the 7th
// element?)

//Code Here
const myFavoriteNumbers = [4, 8, 12, 16, 20, 24];
let someNum = myFavoriteNumbers[4]; // someNum is now 20

if (myFavoriteNumbers.length < 7) {
  console.log('There are not enough elements in this array');
} else if (myFavoriteNumbers.length >= 7) {
  someNum = myFavoriteNumbers[6]; // someNum is now the 7th element (index 6)
  console.log(someNum);
}

////////// PROBLEM 8 //////////

// Do not edit the code below.
const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// Do not edit the code above.

// Use a for-loop to iterate through 'listOfNumbers', checking to see if each number is
// divisible by 3. If it is, console.log '{number} is divisible by 3.'

//Code Here
const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (let i = 0; i < listOfNumbers.length; i++) {
  if (listOfNumbers[i] % 3 === 0) {
    console.log(`${listOfNumbers[i]} is divisible by 3.`);
  }
}

////////// PROBLEM 9 //////////
// Do not edit the code below.
const letters = ["A", "B", "C", "D", "E"];
// Do not edit the code above.

/*
  Loop backwards, starting at the end of the 'letters' array. Console log every item in
  the array.
*/

//Code Here
const letters = ["A", "B", "C", "D", "E"];

for (let i = letters.length - 1; i >= 0; i--) {
  console.log(letters[i]);
}

////////// Advanced Problems //////////

////////// PROBLEM 10 //////////
// Switch statements can be excellent alternatives to if blocks. Look up switch statements
// (I recommend W3 Schools) and try to implement one for the following.

// Do not edit the code below.


//Code Here

////////// PROBLEM 11 //////////
/* The famous FizzBuzz, Devmountain style!

  Create a for loop that iterates from 1 to 100. In this for loop, using some conditional
  logic, if the number your for loop is currently on is divisible by 3, console.log 'Dev'.
  If the number is divisible by 5, console.log 'mountain'. If the number is divisible by 5
  & 3, console.log 'Devmountain'. If the number is not divisible by 5 or 3, console.log
  the number itself. Hint: Look up the modulo operator.

  Your output should look like:
  1
  2
  Dev
  4
  Mountain
  Dev
  7
  8
  Dev
  mountain
  11
  Dev
  13
  14
  Devmountain
  16
  ...
*/

//Code Here
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('Devmountain');
  } else if (i % 3 === 0) {
    console.log('Dev');
  } else if (i % 5 === 0) {
    console.log('mountain');
  } else {
    console.log(i);
  }
}
