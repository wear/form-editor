jest.dontMock('../parser');
jest.dontMock('pegjs');

var PEG = require('pegjs');
var fs = require('fs');
var peg = fs.readFileSync(__dirname+'/../peg/form.peg', 'utf-8');
var parse = PEG.buildParser(peg).parse;

describe('parser', function() {
  it('parse radio input', function(){
    var data = fs.readFileSync(__dirname + '/fixtures/radio-input.txt', 'utf-8');
    var result = parse(data)[0];
    expect(result.tag).toEqual('radio')
    expect(result.label).toEqual('让学生看图，运用经纬网的知识，说出北京所在的地理位置。')
    expect(result.options.length).toBe(3)
    expect(result.options[0]).toEqual('记忆@识别(recognizing)')
  });

  it('parse text input', function(){
    var data = fs.readFileSync(__dirname + '/fixtures/string-input.txt', 'utf-8');
    var result = parse(data)[0];
    expect(result.tag).toEqual('text')
  })

  it('parse text input', function(){
    var data = fs.readFileSync(__dirname + '/fixtures/textarea.txt', 'utf-8');
    var result = parse(data)[0];
    expect(result.tag).toEqual('textarea')
  })

  it('parse checkbox input', function(){
    var data = fs.readFileSync(__dirname + '/fixtures/checkbox.txt', 'utf-8');
    var result = parse(data)[0];
    expect(result.tag).toEqual('checkbox')
    expect(result.label).toEqual('让学生看图，运用经纬网的知识，说出北京所在的地理位置。')
    expect(result.options.length).toBe(3)
    expect(result.options[0]).toEqual('记忆@识别(recognizing)')
  })
})
