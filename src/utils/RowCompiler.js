var rowParser = require('../../build/row-parser');

var RowCompiler = function(expr){
  var parsedRow = rowParser.parse(expr);
  return compile(parsedRow);
}

var compile = function(expr){
  if((typeof expr) == 'string'){
    return [expr];
  } else {
    return [
      expr.left,
      expr.markup
    ].concat(compile(expr.right)).filter(Boolean)
  }
}

module.exports = RowCompiler;

