var PEG = require('pegjs');
var fs = require('fs');
var PEG = require('pegjs');
var formPeg = fs.readFileSync(__dirname+'/../peg/form-parser.peg', 'utf-8');
var rowPeg = fs.readFileSync(__dirname+'/../peg/row-parser.peg', 'utf-8');
var formParser = PEG.buildParser(formPeg);
var rowParser = PEG.buildParser(rowPeg);

var RowCompiler = require('./RowCompiler');

module.exports = function(expr){
  var parsedSections = formParser.parse(expr);

  for (var i = parsedSections.length - 1; i >= 0; i--) {
    var section = parsedSections[i];
    if(section.tag === 'p'){
      section.body = RowCompiler(rowParser.parse(section.body));
    } else {
      var parsedInputLabel = rowParser.parse(section.label);
      section.label = RowCompiler(parsedInputLabel);
      section.options.map(function(option){
        var parsedOptionLabel = rowParser.parse(option.label);
        option.label = RowCompiler(parsedOptionLabel);
      })
    }
  };

  return parsedSections;
}
