'use strict';

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Participant', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.conversations.services('KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .conversations('KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .participants('KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        conversationSid: 'KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://preview.twilio.com/Conversations/Services/<%= serviceSid %>/Conversations/<%= conversationSid %>/Participants/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'service_sid': 'KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'channel': 'sms',
          'identifier': 'identifier',
          'date_updated': '2015-07-30T20:00:00Z',
          'proxy_identifier': 'proxy_identifier',
          'friendly_name': 'friendly_name',
          'date_created': '2015-07-30T20:00:00Z',
          'url': 'https://preview.twilio.com/Conversations/Services/KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conversations/KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'conversation_sid': 'KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.conversations.services('KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .conversations('KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .participants('KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.conversations.services('KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .conversations('KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .participants.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        conversationSid: 'KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://preview.twilio.com/Conversations/Services/<%= serviceSid %>/Conversations/<%= conversationSid %>/Participants')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'meta': {
              'previous_page_url': null,
              'next_page_url': null,
              'url': 'https://preview.twilio.com/Conversations/Services/KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conversations/KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants?PageSize=50&Page=0',
              'page': 0,
              'first_page_url': 'https://preview.twilio.com/Conversations/Services/KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conversations/KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants?PageSize=50&Page=0',
              'page_size': 50,
              'key': 'participants'
          },
          'participants': []
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.conversations.services('KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .conversations('KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .participants.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var opts = {
        channel: 'sms',
        identifier: 'identifier'
      };
      var promise = client.preview.conversations.services('KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .conversations('KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .participants.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        conversationSid: 'KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://preview.twilio.com/Conversations/Services/<%= serviceSid %>/Conversations/<%= conversationSid %>/Participants')(solution);

      var values = {
        Channel: 'sms',
        Identifier: 'identifier',
      };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'service_sid': 'KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'channel': 'sms',
          'identifier': 'identifier',
          'date_updated': '2015-07-30T20:00:00Z',
          'proxy_identifier': 'proxy_identifier',
          'friendly_name': 'friendly_name',
          'date_created': '2015-07-30T20:00:00Z',
          'url': 'https://preview.twilio.com/Conversations/Services/KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conversations/KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'conversation_sid': 'KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var opts = {
        channel: 'sms',
        identifier: 'identifier'
      };
      var promise = client.preview.conversations.services('KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .conversations('KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .participants.create(opts);
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid remove request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.conversations.services('KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .conversations('KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .participants('KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        conversationSid: 'KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://preview.twilio.com/Conversations/Services/<%= serviceSid %>/Conversations/<%= conversationSid %>/Participants/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function() {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.preview.conversations.services('KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .conversations('KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .participants('KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid update request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.conversations.services('KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .conversations('KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .participants('KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        conversationSid: 'KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://preview.twilio.com/Conversations/Services/<%= serviceSid %>/Conversations/<%= conversationSid %>/Participants/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function() {
      var body = JSON.stringify({
          'service_sid': 'KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'channel': 'sms',
          'identifier': 'identifier',
          'date_updated': '2015-07-30T20:00:00Z',
          'proxy_identifier': 'proxy_identifier',
          'friendly_name': 'friendly_name',
          'date_created': '2015-07-30T20:00:00Z',
          'url': 'https://preview.twilio.com/Conversations/Services/KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conversations/KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'conversation_sid': 'KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.conversations.services('KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .conversations('KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .participants('KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});
