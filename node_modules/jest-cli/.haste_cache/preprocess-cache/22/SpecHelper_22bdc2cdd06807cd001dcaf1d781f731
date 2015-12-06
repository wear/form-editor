var React = require('react'),
    TestUtils = require('react-addons-test-utils')

var helpers = {
  getVdom : function(component, props){
    var shallowRenderer = TestUtils.createRenderer();

    shallowRenderer.render(React.createElement(component, props));
    return shallowRenderer.getRenderOutput();
  }
}

module.exports = helpers;
