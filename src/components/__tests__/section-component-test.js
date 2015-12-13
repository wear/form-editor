jest.dontMock('../SectionComponent');
jest.dontMock('../SectionLineComponent')

var React = require('react'),
    SectionComponent = require('../SectionComponent'),
    SectionLineComponent = require('../SectionLineComponent');
    SpecHelper = require('../../SpecHelper');

describe('section component', function() {
  it('render pure string', function() {
    var result = SpecHelper.getVdom(SectionComponent, {lines: ['test']});
    expect(result.props.children[0]).toEqual(<SectionLineComponent key='section-line-0' content='test' />)
  })

  it('render code', function() {
    var codeLine = ['test',{tag: 'code', body: ['code']}]
    var component = SpecHelper.getVdom(SectionComponent, {lines: codeLine})

    var vdom1 = component.props.children[0];
    var vdom2 = component.props.children[1];

    expect(vdom1).toEqual(<SectionLineComponent key='section-line-0' content='test' />);
    expect(vdom2.props.content).toEqual(['code']);
  })

  it('render image', function() {
    var codeLine = ['test',{tag: 'image', body: 'image'}]
    var component = SpecHelper.getVdom(SectionComponent, {lines: codeLine})

    var vdom1 = component.props.children[0];
    var vdom2 = component.props.children[1];

    expect(vdom1).toEqual(<SectionLineComponent key='section-line-0' content='test' />);
    expect(vdom2.type.displayName).toEqual('ImageboxComponent');
    expect(vdom2.props.src).toEqual('image');
  })
});
