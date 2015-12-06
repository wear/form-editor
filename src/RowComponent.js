var React = require('react');

var CodeComponent = React.createClass({
  render: function(){
    return (<p>{this.props.code}</p>);
  };
});

var ImageComponent = React.createClass({
  render: function(){
    return (<p>{this.props.src}</p>);
  };
});

var VideoComponent = React.createClass({
  render: function(){
    return (<p>{this.props.src}</p>);
  };
});

var AudioComponent = React.createClass({
  render: function(){
    return (<p>{this.props.src}</p>);
  };
});

var rowComponent = React.createClass({
  propTypes: {
    content: React.PropTypes.array
  },
  render: function(){
    var parsedLines = lines.map(function(line){
      return compileLine(line);
    }, this)

    return (<div>{parsedLines}</div>);
  }
});

var compileLine = function(line){
  if((typeof line) == 'string'){
    return <p>line</p>];
  } else {
    return switch(line.tag){
      case 'code':
        <CodeComponent code={line.body} />
      case 'image':
        <ImageComponent src={line.body} />
      case 'video':
        <VideoComponent src={line.body} />
      case 'audio':
        <AudioComponent src={line.body} />
      default:
        // nope
    }
  }
}
