jest.dontMock('pegjs');

var PEG = require('pegjs');
var fs = require('fs');
var peg = fs.readFileSync(__dirname+'/../form-parser.peg', 'utf-8');
var parse = PEG.buildParser(peg).parse;


describe('parser', function() {
  it('parse radio input', function(){
    var data = fs.readFileSync(__dirname + '/fixtures/radio-input.txt', 'utf-8');
    var result = parse(data)[0];

    expect(result.tag).toEqual('radio')
    expect(result.label).toEqual('让学生看图，运用经纬网的知识，说出北京所在的地理位置。')
    expect(result.options.length).toBe(3)
    expect(result.options[0].label).toEqual('记忆@识别(recognizing)')
    expect(result.options[1].answer).toEqual(true)
    expect(result.tip).toEqual('请在A、B、C选项上点选')
  });

  it('parse checkbox input', function(){
    var data = fs.readFileSync(__dirname + '/fixtures/checkbox.txt', 'utf-8');
    var result = parse(data)[0];
    expect(result.tag).toEqual('checkbox')
    expect(result.label).toEqual('让学生看图，运用经纬网的知识，说出北京所在的地理位置。')
    expect(result.options.length).toBe(3)
    expect(result.options[0].label).toEqual('记忆@识别(recognizing)')
    expect(result.options[0].answer).toEqual(true)
    expect(result.options[2].answer).toEqual(true)
  })

  it('parse paragraph', function(){
    var data = fs.readFileSync(__dirname + '/fixtures/paragraph.txt', 'utf-8');
    var result = parse(data);
    expect(result[0].tag).toEqual('p')
    expect(result[0].body.split('\n')[0]).toEqual("接受《经济参考报》采访的专家表示，房地产税改革的原则是对多套房、高端房进行调节，因此很多人并不需要缴纳房地产税。")
  })

  it('parse sequence questions', function(){
    var data = fs.readFileSync(__dirname + '/fixtures/sequence.txt', 'utf-8');
    var result = parse(data);

    expect(result.length).toEqual(3)
    expect(result[0].tag).toEqual('p')
    expect(result[1].tag).toEqual('radio')
    expect(result[1].options.length).toEqual(3)
    expect(result[2].tag).toEqual('checkbox')
    expect(result[2].options.length).toEqual(3)
  })
})
