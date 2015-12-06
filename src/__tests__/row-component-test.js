jest.dontMock('../RowComponent');

var React = require('react'),
    RowComponent = require('../RowComponent'),
    SpecHelper = require('../SpecHelper');

describe('row component', function() {
  it('render pure string', function() {

    var vdom = SpecHelper.getVdom(RowComponent, {lines: ['test']}).props.children[0];
    expect(vdom.props.children).toEqual('test')
  })

  it('render code', function() {
    var codeLine = ['test',{tag: 'code', body: 'code'}]
    var component = SpecHelper.getVdom(RowComponent, {lines: codeLine})

    var vdom1 = component.props.children[0];
    var vdom2 = component.props.children[1];

    expect(vdom1.props.children).toEqual('test');
    expect(vdom2.type).toEqual('code');
    expect(vdom2.props.children).toEqual('code');
  })

  it('render code', function() {
    var codeLine = ['test',{tag: 'image', body: 'image'}]
    var component = SpecHelper.getVdom(RowComponent, {lines: codeLine})

    var vdom1 = component.props.children[0];
    var vdom2 = component.props.children[1];

    expect(vdom1.props.children).toEqual('test');
    expect(vdom2.type).toEqual('img');
    expect(vdom2.props.src).toEqual('image');
  })
});
