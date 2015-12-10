var React = require('react');
    CodeComponent = require('./CodeComponent'),
    VideoComponent = require('./VideoComponent'),
    ImageboxComponent = require('./ImageboxComponent'),
    AudioComponent = require('./AudioComponent');

var SectionComponent = React.createClass({
  propTypes: {
    lines: React.PropTypes.array.isRequired
  },
  render: function() {
    var counter = 0;
    var content = this.props.lines.map(function(item){
      var line = compileLine(item, counter);
      if((typeof line) === 'string'){
        return line.split('\n').map(function(str,i){
          var key = "line_" + counter;
          counter += 1;
          return (<span key={key}>{str}<br /></span>)
        })
      }
      counter += 1;
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
        return <ImageboxComponent src={line.body} key={key} />
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
