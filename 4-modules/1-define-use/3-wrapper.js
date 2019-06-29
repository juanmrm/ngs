// function(exports, module, require, __filename, __dirname) {

  console.log(arguments);

  exports.a = 42;
  module.exports.b = 37;

  // We want our top level api to be a function not an object
  exports = () => {} // NOT OK because exports is an alias of module.export so it will not work.
  module.exports = () => {} // This is the correct way.

// return module.exports;
// } 



