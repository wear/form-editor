var React = require('react');
var Dispatcher = require('flux').Dispatcher;
var ReactDOM = require('react-dom');
var Store = require('./react/store')

var RadioInput = React.createClass({
  propTypes: {
    label: React.PropTypes.string,
    options: React.PropTypes.array
  },
  render: function() {
    var options = this.props.options.map(function(label, i){
      var name = "q_" + i;
      return (<RadioOption label={label} name={name} key={i} />);
    })

    return (
      <div className='form-group'>
        <label>{this.props.label}</label>
        {options}
      </div>
    );
  }
});


var RadioOption = React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  },
  render: function(){
    return(
      <div className="radio">
        <label>
          <input type="radio" name={this.props.name} />
          {this.props.label}
        </label>
      </div>
    )
  }
});

var StringInput = React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  },
  render: function(){
    return(
      <div className="form-group">
        <label>
          {this.props.label}
        </label>
        <input type="text" className='form-control' name={this.props.name} />
      </div>
    )
  }
});

var TextArea = React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  },
  render: function(){
    return(
      <div className="form-group">
        <label>
          {this.props.label}
        </label>
        <textarea className='form-control' rows='3' name={this.props.name} />
      </div>
    )
  }
});

var CheckboxTag = React.createClass({
  propTypes: {
    label: React.PropTypes.string,
    options: React.PropTypes.array
  },
  render: function() {
    var options = this.props.options.map(function(label, i){
      var name = "q_" + i;
      return (<CheckOption label={label} name={name} key={i} />);
    })

    return (
      <div className='form-group'>
        <label>{this.props.label}</label>
        {options}
      </div>
    );
  }
});

var CheckOption = React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  },
  render: function(){
    return(
      <div className="checkbox">
        <label>
          <input type="checkbox" name={this.props.name} />
          {this.props.label}
        </label>
      </div>
    )
  }
})




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
            return <RadioInput label={input.label} options={input.options} key={i} />
          case 'text':
            return <StringInput label={input.label} key={i} name='sd' />
          case 'textarea':
            return <TextArea label={input.label} name='s' key={i} />
          case 'checkbox':
            return <CheckboxTag label={input.label} options={input.options} key={i} name='s' />
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
