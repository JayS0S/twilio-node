'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var ServiceList = require('./authy/service').ServiceList;
var Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the Authy version of Preview
 *
 * @property {Twilio.Preview.Authy.ServiceList} services - services resource
 *
 * @param {Twilio.Preview} domain - The twilio domain
 */
/* jshint ignore:end */
function Authy(domain) {
  Version.prototype.constructor.call(this, domain, 'Authy');

  // Resources
  this._services = undefined;
}

_.extend(Authy.prototype, Version.prototype);
Authy.prototype.constructor = Authy;

Object.defineProperty(Authy.prototype,
  'services', {
  get: function() {
    this._services = this._services || new ServiceList(this);
    return this._services;
  }
});

module.exports = Authy;