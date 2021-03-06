// Course assignment | Programming Foundations | Vidar Håland
// LEVEL 1

// 1. Declare and initialise a variable with a string value.
var myName = "Vidar";

// 2. Create an object variable called person and give it two properties (a key and a value) of your choice.
var person = {
  gender: "male",
  age: 32
};

// 3. Create a variable called outOfStock and assign it a boolean value.
// 3. Create an if else statement that checks the value of outOfStock.
// 3. If it is true, console log "Out of stock". Otherwise log "In stock".
var outOfStock = true;

if (outOfStock === true) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}

// 4. Create an array of five numbers. Loop through the array and console log each value.
var numberArray = [1, 13, 256, 55, 394];

for (var i = 0; i < numberArray.length; i++) {
  console.log(numberArray[i]);
}
// 5. Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop.
for (var counter = 15; counter < 26; counter++) {
  console.log(counter);
}

// 6. Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.
for (var counter = 15; counter < 26; counter++) {
  if (counter === 20) {
    console.log(counter);
  }
}

// 7. Create an array of two objects. Each object must have the same three properties (with different values):
// 7. one property with a string value
// 7. one property with a number value
// 7. one property with a boolean value
// 7. Loop through the array and console log the number value and the boolean value.
var cars = [
  {
    make: "Toyota",
    productionYear: 2001,
    isFast: true
  },
  {
    make: "Mazda",
    productionYear: 1993,
    isFast: false
  }
];

for (var i = 0; i < cars.length; i++) {
  console.log(cars[i].productionYear);
  console.log(cars[i].isFast);
}

// 8. Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.
// 8. Inside the function, log the string "I don't like " together with the argument.
// 8. Call the function and pass in a value of your choice.
function whatIDontLike(disliked) {
  console.log("I don't like " + disliked);
}

whatIDontLike("Sushi");

// 9. Create a function that accepts two arguments.
// 9. Inside the function, subtract the second argument from the first and console log the result.
function subtraction(numberOne, numberTwo) {
  console.log(numberOne - numberTwo);
}

subtraction(10, 4);

// 10. Create an empty array.
// 10. Create a function that accepts one argument.
// 10. Inside the function, add the argument to the array.
// 10. Call the function and pass in a value of any type.
var fruitArray = [];

function addFruits(fruit) {
  fruitArray.push(fruit);
  console.log(fruitArray);
}

addFruits("Banana");
