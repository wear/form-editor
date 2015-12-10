var React = require('react');

var AudioComponent = React.createClass({

  render: function() {
    return (<p>{this.props.src}</p>);
  }

});

module.exports = AudioComponent;
