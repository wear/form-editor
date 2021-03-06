var AppDispatcher = require('./AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var _data = {questions:[]};

function payload(data){
  _data = assign({}, {questions: data});
}

var Store = assign({}, EventEmitter.prototype, {
  getData: function(){
    return _data.questions;
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  /**
   * @param {function} callback
   */

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
})

// Register callback to handle all updates
Store.dispatchToken = AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case 'DataChange':
      payload(action.data);
      Store.emitChange();
      break;
    default:
      //
    }
});

module.exports = Store;
