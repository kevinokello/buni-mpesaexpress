/**
 * MpesaExpressAPIService
 * Mpesa Express Checkout API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MpesaExpressApiService);
  }
}(this, function(expect, MpesaExpressApiService) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MpesaExpressApiService.STKPushResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('STKPushResponse', function() {
    it('should create an instance of STKPushResponse', function() {
      // uncomment below and update the code to test STKPushResponse
      //var instane = new MpesaExpressApiService.STKPushResponse();
      //expect(instance).to.be.a(MpesaExpressApiService.STKPushResponse);
    });

    it('should have the property header (base name: "header")', function() {
      // uncomment below and update the code to test the property header
      //var instane = new MpesaExpressApiService.STKPushResponse();
      //expect(instance).to.be();
    });

    it('should have the property response (base name: "response")', function() {
      // uncomment below and update the code to test the property response
      //var instane = new MpesaExpressApiService.STKPushResponse();
      //expect(instance).to.be();
    });

  });

}));
