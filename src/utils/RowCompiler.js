var compileRow = function(expr){
  if((typeof expr) == 'string'){
    return [expr];
  } else {
    return [
      expr.left,
      expr.markup
    ].concat(compileRow(expr.right)).filter(Boolean)
  }
}

module.exports = compileRow;

