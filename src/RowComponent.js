var React = require('react');

var CodeComponent = React.createClass({
  render: function(){
    return (<code>{this.props.code}</code>)
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

var RowComponent = React.createClass({
  propTypes: {
    lines: React.PropTypes.array.isRequired
  },
  render: function(){
    var parsedLines = this.props.lines.map(function(line, index){
      return compileLine(line, index);
    }, this)
    return (<div>{parsedLines}</div>);
  }
});

var compileLine = function(line, key){
  if((typeof line) === 'string'){
    return (<p key={key}>{line}</p>);
  } else {
    switch(line.tag){
      case 'code':
        return (<code key={key} >{line.body}</code>);
      case 'image':
        return (<img key={key} src={line.body} />)
      case 'video':
        return <VideoComponent key={key} src={line.body} />
      case 'audio':
        return <AudioComponent key={key} src={line.body} />
      default:
        // nope
    }
  }
}

module.exports = RowComponent;
