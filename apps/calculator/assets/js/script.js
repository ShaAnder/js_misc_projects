"use strict";

// first we want to get the actions class to log whatever action we decide we want to click
const actions = document.querySelector(".actions");

// we also want to get the answer field (where our inputs go)
const ans = document.querySelector(".ans");

// we want to declare some vars here, expression is for
let expression = "";
let a = 0;

// from here we want to tie an event listener to our actions
// Target get's the element where the event occured
actions.addEventListener("click", (event) => {
  // now let's store it as a value // dataset here takes the value from the html element and saves it
  const value = event.target.dataset["value"];
  console.log(value);

  // next we want to check if our value is NOT undefined (aka we click outside of the app or on spaces (we don't want to return undefined into our answer field))
  if (value !== undefined) {
    // we check if the button pressed was CE (clear) we remove the expression entered and set value to 0
    if (value == "ce") {
      expression = "";
      ans.value = 0;
      // we want to return true if it is clear for later
      return true;
    }
    // now we want to go through each expresison
    // check if it was a square
    else if (value == "x^2") {
      expression = square();
    }
    // If expression === radic (square root of)
    else if (value == "radic") {
      expression = Math.sqrt(expression);
    }
    // Log function, opposite of expontiation
    else if (value == "log") {
      expression = Math.log(expression);
    }
    // cosine
    else if (value == "cos") {
      expression = Math.cos(expression);
    }
    // tangent
    else if (value == "tan") {
      expression = Math.tan(expression);
    }
    // sine
    else if (value == "sin") {
      expression = Math.sin(expression);
    }
    // exp
    else if (value == "exp") {
      expression = Math.exp(expression);
    }
    // finally set our evaluation button (=)
    else if (value == "=") {
      const answer = eval(expression);
      expression = answer;
    }
    // else set the value to the expression
    else {
      expression += value;
    }
    // DOUBLE CHECK if the answer is undefined
    if (expression == undefined) {
      // if so reset
      expression = "";
      ans.value = 0;
    } else {
      //if nah set the value to the expression
      ans.value = expression;
    }
    // expression += value;
  }
});

// we're going to define what square does down here
const square = () => {
  return expression * expression;
};

// testing
console.log(actions);
console.log(ans);
