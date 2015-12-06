jest.dontMock('../src/utils/Compiler.js');
jest.dontMock('../src/utils/RowCompiler')
jest.dontMock('pegjs')

var fs = require('fs');
var compileForm = require('../src/utils/Compiler.js');

describe('compile', function() {
  it('complie input', function(){
    var data = fs.readFileSync(__dirname + '/fixtures/radio-input.txt', 'utf-8');
    var result = compileForm(data);

    expect(result[0].label).toEqual(['让学生看图，运用经纬网的知识，说出北京所在的地理位置。'])
  });

  it('compile input with markup', function(){
    var data = fs.readFileSync(__dirname + '/fixtures/radio-input-with-markup.txt', 'utf-8');
    var result = compileForm(data);

    expect(result[0].label).toEqual([
      '让学生看图，运用经纬网的知识，说出北京所在的地理位置。',
      {tag: 'code', body: 'code'}
      ]);
  })
});
