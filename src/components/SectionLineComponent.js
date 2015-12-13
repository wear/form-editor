var React = require('react');

var SectionLineComponent = React.createClass({
  propTypes: {
    content: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <span>{this.props.content}<br /></span>
    );
  }

});

module.exports = SectionLineComponent;
