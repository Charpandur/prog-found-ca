// Answer question 1
// Declare and initialise a variable with a string value.

var string = "Potatoes";


// Answer question 2
// Create an object variable called person and give it two properties (a key and a value) of your choice.

var person = {
    age: 28 ,
    name: "Charlotte"
};


// Answer question 3
// Create a variable called outOfStock and assign it a boolean value.
// Create an if else statement that checks the value of outOfStock.
// If it is true, console log "Out of stock". Otherwise log "In stock".

var outOfStock = true;

if (outOfStock === true) {
    console.log("Out of stock");
  } 
  
else {
    console.log("In stock");
  }


// Answer question 4
// Create an array of five numbers.
// Loop through the array and console log each value.

var fiveNumbers = [1, 2, 3, 4, 5];

for (var i = 0; i < fiveNumbers.length; i++) {
    console.log(fiveNumbers[i]);
}


// Answer question 5
// Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop.

for (var i = 15; i <= 26; i++) {
    console.log(i);
}

// Answer question 6
// Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.

for (var i = 15; i < 26; i++) {
    if (i === 20) {
        console.log(i);
    }
}

// Answer question 7
// Create an array of two objects. Each object must have the same three properties (with different values):
// one property with a string value.
// one property with a number value.
// one property with a boolean value. Loop through the array and console log the number value and the boolean value.

var vegetables = [
    {
        vegName: "Potato",
        vegPrice: 8,
        inStock: true 
    },

    {
        name: "Carrot",
        price: 9,
        inStock: true 
    }
];

for (var i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i].vegName)
    console.log(vegetables[i].vegPrice)
  }

// Answer question 8
// Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.
// Inside the function, log the string "I don't like " together with the argument.
// Call the function and pass in a value of your choice.

function whatIDontLike(unPopularVeggie) {
    console.log("I don't like " + unPopularVeggie)
  }
  
  whatIDontLike("Peas")

// Answer question 9
// Create a function that accepts two arguments.
// Inside the function, subtract the second argument from the first and console log the result.

function subtractionFunction(number1, number2) {
    var total = number1 - number2;
    console.log(total);
  }
  
  subtractionFunction(50, 15);

// Answer question 10
// Create an empty array.
// Create a function that accepts one argument.
// Inside the function, add the argument to the array.
// Call the function and pass in a value of any type.

var ourVegetables = [];

function addToVegetables(vegetables) {
   ourVegetables.push(vegetables);
   console.log(ourVegetables)
}

addToVegetables("Peas");
