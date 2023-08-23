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
 * The STKPushRequest model module.
 * @module org.wso2.client.model.MpesaExpressAPIService/STKPushRequest
 * @version 1.0.0
 */
class STKPushRequest {
    /**
     * Constructs a new <code>STKPushRequest</code>.
     * @alias module:org.wso2.client.model.MpesaExpressAPIService/STKPushRequest
     * @param phoneNumber {String} The phone number sending money. The parameter expected is a Valid Safaricom Mobile Number that is M-PESA registered in the format 2547XXXXXXXX
     * @param amount {String} Decimal values are not permitted
     * @param invoiceNumber {String} This is an Alpha-Numeric parameter that is defined by your system as an Identifier of the transaction for CustomerPayBillOnline transaction type.Along with the business name, this value is also displayed to the customer in the STK Pin Prompt message. Maximum of 12 characters.
     * @param sharedShortCode {Boolean} If you set this parameter to true, Paramaters OrgShortCode, OrgPassKey will be replaced with internal values.
     * @param orgShortCode {String} The organization receiving the funds. The parameter expected is a 5 to 6 digit
     * @param orgPassKey {String} This is the password used for encrypting the request sent.
     * @param callbackUrl {String} A CallBack URL is a valid secure URL that is used to receive notifications from M-Pesa API. It is the endpoint to which the results will be sent by M-Pesa API.
     * @param transactionDescription {String} This is any additional information/comment that can be sent along with the request from your system. Maximum of 13 Characters.
     */
    constructor(phoneNumber, amount, invoiceNumber, sharedShortCode, orgShortCode, orgPassKey, callbackUrl, transactionDescription) { 
        
        STKPushRequest.initialize(this, phoneNumber, amount, invoiceNumber, sharedShortCode, orgShortCode, orgPassKey, callbackUrl, transactionDescription);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, phoneNumber, amount, invoiceNumber, sharedShortCode, orgShortCode, orgPassKey, callbackUrl, transactionDescription) { 
        obj['phoneNumber'] = phoneNumber;
        obj['amount'] = amount;
        obj['invoiceNumber'] = invoiceNumber;
        obj['sharedShortCode'] = sharedShortCode;
        obj['orgShortCode'] = orgShortCode;
        obj['orgPassKey'] = orgPassKey;
        obj['callbackUrl'] = callbackUrl;
        obj['transactionDescription'] = transactionDescription;
    }

    /**
     * Constructs a <code>STKPushRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:org.wso2.client.model.MpesaExpressAPIService/STKPushRequest} obj Optional instance to populate.
     * @return {module:org.wso2.client.model.MpesaExpressAPIService/STKPushRequest} The populated <code>STKPushRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new STKPushRequest();

            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('invoiceNumber')) {
                obj['invoiceNumber'] = ApiClient.convertToType(data['invoiceNumber'], 'String');
            }
            if (data.hasOwnProperty('sharedShortCode')) {
                obj['sharedShortCode'] = ApiClient.convertToType(data['sharedShortCode'], 'Boolean');
            }
            if (data.hasOwnProperty('orgShortCode')) {
                obj['orgShortCode'] = ApiClient.convertToType(data['orgShortCode'], 'String');
            }
            if (data.hasOwnProperty('orgPassKey')) {
                obj['orgPassKey'] = ApiClient.convertToType(data['orgPassKey'], 'String');
            }
            if (data.hasOwnProperty('callbackUrl')) {
                obj['callbackUrl'] = ApiClient.convertToType(data['callbackUrl'], 'String');
            }
            if (data.hasOwnProperty('transactionDescription')) {
                obj['transactionDescription'] = ApiClient.convertToType(data['transactionDescription'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The phone number sending money. The parameter expected is a Valid Safaricom Mobile Number that is M-PESA registered in the format 2547XXXXXXXX
 * @member {String} phoneNumber
 */
STKPushRequest.prototype['phoneNumber'] = undefined;

/**
 * Decimal values are not permitted
 * @member {String} amount
 */
STKPushRequest.prototype['amount'] = undefined;

/**
 * This is an Alpha-Numeric parameter that is defined by your system as an Identifier of the transaction for CustomerPayBillOnline transaction type.Along with the business name, this value is also displayed to the customer in the STK Pin Prompt message. Maximum of 12 characters.
 * @member {String} invoiceNumber
 */
STKPushRequest.prototype['invoiceNumber'] = undefined;

/**
 * If you set this parameter to true, Paramaters OrgShortCode, OrgPassKey will be replaced with internal values.
 * @member {Boolean} sharedShortCode
 */
STKPushRequest.prototype['sharedShortCode'] = undefined;

/**
 * The organization receiving the funds. The parameter expected is a 5 to 6 digit
 * @member {String} orgShortCode
 */
STKPushRequest.prototype['orgShortCode'] = undefined;

/**
 * This is the password used for encrypting the request sent.
 * @member {String} orgPassKey
 */
STKPushRequest.prototype['orgPassKey'] = undefined;

/**
 * A CallBack URL is a valid secure URL that is used to receive notifications from M-Pesa API. It is the endpoint to which the results will be sent by M-Pesa API.
 * @member {String} callbackUrl
 */
STKPushRequest.prototype['callbackUrl'] = undefined;

/**
 * This is any additional information/comment that can be sent along with the request from your system. Maximum of 13 Characters.
 * @member {String} transactionDescription
 */
STKPushRequest.prototype['transactionDescription'] = undefined;






export default STKPushRequest;
