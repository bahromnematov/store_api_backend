"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const constants_1 = require("./constants");
const utils_1 = require("./utils");
class Client {
    constructor(appId, apiKey, options) {
        this.appId = appId;
        this.apiKey = apiKey;
        this.options = Object.assign(Object.assign({}, constants_1.defaultClientOptions), (options || {}));
        this.options.apiRoot = utils_1.stripTrailingSlash(this.options.apiRoot);
    }
    /**
     * Sends notifications to your users.
     * Reference https://documentation.onesignal.com/reference#create-notification.
     *
     * @param {CreateNotificationBody} body Request body.
     * @returns {Promise<Response>} Http response of One Signal server.
     */
    createNotification(body) {
        // eslint-disable-next-line @typescript-eslint/camelcase
        const postBody = Object.assign({ [constants_1.APP_ID_FIELD_NAME]: this.appId }, body);
        const uri = `${this.options.apiRoot}/${constants_1.NOTIFICATIONS_PATH}`;
        return utils_1.basicAuthRequest(uri, 'POST', this.apiKey, postBody);
    }
    /**
     * Used to stop a scheduled or currently outgoing notification.
     * Reference: https://documentation.onesignal.com/reference#cancel-notification
     *
     * @param {string} notificationId Notification id.
     *
     * @return {Promise<Response>} Http response of One Signal server.
     */
    cancelNotification(notificationId) {
        const uri = `${this.options.apiRoot}/${constants_1.NOTIFICATIONS_PATH}/${notificationId}?${constants_1.APP_ID_QUERY_NAME}=${this.appId}`;
        return utils_1.basicAuthRequest(uri, 'DELETE', this.apiKey);
    }
    /**
     * View the details of a single notification.
     * Reference: https://documentation.onesignal.com/reference#view-notification
     *
     * @param {string} notificationId Notification id.
     *
     * @return {Promise<Response>} Http response of One Signal server.
     */
    viewNotification(notificationId) {
        const uri = `${this.options.apiRoot}/${constants_1.NOTIFICATIONS_PATH}/${notificationId}?${constants_1.APP_ID_QUERY_NAME}=${this.appId}`;
        return utils_1.basicAuthRequest(uri, 'GET', this.apiKey);
    }
    /**
     * View the details of multiple notifications.
     * Reference https://documentation.onesignal.com/reference#view-notifications
     *
     * @param {ViewNotificationsQuery} query Query too apply to the request.
     *
     * @return {Promise<Response>} Http response of One Signal server.
     */
    viewNotifications(query) {
        const queryString = utils_1.jsonToQueryString(query);
        const uri = `${this.options.apiRoot}/${constants_1.NOTIFICATIONS_PATH}?${constants_1.APP_ID_QUERY_NAME}=${this.appId}&${queryString}`;
        return utils_1.basicAuthRequest(uri, 'GET', this.apiKey);
    }
    /**
     * View the devices sent a notification.
     * Reference: https://documentation.onesignal.com/reference#view-notifications
     *
     * @param {string} notificationId Notification id.
     * @param {NotificationHistoryBody} body Post body to send.
     *
     * @return {Promise<Response>} Http response of One Signal server.
     */
    notificationHistory(notificationId, body) {
        const uri = `${this.options.apiRoot}/${constants_1.NOTIFICATIONS_PATH}/${notificationId}/${constants_1.NOTIFICATIONS_HISTORY}`;
        // eslint-disable-next-line @typescript-eslint/camelcase
        const postBody = Object.assign({ [constants_1.APP_ID_FIELD_NAME]: this.appId }, body);
        return utils_1.basicAuthRequest(uri, 'POST', this.apiKey, postBody);
    }
    /**
     * View the details of multiple devices in one of your OneSignal apps.
     * Reference: https://documentation.onesignal.com/reference#view-devices
     *
     * @param {LimitOffsetQuery} query Query too apply to the request.
     *
     * @return {Promise<Response>} Http response of One Signal server.
     */
    viewDevices(query) {
        const queryString = utils_1.jsonToQueryString(query);
        const uri = `${this.options.apiRoot}/${constants_1.DEVICES_PATH}?${constants_1.APP_ID_QUERY_NAME}=${this.appId}&${queryString}`;
        return utils_1.basicAuthRequest(uri, 'GET', this.apiKey);
    }
    /**
     * View the details of an existing device in one of your OneSignal apps.
     * Reference: https://documentation.onesignal.com/reference#view-device
     *
     * @param identifier Player's One Signal ID or email_auth_hash.
     *
     * @return {Promise<Response>} Http response of One Signal server.
     */
    viewDevice(identifier) {
        const uri = `${this.options.apiRoot}/${constants_1.DEVICES_PATH}/${identifier}?${constants_1.APP_ID_QUERY_NAME}=${this.appId}`;
        return utils_1.basicAuthRequest(uri, 'GET', this.apiKey);
    }
    /**
     * Update an existing device in one of your OneSignal apps
     * Reference: https://documentation.onesignal.com/reference#add-a-device
     *
     * @param {AddDeviceBody} body Request body.
     *
     * @return {Promise<ClientResponse>} Http response of One Signal server.
     */
    addDevice(body) {
        // eslint-disable-next-line @typescript-eslint/camelcase
        const postBody = Object.assign({ [constants_1.APP_ID_FIELD_NAME]: this.appId }, body);
        const uri = `${this.options.apiRoot}/${constants_1.DEVICES_PATH}`;
        return utils_1.basicAuthRequest(uri, 'POST', this.apiKey, postBody);
    }
    /**
     * Update an existing device in one of your OneSignal apps.
     * Reference: https://documentation.onesignal.com/reference#edit-device
     *
     * @param deviceId The device's OneSignal ID.
     * @param {EditDeviceBody} body Request body.
     *
     * @return {Promise<ClientResponse>} Http response of One Signal server.
     */
    editDevice(deviceId, body) {
        // eslint-disable-next-line @typescript-eslint/camelcase
        const postBody = Object.assign({ [constants_1.APP_ID_FIELD_NAME]: this.appId }, body);
        const uri = `${this.options.apiRoot}/${constants_1.DEVICES_PATH}/${deviceId}`;
        return utils_1.basicAuthRequest(uri, 'PUT', this.apiKey, postBody);
    }
    /**
     * Update an existing device's tags in one of your OneSignal apps using the External User ID.
     * Reference: https://documentation.onesignal.com/reference/edit-tags-with-external-user-id
     *
     * @param external_user_id The External User ID.
     * @param {EditTagsBody} body Request body.
     *
     * @return {Promise<ClientResponse>} Http response of One Signal server.
     */
    editTagsWithExternalUserIdDevice(externalUserId, body) {
        // eslint-disable-next-line @typescript-eslint/camelcase
        const postBody = Object.assign({ [constants_1.APP_ID_FIELD_NAME]: this.appId }, body);
        const uri = `${this.options.apiRoot}/${constants_1.APPS_PATH}/${this.appId}/${constants_1.APPS_USERS}/${externalUserId}`;
        return utils_1.basicAuthRequest(uri, 'PUT', this.apiKey, postBody);
    }
    /**
     * Update a device's session information.
     * Reference: https://documentation.onesignal.com/reference#new-session
     *
     * @param {string} deviceId The device's OneSignal ID.
     * @param {NewSessionBody} body Request body.
     *
     * @return {Promise<ClientResponse>} Http response of One Signal server.
     */
    newSession(deviceId, body) {
        // eslint-disable-next-line @typescript-eslint/camelcase
        const postBody = Object.assign({ [constants_1.APP_ID_FIELD_NAME]: this.appId }, body);
        const uri = `${this.options.apiRoot}/${constants_1.DEVICES_PATH}/${deviceId}/${constants_1.DEVICES_ONSESSION}`;
        return utils_1.basicAuthRequest(uri, 'POST', this.apiKey, postBody);
    }
    /**
     * Track a new purchase in your app.
     * Reference: https://documentation.onesignal.com/reference#new-session
     *
     * @param {string} deviceId The device's OneSignal ID.
     * @param {NewPurchaseBody} body Request body.
     *
     * @return {Promise<ClientResponse>} Http response of One Signal server.
     */
    newPurchase(deviceId, body) {
        // eslint-disable-next-line @typescript-eslint/camelcase
        const postBody = Object.assign({ [constants_1.APP_ID_FIELD_NAME]: this.appId }, body);
        const uri = `${this.options.apiRoot}/${constants_1.DEVICES_PATH}/${deviceId}/${constants_1.DEVICES_ONPURCHASE}`;
        return utils_1.basicAuthRequest(uri, 'POST', this.apiKey, postBody);
    }
    /**
     * Update a device's session length upon app resuming.
     * Reference: https://documentation.onesignal.com/reference#increment-session-length
     *
     * @param {string} deviceId The device's OneSignal ID.
     * @param {IncrementSessionLengthBody} body Request body.
     *
     * @return {Promise<ClientResponse>} Http response of One Signal server.
     */
    incrementSessionLength(deviceId, body) {
        // eslint-disable-next-line @typescript-eslint/camelcase
        const postBody = Object.assign({ [constants_1.APP_ID_FIELD_NAME]: this.appId }, body);
        const uri = `${this.options.apiRoot}/${constants_1.DEVICES_PATH}/${deviceId}/${constants_1.DEVICES_ONFOCUS}`;
        return utils_1.basicAuthRequest(uri, 'POST', this.apiKey, postBody);
    }
    /**
     * Generate a compressed CSV export of all of your current user data.
     * Reference: https://documentation.onesignal.com/reference#increment-session-length
     *
     * @param {ExportCSVBody} body Request body.
     *
     * @return {Promise<ClientResponse>} Http response of One Signal server.
     */
    exportCSV(body) {
        const uri = `${this.options.apiRoot}/${constants_1.DEVICES_PATH}/${constants_1.DEVICES_CSVEXPORT}?${constants_1.APP_ID_QUERY_NAME}=${this.appId}`;
        return utils_1.basicAuthRequest(uri, 'POST', this.apiKey, body);
    }
    /**
     * Create segments visible and usable in the dashboard and API.
     * Reference: https://documentation.onesignal.com/reference#notification-history
     *
     * @param {CreateSegmentBody} body Request body.
     *
     * @return {Promise<ClientResponse>} Http response of One Signal server.
     */
    createSegment(body) {
        const uri = `${this.options.apiRoot}/${constants_1.APPS_PATH}/${this.appId}/${constants_1.APPS_SEGMENTS}`;
        return utils_1.basicAuthRequest(uri, 'POST', this.apiKey, body);
    }
    /**
     * Delete a segment.
     * Reference: https://documentation.onesignal.com/reference#delete-segments.
     *
     * @param {string} segmentId Id of the segment.
     *
     * @return {Promise<ClientResponse>} Http response of One Signal server.
     */
    deleteSegment(segmentId) {
        const uri = `${this.options.apiRoot}/${constants_1.APPS_PATH}/${this.appId}/${constants_1.APPS_SEGMENTS}/${segmentId}`;
        return utils_1.basicAuthRequest(uri, 'DELETE', this.apiKey);
    }
    /**
     * Delete an existing device in one of your OneSignal apps.
     * Reference: https://documentation.onesignal.com/docs/delete-users#section-api-deletion-requirements
     *
     * @param deviceId The device's OneSignal ID.
     *
     * @return {Promise<ClientResponse>} Http response of One Signal server.
     */
    deleteDevice(deviceId) {
        const uri = `${this.options.apiRoot}/${constants_1.DEVICES_PATH}/${deviceId}?${constants_1.APP_ID_QUERY_NAME}=${this.appId}`;
        return utils_1.basicAuthRequest(uri, 'DELETE', this.apiKey);
    }
    /**
     * Sign user external id using client REST key to use on the client-side code
     * Reference: https://documentation.onesignal.com/docs/identity-verification
     *
     * @param {string} id User id to be signed
     *
     * @return {string} Signed user external id
     */
    signUserExternalId(id) {
        return utils_1.signStringWithKey(id.toString(), this.apiKey);
    }
    /**
     * Sign user email using client REST key to use on the client-side code
     * Reference: https://documentation.onesignal.com/docs/identity-verification
     *
     * @param {string} email Email to be signed
     *
     * @return {string} Signed email
     */
    signUserEmail(email) {
        return utils_1.signStringWithKey(email, this.apiKey);
    }
}
exports.Client = Client;
//# sourceMappingURL=client.js.map