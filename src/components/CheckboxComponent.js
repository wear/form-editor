var React = require('react');
var classNames = require('classNames');
var RowComponent = require('./RowComponent');

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
      return (<CheckOption label={item.label} name={name} isAnswer={isAnswer} key={i} />);
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

var CheckOption = React.createClass({
  propTypes: {
    label: React.PropTypes.array.isRequired,
    name: React.PropTypes.string.isRequired,
    isAnswer: React.PropTypes.bool
  },
  render: function(){
    var optionClass = classNames('checkbox', {'has-success' : this.props.isAnswer})

    return(
      <div className={optionClass}>
        <label>
          <input type="checkbox" name={this.props.name} />
          <RowComponent lines={this.props.label} />
        </label>
      </div>
    )
  }
});

module.exports = CheckboxComponent;
