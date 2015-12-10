jest.dontMock('../SectionComponent');

var React = require('react'),
    SectionComponent = require('../SectionComponent'),
    SpecHelper = require('../../SpecHelper');

describe('section component', function() {
  it('render pure string', function() {
    var result = SpecHelper.getVdom(SectionComponent, {lines: ['test']}).props.children[0];
    expect(result).toEqual('test')
  })

  it('render code', function() {
    var codeLine = ['test',{tag: 'code', body: 'code'}]
    var component = SpecHelper.getVdom(SectionComponent, {lines: codeLine})

    var vdom1 = component.props.children[0];
    var vdom2 = component.props.children[1];

    expect(vdom1).toEqual('test');
    expect(vdom2.props.content).toEqual('code' );
  })

  it('render image', function() {
    var codeLine = ['test',{tag: 'image', body: 'image'}]
    var component = SpecHelper.getVdom(SectionComponent, {lines: codeLine})

    var vdom1 = component.props.children[0];
    var vdom2 = component.props.children[1];

    expect(vdom1).toEqual('test');
    expect(vdom2.type).toEqual('img');
    expect(vdom2.props.src).toEqual('image');
  })
});
