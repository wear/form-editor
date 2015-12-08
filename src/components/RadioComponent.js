var React = require('react');
var classNames = require('classNames');
var RowComponent = require('./RowComponent');

var RadioComponent = React.createClass({
  propTypes: {
    label: React.PropTypes.array.isRequired,
    options: React.PropTypes.array,
    tip: React.PropTypes.string
  },
  render: function() {
    var options = this.props.options.map(function(item, i){
      var name = "q_" + i;
      var isAnswer = item.tag === 'answer';
      return (<RadioOption label={item.label} name={name} isAnswer={isAnswer} key={i} />);
    });

    return (
      <div className='form-group'>
        <label><RowComponent lines={this.props.label} /></label>
        {options}
        <div className='help-block'>{this.props.tip}</div>
      </div>
    );
  }

});


var RadioOption = React.createClass({
  propTypes: {
    label: React.PropTypes.array.isRequired,
    name: React.PropTypes.string.isRequired,
    isAnswer: React.PropTypes.bool
  },
  render: function(){
    var optionClass = classNames('radio', {'has-success' : this.props.isAnswer})

    return(
      <div className={optionClass}>
        <label>
          <input type="radio" name={this.props.name} />
          <RowComponent lines={this.props.label} />
        </label>
      </div>
    )
  }
});


module.exports = RadioComponent;
