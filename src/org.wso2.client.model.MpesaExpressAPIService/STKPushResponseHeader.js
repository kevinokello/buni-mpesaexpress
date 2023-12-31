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

import ApiClient from '../ApiClient';

/**
 * The STKPushResponseHeader model module.
 * @module org.wso2.client.model.MpesaExpressAPIService/STKPushResponseHeader
 * @version 1.0.0
 */
class STKPushResponseHeader {
    /**
     * Constructs a new <code>STKPushResponseHeader</code>.
     * @alias module:org.wso2.client.model.MpesaExpressAPIService/STKPushResponseHeader
     */
    constructor() { 
        
        STKPushResponseHeader.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>STKPushResponseHeader</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:org.wso2.client.model.MpesaExpressAPIService/STKPushResponseHeader} obj Optional instance to populate.
     * @return {module:org.wso2.client.model.MpesaExpressAPIService/STKPushResponseHeader} The populated <code>STKPushResponseHeader</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new STKPushResponseHeader();

            if (data.hasOwnProperty('statusCode')) {
                obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'String');
            }
            if (data.hasOwnProperty('statusDescription')) {
                obj['statusDescription'] = ApiClient.convertToType(data['statusDescription'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Status Code of the request, 0 - success
 * @member {String} statusCode
 */
STKPushResponseHeader.prototype['statusCode'] = undefined;

/**
 * Status Code description
 * @member {String} statusDescription
 */
STKPushResponseHeader.prototype['statusDescription'] = undefined;






export default STKPushResponseHeader;

