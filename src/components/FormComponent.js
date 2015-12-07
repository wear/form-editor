var React = require('react');
var Store = require('../Store');
var RadioComponent = require('./RadioComponent');
var CheckboxComponent = require('./CheckboxComponent');

var FormComponent = React.createClass({
  getInitialState: function(){
    return {inputs: []};
  },
  componentWillMount: function() {
    Store.addChangeListener(this.onDataChange);
  },
  onDataChange: function(){
    this.setState({inputs: Store.getData()});
  },
  componentWillUnmount: function() {
    Store.removeChangeListener(this.onDataChange);
  },
  render: function() {
    var inputs = this.state.inputs.map(function(input, i){
      switch(input.tag){
        case 'radio':
          return <RadioComponent {...input} key={i} name='s' />
        case 'checkbox':
          return <CheckboxComponent {...input} key={i} name='s' />
        default:
            // nope;
      }
    });
    return (
      <form>
        {inputs}
      </form>
    )
  }

});

module.exports = FormComponent;
