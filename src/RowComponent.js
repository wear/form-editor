var React = require('react');

var CodeComponent = React.createClass({
  render: function(){
    return (<p>{this.props.code}</p>)
  }
});

var ImageComponent = React.createClass({
  render: function(){
    return (<p>{this.props.src}</p>);
  }
});

var VideoComponent = React.createClass({
  render: function(){
    return (<p>{this.props.src}</p>);
  }
});

var AudioComponent = React.createClass({
  render: function(){
    return (<p>{this.props.src}</p>);
  }
});

var rowComponent = React.createClass({
  propTypes: {
    lines: React.PropTypes.array
  },
  render: function(){
    var parsedLines = this.props.lines.map(function(line){
      return compileLine(line);
    }, this)

    return (<div>{parsedLines}</div>);
  }
});

var compileLine = function(line){
  if((typeof line) === 'string'){
    return <p>line</p>;
  } else {
    switch(line.tag){
      case 'code':
        return <CodeComponent code={line.body} />
      case 'image':
        return <ImageComponent src={line.body} />
      case 'video':
        return <VideoComponent src={line.body} />
      case 'audio':
        return <AudioComponent src={line.body} />
      default:
        // nope
    }
  }
}

module.exports = rowComponent;
