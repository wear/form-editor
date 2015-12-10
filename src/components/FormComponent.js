var React = require('react');
    Store = require('../Store'),
    RadioComponent = require('./RadioComponent'),
    CheckboxComponent = require('./CheckboxComponent'),
    SectionComponent = require('./SectionComponent');

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
        case 'section':
          return <SectionComponent lines={input.body} key={i} />
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
