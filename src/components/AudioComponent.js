var React = require('react');

var AudioComponent = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired
  },
  render: function() {
    return (<p>{this.props.src}</p>);
  }

});

module.exports = AudioComponent;
