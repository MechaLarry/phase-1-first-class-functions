// Define receivesAFunction that accepts a callback and calls it
function receivesAFunction(callback) {
    callback();
  }
  
  // Define returnsANamedFunction that returns a named function
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("I am the named function");
    }
    return namedFunction;
  }
  
  // Define returnsnAnonymousFunction that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("I am an anonymous function");
    };
  }
  
  