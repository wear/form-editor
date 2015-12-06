jest.dontMock('../FormComponent');
jest.dontMock('flux')

var React = require('react'),
    FormComponent = require('../FormComponent'),
    SpecHelper = require('../SpecHelper');

describe('form component', function() {
  it('render radio', function() {
    var radioExpr = {
      tag:'radio',
      label:'test label',
      options: [{tag:'option', label: ['test option']}]
    }
    var vdom = SpecHelper.getVdom(FormComponent)
    console.log(vdom.setState({a:'s'}))
  });
});
