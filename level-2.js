// Course assignment | Programming Foundations | Vidar Håland
// LEVEL 2

// 1. Using the loop from question 5 above, only log the counter variable if it is an even number.
for (var counter = 15; counter < 26; counter++) {
  if (counter % 2 === 0) {
    console.log(counter);
  }
}

// 2. Create a function that logs the sentence "I am a function".
// 2. Assign this function to a variable called innerFunction.
// 2. Create another function called outerFunction that accepts one argument.
// 2. Inside outerFunction, call the argument like you would a function - with parenthesis ().
// 2. Call outerFunction and pass in the innerFunction variable.

function sentenceLogger() {
  console.log("I am a function");
}

var innerFunction = sentenceLogger;

function outerFunction(whatAmI) {
  whatAmI();
}

outerFunction(innerFunction);
