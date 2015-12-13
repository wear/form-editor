var React = require('react');
    CodeComponent = require('./CodeComponent'),
    VideoComponent = require('./VideoComponent'),
    ImageboxComponent = require('./ImageboxComponent'),
    SectionLineComponent = require('./SectionLineComponent'),
    AudioComponent = require('./AudioComponent');

var SectionComponent = React.createClass({
  propTypes: {
    lines: React.PropTypes.array.isRequired
  },
  render: function() {
    var content = this.props.lines.map(function(item, index){
      var key = "section-line-" + index;
      return compileLine(item, key);
    });

    return (<div className='section'>{content}</div>);
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
  return <SectionLineComponent key={key} content={line} />
}


module.exports = SectionComponent;
