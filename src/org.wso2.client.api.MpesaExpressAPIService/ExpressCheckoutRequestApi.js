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


import ApiClient from "../ApiClient";
import STKPushRequest from '../org.wso2.client.model.MpesaExpressAPIService/STKPushRequest';
import STKPushResponse from '../org.wso2.client.model.MpesaExpressAPIService/STKPushResponse';

/**
* ExpressCheckoutRequest service.
* @module org.wso2.client.api.MpesaExpressAPIService/ExpressCheckoutRequestApi
* @version 1.0.0
*/
export default class ExpressCheckoutRequestApi {

    /**
    * Constructs a new ExpressCheckoutRequestApi. 
    * @alias module:org.wso2.client.api.MpesaExpressAPIService/ExpressCheckoutRequestApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the stkpushPost operation.
     * @callback module:org.wso2.client.api.MpesaExpressAPIService/ExpressCheckoutRequestApi~stkpushPostCallback
     * @param {String} error Error message, if any.
     * @param {module:org.wso2.client.model.MpesaExpressAPIService/STKPushResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} routeCode 
     * @param {String} operation 
     * @param {String} messageId 
     * @param {module:org.wso2.client.model.MpesaExpressAPIService/STKPushRequest} sTKPushRequest Express Checkout Request Body
     * @param {module:org.wso2.client.api.MpesaExpressAPIService/ExpressCheckoutRequestApi~stkpushPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:org.wso2.client.model.MpesaExpressAPIService/STKPushResponse}
     */
    stkpushPost(routeCode, operation, messageId, sTKPushRequest, callback) {
      let postBody = sTKPushRequest;
      // verify the required parameter 'routeCode' is set
      if (routeCode === undefined || routeCode === null) {
        throw new Error("Missing the required parameter 'routeCode' when calling stkpushPost");
      }
      // verify the required parameter 'operation' is set
      if (operation === undefined || operation === null) {
        throw new Error("Missing the required parameter 'operation' when calling stkpushPost");
      }
      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling stkpushPost");
      }
      // verify the required parameter 'sTKPushRequest' is set
      if (sTKPushRequest === undefined || sTKPushRequest === null) {
        throw new Error("Missing the required parameter 'sTKPushRequest' when calling stkpushPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'routeCode': routeCode,
        'operation': operation,
        'messageId': messageId
      };
      let formParams = {
      };

      let authNames = ['default'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = STKPushResponse;
      return this.apiClient.callApi(
        '/stkpush', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
