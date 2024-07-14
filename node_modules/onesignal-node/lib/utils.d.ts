import * as request from 'request';
/**
 * Remove trailing slash from given string,
 *
 * Ex:
 *  input: 'https://localhost/'
 *  output: 'https://localhost'
 *
 * @param {string} str String to convert
 *
 * @return {string} Stripped string.
 */
export declare const stripTrailingSlash: (str: string) => string;
/**
 * Given a JSON object, create query string.
 *
 * Ex:
 *   input: { limit: 1, offset: 2 }
 *   output: 'limit=1&offset=2'
 *
 * @param {object} obj Key-value pairs for query string.
 *
 * @return {string} Query string.
 */
export declare const jsonToQueryString: (obj?: {
    [key: string]: any;
}) => string;
/**
 * Make a request using Basic Authorization header. Return the response as JSON.
 *
 * @param {string} uri Url to make the request to.
 * @param {string} method Method of the request. Ex: GET, POST, PATCH ...
 * @param {string} authKey Authorization string to be used in header.
 * @param {{}} body Body of the request.
 *
 * @return {Promise<request.ResponseAsJSON>}
 */
export declare const basicAuthRequest: (uri: string, method: string, authKey: string, body?: {} | undefined) => Promise<request.ResponseAsJSON>;
/**
 * Sign any string payload using specified private key
 * Reference: https://documentation.onesignal.com/docs/identity-verification#auth-hash-generation
 *
 * @param {string} payload String to be signed
 * @param {string} key Private REST key
 * @return {string} Signed payload
 */
export declare const signStringWithKey: (payload: string, key: string) => string;
//# sourceMappingURL=utils.d.ts.map