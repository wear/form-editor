var PEG = require('pegjs');
var fs = require('fs');
var PEG = require('pegjs');
var formPeg = fs.readFileSync(__dirname+'/../../peg/form-parser.peg', 'utf-8');
var rowPeg = fs.readFileSync(__dirname+'/../../peg/row-parser.peg', 'utf-8');
var formParser = PEG.buildParser(formPeg);
var rowParser = PEG.buildParser(rowPeg);

var RowCompiler = require('./RowCompiler');

module.exports = function(expr){
  var parsedInputs = formParser.parse(expr);

  for (var i = parsedInputs.length - 1; i >= 0; i--) {
    var input = parsedInputs[i];
    var parsedInputLabel = rowParser.parse(input.label);

    input.label = RowCompiler(parsedInputLabel);

    input.options.map(function(option){
      var parsedOptionLabel = rowParser.parse(option.label);
      option.label = RowCompiler(parsedOptionLabel);
    })
  };

  return parsedInputs;
}
