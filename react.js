var React = require('react');
var Dispatcher = require('flux').Dispatcher;
var ReactDOM = require('react-dom');
var Store = require('./react/store')

var RadioInput = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    options: React.PropTypes.array
  },
  render: function() {
    var options = this.props.options.map(function(label, i){
      var name = "q_" + i;
      return (<RadioOption label={label} name={name} key={i} />);
    })

    return (
      <div className='form-group'>
        <label>{this.props.title}</label>
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
      return <RadioInput title={input.title} options={input.options} key={i}/>
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
