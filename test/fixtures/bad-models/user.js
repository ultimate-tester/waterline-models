'use strict';

module.exports = require('waterline').Collection.extend({
  connection: 'default',
  attributes: {
    firstName: 'string',
    lastName: 'string',
    pets: {
      collection: 'pet',
      via: 'owner'
    }
  }
});
