/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Domain = require('../base/Domain');
import Twilio = require('./Twilio');
import V1 = require('./studio/V1');
import { FlowListInstance } from './studio/v1/flow';


declare class Studio extends Domain {
  /**
   * Initialize studio domain
   *
   * @param twilio - The twilio client
   */
  constructor(twilio: Twilio);

  readonly flows: FlowListInstance;
  readonly v1: V1;
}

export = Studio;