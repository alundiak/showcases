// https://www.patterns.dev/vanilla/module-pattern
//
// "Module" pattern
//
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript
/*
- is based in part on object LITERALs
- "In JavaScript, the Module pattern is used to further emulate the concept of classes
in such a way that we're able to include both public/private methods and variables inside a single object"
- "The Module pattern encapsulates "privacy", state and organization using closures."
- "only a public API is returned, keeping everything else within the closure private."
*/
// https://github.com/tzeikob/javascript-patterns/tree/main/creational/module
/*
- "this pattern in a more abstract way as a factory of objects, where you can use it like
an isolated module which actually closing around a specific lexical scope, in order to encapsulate an internal state."
- "Nothing prevents you from creating multiple instances of that module, but each one of that instances will have its own internal state,
so it's smart to use that pattern as a singleton object."
*/
// My words: Module is a "big" Singleton.

function ModulePattern() {
  console.log('ModulePattern ...');

  var testModule = (function () {
    console.log("testModule()");
    var counter = 0;

    return {
      incrementCounter: function () {
        console.log("incrementCounter()");
        return counter++;
      },

      resetCounter: function () {
        console.log("counter value prior to reset: " + counter);
        counter = 0;
      }
    };

  })();

  // Usage:

  // Increment our counter
  testModule.incrementCounter();

  // Check the counter value and reset
  // Outputs: counter value prior to reset: 1
  testModule.resetCounter();
}

ModulePattern();
