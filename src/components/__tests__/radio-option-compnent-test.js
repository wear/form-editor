jest
  .dontMock('../RadioOptionComponent')

var React = require('react'),
    RadioxOptionComponent = require('../RadioOptionComponent'),
    SpecHelper = require('../../SpecHelper');

describe('Radio option component', function() {
  it('render Radio option', function() {
    var vdom = SpecHelper.getVdom(RadioxOptionComponent, {
      tag:'option', label: ['test option'], isAnswer: true, name: 'test'
    });
    expect(vdom.props.className).toEqual('radio has-success')
  });
});
