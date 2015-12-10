jest.dontMock('../RadioComponent')

var React = require('react'),
    RadioComponent = require('../RadioComponent'),
    RowComponent = require('../RowComponent'),
    SpecHelper = require('../../SpecHelper');

describe('radio component', function() {
  it('render radio', function() {
    var vdom = SpecHelper.getVdom(RadioComponent, {
      label:['test label'],
      tip: 'test tip',
      options: [{tag:'option', label: ['test option'], answer: '1'}]
    })

    var helpBlock = React.DOM.div({className:'help-block'}, 'test tip');
    expect(vdom.props.children[0].type).toEqual('label');
  });
});
