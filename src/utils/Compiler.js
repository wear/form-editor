var formParser = require('../../build/form-parser');
var RowCompiler = require('./RowCompiler');


module.exports = function(expr){
  var parsedInputs = formParser.parse(expr);

  for (var i = parsedInputs.length - 1; i >= 0; i--) {
    var input = parsedInputs[i];
    input.label = RowCompiler(input.label);

    input.options.map(function(option){
      option.label = RowCompiler(option.label);
    })
  };

  return parsedInputs;
}
