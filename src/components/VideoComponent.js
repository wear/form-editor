var React = require('react');

var VideoComponent = React.createClass({
  render: function(){
    return (<p>{this.props.src}</p>);
  }
});

module.exports = VideoComponent;
