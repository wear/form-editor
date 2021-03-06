jest.dontMock('pegjs');

var PEG = require('pegjs');
var fs = require('fs');
var peg = fs.readFileSync(__dirname+'/../row-parser.peg', 'utf-8');

var parse = PEG.buildParser(peg).parse;

describe('parser', function() {
  it('parse pure string', function(){
    var data = fs.readFileSync(__dirname + '/fixtures/pure-string.txt', 'utf-8');
    var result = parse(data);
    expect(result).toEqual(['测试','test test'])
  });

  it('parse string with code markup', function(){
    var data = fs.readFileSync(__dirname + '/fixtures/code-string.txt', 'utf-8');
    var result = parse(data);
    expect(result.left).toEqual(['left'])
    expect(result.markup.tag).toEqual('code')
    expect(result.markup.body).toEqual(['pegjs','arithmetics.pegjs'])
    expect(result.right).toEqual(['right'])
  });

  it('parse string with image markup', function(){
    var data = fs.readFileSync(__dirname + '/fixtures/image-string.txt', 'utf-8');
    var result = parse(data);
    expect(result.left).toEqual(['left'])
    expect(result.markup.tag).toEqual('image')
    expect(result.markup.body).toEqual('/images/logo.png')
    expect(result.right).toEqual(['right'])
  });

  it('parse string with video markup', function(){
    var data = fs.readFileSync(__dirname + '/fixtures/video-string.txt', 'utf-8');
    var result = parse(data);
    expect(result.left).toEqual(['left'])
    expect(result.markup.tag).toEqual('video')
    expect(result.markup.body).toEqual('/videos/video')
    expect(result.right).toEqual(['right'])
  });

  it('parse string with audio markup', function(){
    var data = fs.readFileSync(__dirname + '/fixtures/audio-string.txt', 'utf-8');
    var result = parse(data);
    expect(result.left).toEqual(['left'])
    expect(result.markup.tag).toEqual('audio')
    expect(result.markup.body).toEqual('/audios/audio')
    expect(result.right).toEqual(['right'])
  });

  it('parse string with paragraph tag', function(){
    var data = fs.readFileSync(__dirname + '/fixtures/row-paragraph.txt', 'utf-8');
    var result = parse(data);
    expect(result.markup.tag).toEqual('code')
    expect(result.right.markup.tag).toEqual('image')
  })

  it('parse string with media markup by sequence', function(){
    var data = fs.readFileSync(__dirname + '/fixtures/medie-sequence.txt', 'utf-8');
    var result = parse(data);
    expect(result.left).toEqual(['left'])
    expect(result.markup.tag).toEqual('image')
    expect(result.markup.body).toEqual('/images/logo.png')
    expect(result.right.left).toEqual(['middle'])
    expect(result.right.markup.tag).toEqual('video')
    expect(result.right.markup.body).toEqual('/videos/video')
    expect(result.right.right).toEqual(['right'])
  });

});
