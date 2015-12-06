jest.dontMock('../src/utils/RowCompiler.js');
jest.dontMock('pegjs');

var compileRow = require('../src/utils/RowCompiler.js');

describe('compile row', function() {
  it('compile plain text', function(){
    expect(compileRow('aaa')).toEqual(['aaa'])
  });

  it('compile row with markup', function(){
    expect(compileRow("left```code```right")).toEqual(['left',{tag:'code', body: 'code'}, 'right'])
  });

  it('compile row with markup recursively', function(){
    var txt = "left```code```inner-left![image](image)inner-right";

    expect(compileRow(txt)).toEqual(['left',
                    {tag:'code', body: 'code'},
                    'inner-left',
                    {tag:'image', body: 'image'},
                    'inner-right'])
  });

})
