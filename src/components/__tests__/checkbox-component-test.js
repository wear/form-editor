jest.dontMock('../CheckboxComponent')

var React = require('react'),
    CheckboxComponent = require('../CheckboxComponent'),
    SpecHelper = require('../../SpecHelper');

describe('checkbox component', function() {
  it('render checkbox', function() {
    var vdom = SpecHelper.getVdom(CheckboxComponent, {
      label:'test label',
      tip: 'test tip',
      options: [{tag:'option', label: ['test option']}]
    })

    var helpBlock = React.DOM.div({className:'help-block'}, 'test tip')

    expect(vdom.props.children[2]).toEqual(helpBlock)
    expect(vdom.props.children[0].type).toEqual('label')
  });
});
