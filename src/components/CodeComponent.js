var React = require('react');
var SectionLineComponent = require('./SectionLineComponent');

var CodeComponent = React.createClass({
  propTypes: {
    content: React.PropTypes.array.isRequired
  },
  render: function(){
    var content = this.props.content.map(function(line,index){
      var key = "code-line-" + index;
      return <SectionLineComponent key={key} content={line} />
    })
    return (<code>{content}</code>)
  }
});

module.exports = CodeComponent;
