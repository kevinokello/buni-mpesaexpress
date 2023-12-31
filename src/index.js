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


import ApiClient from './ApiClient';
import STKPushRequest from './org.wso2.client.model.MpesaExpressAPIService/STKPushRequest';
import STKPushResponse from './org.wso2.client.model.MpesaExpressAPIService/STKPushResponse';
import STKPushResponseHeader from './org.wso2.client.model.MpesaExpressAPIService/STKPushResponseHeader';
import ExpressCheckoutRequestApi from './org.wso2.client.api.MpesaExpressAPIService/ExpressCheckoutRequestApi';


/**
* Mpesa_Express_Checkout_API.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var MpesaExpressApiService = require('index'); // See note below*.
* var xxxSvc = new MpesaExpressApiService.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new MpesaExpressApiService.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new MpesaExpressApiService.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new MpesaExpressApiService.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The STKPushRequest model constructor.
     * @property {module:org.wso2.client.model.MpesaExpressAPIService/STKPushRequest}
     */
    STKPushRequest,

    /**
     * The STKPushResponse model constructor.
     * @property {module:org.wso2.client.model.MpesaExpressAPIService/STKPushResponse}
     */
    STKPushResponse,

    /**
     * The STKPushResponseHeader model constructor.
     * @property {module:org.wso2.client.model.MpesaExpressAPIService/STKPushResponseHeader}
     */
    STKPushResponseHeader,

    /**
    * The ExpressCheckoutRequestApi service constructor.
    * @property {module:org.wso2.client.api.MpesaExpressAPIService/ExpressCheckoutRequestApi}
    */
    ExpressCheckoutRequestApi
};
