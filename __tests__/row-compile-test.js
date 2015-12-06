jest.dontMock('../src/utils/RowCompiler.js');

var compileRow = require('../src/utils/RowCompiler.js');

describe('compile row', function() {
  it('compile plain text', function(){
    expect(compileRow('aaa')).toEqual(['aaa'])
  });

  it('compile row with markup', function(){
    expect(compileRow({left:"left",
      markup:{tag:'code', body:'code'},
      right:'right'})).toEqual(['left',{tag:'code', body: 'code'}, 'right'])
  });

  it('compile row with markup recursively', function(){
    var expr = {left:'left', markup:{tag:'code', body:'code'}, right:{
      left:'inner-left', markup:{tag:'image', body:'image'}, right:'inner-right'
    }}
    expect(compileRow(expr)).toEqual(['left',
                    {tag:'code', body: 'code'},
                    'inner-left',
                    {tag:'image', body: 'image'},
                    'inner-right'])
  });
});
