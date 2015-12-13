jest.dontMock('../CodeComponent')
jest.dontMock('../SectionLineComponent')

var React = require('react'),
    CodeComponent = require('../CodeComponent'),
    SectionLineComponent = require('../SectionLineComponent');
    SpecHelper = require('../../SpecHelper');

describe('code component', function() {
  it('render code', function() {
    var vdom = SpecHelper.getVdom(CodeComponent, {
      content: ['aa','bb']
    })

    var span = <SectionLineComponent key="code-line-0" content='aa' />
    expect(span).toEqual(vdom.props.children[0])
  });
});
