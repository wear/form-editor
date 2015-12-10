var React = require('react');

var CodeComponent = React.createClass({
  propTypes: {
    content: React.PropTypes.string.isRequired
  },
  render: function(){
    var content = this.props.content.split('\n').map(function(line,index){
      var key = "codeLine" + index;
      return <span key={key}>{line}<br /></span>
    })
    return (<code>{content}</code>)
  }
});

module.exports = CodeComponent;
