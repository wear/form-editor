var React = require('react');

var VideoComponent = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired
  },
  render: function(){
    return (<p>{this.props.src}</p>);
  }
});

module.exports = VideoComponent;
