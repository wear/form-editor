jest.dontMock('../CheckboxOptionComponent')

var React = require('react'),
    CheckboxOptionComponent = require('../CheckboxOptionComponent'),
    SpecHelper = require('../../SpecHelper');

describe('checkbox option component', function() {
  it('render checkbox option', function() {
    var vdom = SpecHelper.getVdom(CheckboxOptionComponent, {
      tag:'option', label: ['test option'], isAnswer: true, name: 'test'
    });
    expect(vdom.props.className).toEqual('checkbox has-success')
  });
});
