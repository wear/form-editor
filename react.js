var React = require('react');
var Dispatcher = require('flux').Dispatcher;
var ReactDOM = require('react-dom');
var Store = require('./react/store');
var classNames = require('classNames');

var RadioInput = React.createClass({
  mixins: [InputMixin],
  render: function() {
    var options = this.props.options.map(function(item, i){
      var name = "q_" + i;
      var isAnswer = item.tag === 'answer';
      return (<RadioOption label={item.label} name={name} isAnswer={isAnswer} key={i} />);
    });

    return (
      <div className='form-group'>
        <label>{this.props.label}</label>
        {options}
        <div className='help-block'>{this.props.tip}</div>
      </div>
    );
  }
});


var RadioOption = React.createClass({
  mixins: [OptionMixin],
  render: function(){
    var optionClass = classNames('radio', {'has-success' : this.props.isAnswer})

    return(
      <div className={optionClass}>
        <label>
          <input type="radio" name={this.props.name} />
          {this.props.label}
        </label>
      </div>
    )
  }
});

var CheckboxTag = React.createClass({
  mixins: [InputMixin],
  render: function() {
    var options = this.props.options.map(function(item, i){
      var name = "q_" + i;
      var isAnswer = item.tag === 'answer';
      return (<CheckOption label={item.label} name={name} isAnswer={isAnswer} key={i} />);
    })

    return (
      <div className='form-group'>
        <label>{this.props.label}</label>
        {options}
        <div className='help-block'>{this.props.tip}</div>
      </div>
    );
  }
});

var CheckOption = React.createClass({
  mixins: [OptionMixin],
  render: function(){
    var optionClass = classNames('checkbox', {'has-success' : this.props.isAnswer})

    return(
      <div className={optionClass}>
        <label>
          <input type="checkbox" name={this.props.name} />
          {this.props.label}
        </label>
      </div>
    )
  }
});

var InputMixin = {
  propTypes: {
    label: React.PropTypes.string.isRequired,
    options: React.PropTypes.array,
    tip: React.PropTypes.string
  }
}

var OptionMixin = {
  propTypes: {
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    isAnswer: React.PropTypes.bool
  }
}

var FormContainer = React.createClass({
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
            return <RadioInput {...input} key={i} />
          case 'checkbox':
            return <CheckboxTag {...input} key={i} name='s' />
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

window.React = React;

module.exports = ReactDOM.render(
  <FormContainer inputs={[]} />,
  document.getElementById('front-display')
);
