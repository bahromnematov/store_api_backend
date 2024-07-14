"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserClient = void 0;
const utils_1 = require("./utils");
const constants_1 = require("./constants");
class UserClient {
    constructor(userAuthKey, options) {
        this.userAuthKey = userAuthKey;
        this.options = Object.assign(Object.assign({}, constants_1.defaultClientOptions), (options || {}));
        this.options.apiRoot = utils_1.stripTrailingSlash(this.options.apiRoot);
    }
    /**
     * View the details of all of your current OneSignal apps.
     * Reference: https://documentation.onesignal.com/reference#view-apps-apps
     *
     * @return {Promise<Response>} Http response of One Signal server.
     */
    viewApps() {
        const uri = `${this.options.apiRoot}/${constants_1.APPS_PATH}`;
        return utils_1.basicAuthRequest(uri, 'GET', this.userAuthKey);
    }
    /**
     * View the details of a single OneSignal app.
     * Reference: https://documentation.onesignal.com/reference#view-an-app
     *
     * @param {string} appId Application id.
     *
     * @return {Promise<Response>} Http response of One Signal server.
     */
    viewApp(appId) {
        const uri = `${this.options.apiRoot}/${constants_1.APPS_PATH}/${appId}`;
        return utils_1.basicAuthRequest(uri, 'GET', this.userAuthKey);
    }
    /**
     * Creates a new OneSignal app.
     * Reference: https://documentation.onesignal.com/reference#create-an-app
     *
     * @param {CreateAppBody} body Request body.
     * @returns {Promise<Response>} Http response of One Signal server.
     */
    createApp(body) {
        const uri = `${this.options.apiRoot}/${constants_1.APPS_PATH}`;
        return utils_1.basicAuthRequest(uri, 'POST', this.userAuthKey, body);
    }
    /**
     * Updates the name or configuration settings of an existing OneSignal app
     * Reference: https://documentation.onesignal.com/reference#update-an-app
     *
     * @param {string} appId Application id.
     * @param {CreateAppBody} body Request body.
     * @returns {Promise<Response>} Http response of One Signal server.
     */
    updateApp(appId, body) {
        const uri = `${this.options.apiRoot}/${constants_1.APPS_PATH}/${appId}`;
        return utils_1.basicAuthRequest(uri, 'PUT', this.userAuthKey, body);
    }
}
exports.UserClient = UserClient;
//# sourceMappingURL=user-client.js.map