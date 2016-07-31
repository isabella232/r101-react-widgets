'use strict';

if (process.env.NODE_ENV !== 'production') {
  [Array.prototype.some, Array.prototype.filter, Array.prototype.reduce].forEach(function (method) {
    if (!method) throw new Error('One or more ES5 features is not available to ReactWidgets: http://jquense.github.io/react-widgets/docs/#/getting-started/browser');
  });
}

// this is the only export we currently use
module.exports = {
  DateTimePicker: require('./DateTimePicker'),
};
