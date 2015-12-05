jest.dontMock('pegjs');

var PEG = require('pegjs');
var fs = require('fs');
var peg = fs.readFileSync(__dirname+'/../peg/form-parser.peg', 'utf-8');
var parse = PEG.buildParser(peg).parse;


describe('parser', function() {
  it('parse radio input', function(){
    var data = fs.readFileSync(__dirname + '/fixtures/radio-input.txt', 'utf-8');
    var result = parse(data)[0];
    expect(result.tag).toEqual('radio')
    expect(result.label).toEqual('让学生看图，运用经纬网的知识，说出北京所在的地理位置。')
    expect(result.options.length).toBe(3)
    expect(result.options[0].label).toEqual('记忆@识别(recognizing)')
    expect(result.options[1].tag).toEqual('answer')
    expect(result.tip).toEqual('请在A、B、C选项上点选')
  });

  it('parse checkbox input', function(){
    var data = fs.readFileSync(__dirname + '/fixtures/checkbox.txt', 'utf-8');
    var result = parse(data)[0];
    expect(result.tag).toEqual('checkbox')
    expect(result.label).toEqual('让学生看图，运用经纬网的知识，说出北京所在的地理位置。')
    expect(result.options.length).toBe(3)
    expect(result.options[0].label).toEqual('记忆@识别(recognizing)')
    expect(result.options[0].tag).toEqual('answer')
    expect(result.options[2].tag).toEqual('answer')
  })

  it('parse sequence questions', function(){
    var data = fs.readFileSync(__dirname + '/fixtures/sequence.txt', 'utf-8');
    var result = parse(data);
    expect(result.length).toEqual(2)
    expect(result[0].tag).toEqual('radio')
    expect(result[0].options.length).toEqual(3)
    expect(result[1].tag).toEqual('checkbox')
    expect(result[1].options.length).toEqual(3)
  })
})
