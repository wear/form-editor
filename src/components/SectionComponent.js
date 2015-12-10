var React = require('react');
    CodeComponent = require('./CodeComponent'),
    VideoComponent = require('./VideoComponent'),
    AudioComponent = require('./AudioComponent');

var SectionComponent = React.createClass({
  propTypes: {
    lines: React.PropTypes.array.isRequired
  },
  render: function() {
    var content = this.props.lines.map(function(item, index){
      var line = compileLine(item, index);
      if((typeof line) === 'string'){
        line.split('\n').map(function(str,i){
          var key = "line_" + i;
          return (<span key={key}>{str}<br /></span>)
        })
      }
      return line;
    }).reduce(function(a, b) {
      return a.concat(b);
    }, []);

    return (
      <div className='section'>{content}</div>
    );
  }

});


var compileLine = function(line, key){
  if(line.hasOwnProperty('tag')){
    switch(line.tag){
      case 'code':
        return (<CodeComponent key={key}  content={line.body} />);
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
  return line;
}


module.exports = SectionComponent;
