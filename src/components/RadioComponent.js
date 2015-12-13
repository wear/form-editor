var React = require('react');
var classNames = require('classnames');
var RadioOptionComponent = require('./RadioOptionComponent.js')

var RadioComponent = React.createClass({
  propTypes: {
    label: React.PropTypes.array.isRequired,
    options: React.PropTypes.array,
    tip: React.PropTypes.string,
    answer: React.PropTypes.string
  },
  render: function() {
    var options = this.props.options.map(function(item, i){
      var name = "q_" + i;
      var isAnswer = item.answer === '1';
      return (<RadioOptionComponent label={item.label} name={name} isAnswer={isAnswer} key={i} />);
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

module.exports = RadioComponent;
