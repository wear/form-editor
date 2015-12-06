var formParser = require('../build/form-parser');
var rowParser = require('../build/row-parser');

var compile = function(expr){
  var parsedInputs = formParser.parse(expr);

  for (var i = parsedInputs.length - 1; i >= 0; i--) {
    var input = parsedInputs[i];
    input.options.map(function(option){
      option.label = rowParser(option.label);
    })
  };
}
