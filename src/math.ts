// Import the necessary parts of the mathjs library
const { create, all } = require('mathjs');

// Create a custom config
const config = { };
const math = create(all, config);

// Define a custom function
const myCustomFunction = function (arg1: any, arg2: any) {
  return arg1 + arg2; // Simple example: adding two arguments
};

// Add the custom function to your mathjs instance
math.import({
  myCustomFunction
}, { override: true });

// Now you can use your custom function
console.log(math.evaluate('myCustomFunction("lento", "kone")')); // Should output: 5