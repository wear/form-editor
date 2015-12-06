var formCompile = require('./utils/Compiler');
var AppDispatcher = require('./AppDispatcher');
var React = require('react');
var ReactDOM = require('react-dom');
var FormComponent = require('./FormComponent')

window.compileForm = function(expr){
  console.log(formCompile(expr))
  AppDispatcher.dispatch({
    actionType: "DataChange",
    data: formCompile(expr)
  });
}

window.React = React;

ReactDOM.render(
  <FormComponent inputs={[]} />,
  document.getElementById('front-display')
);
