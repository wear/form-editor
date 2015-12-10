var React = require('react');

var ImageboxComponent = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <center>
        <a href={this.props.src} target='_blank'>
          <img src={this.props.src} />
        </a>
      </center>
    );
  }

});

module.exports = ImageboxComponent;
