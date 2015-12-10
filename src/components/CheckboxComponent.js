var React = require('react');
var classNames = require('classNames');
var RowComponent = require('./RowComponent');
var CheckboxOptionComponent = require('./CheckboxOptionComponent');


var CheckboxComponent = React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    options: React.PropTypes.array,
    tip: React.PropTypes.string
  },
  render: function() {
    var options = this.props.options.map(function(item, i){
      var name = "q_" + i;
      var isAnswer = item.tag === 'answer';
      return (<CheckboxOptionComponent label={item.label} name={name} isAnswer={isAnswer} key={i} />);
    })

    return (
      <div className='form-group'>
        <label><RowComponent lines={this.props.label} /></label>
        {options}
        <div className='help-block'>{this.props.tip}</div>
      </div>
    );
  }

});

module.exports = CheckboxComponent;
