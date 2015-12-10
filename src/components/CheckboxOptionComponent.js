var React = require('react');
var classNames = require('classNames');
var RowComponent = require('./RowComponent');

var CheckboxOptionComponent = React.createClass({
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

module.exports = CheckboxOptionComponent;
