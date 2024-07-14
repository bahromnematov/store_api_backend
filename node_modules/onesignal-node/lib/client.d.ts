import { ClientOptions, Options, ClientResponse, ViewNotificationsQuery, NotificationHistoryBody, CreateNotificationBody, LimitOffsetQuery, AddDeviceBody, EditDeviceBody, NewSessionBody, NewPurchaseBody, IncrementSessionLengthBody, ExportCSVBody, CreateSegmentBody, EditTagsBody } from './types';
export declare class Client {
    appId: string;
    apiKey: string;
    options: Options;
    constructor(appId: string, apiKey: string, options?: ClientOptions);
    /**
     * Sends notifications to your users.
     * Reference https://documentation.onesignal.com/reference#create-notification.
     *
     * @param {CreateNotificationBody} body Request body.
     * @returns {Promise<Response>} Http response of One Signal server.
     */
    createNotification(body: CreateNotificationBody): Promise<ClientResponse>;
    /**
     * Used to stop a scheduled or currently outgoing notification.
     * Reference: https://documentation.onesignal.com/reference#cancel-notification
     *
     * @param {string} notificationId Notification id.
     *
     * @return {Promise<Response>} Http response of One Signal server.
     */
    cancelNotification(notificationId: string): Promise<ClientResponse>;
    /**
     * View the details of a single notification.
     * Reference: https://documentation.onesignal.com/reference#view-notification
     *
     * @param {string} notificationId Notification id.
     *
     * @return {Promise<Response>} Http response of One Signal server.
     */
    viewNotification(notificationId: string): Promise<ClientResponse>;
    /**
     * View the details of multiple notifications.
     * Reference https://documentation.onesignal.com/reference#view-notifications
     *
     * @param {ViewNotificationsQuery} query Query too apply to the request.
     *
     * @return {Promise<Response>} Http response of One Signal server.
     */
    viewNotifications(query?: ViewNotificationsQuery): Promise<ClientResponse>;
    /**
     * View the devices sent a notification.
     * Reference: https://documentation.onesignal.com/reference#view-notifications
     *
     * @param {string} notificationId Notification id.
     * @param {NotificationHistoryBody} body Post body to send.
     *
     * @return {Promise<Response>} Http response of One Signal server.
     */
    notificationHistory(notificationId: string, body: NotificationHistoryBody): Promise<ClientResponse>;
    /**
     * View the details of multiple devices in one of your OneSignal apps.
     * Reference: https://documentation.onesignal.com/reference#view-devices
     *
     * @param {LimitOffsetQuery} query Query too apply to the request.
     *
     * @return {Promise<Response>} Http response of One Signal server.
     */
    viewDevices(query?: LimitOffsetQuery): Promise<ClientResponse>;
    /**
     * View the details of an existing device in one of your OneSignal apps.
     * Reference: https://documentation.onesignal.com/reference#view-device
     *
     * @param identifier Player's One Signal ID or email_auth_hash.
     *
     * @return {Promise<Response>} Http response of One Signal server.
     */
    viewDevice(identifier: string): Promise<ClientResponse>;
    /**
     * Update an existing device in one of your OneSignal apps
     * Reference: https://documentation.onesignal.com/reference#add-a-device
     *
     * @param {AddDeviceBody} body Request body.
     *
     * @return {Promise<ClientResponse>} Http response of One Signal server.
     */
    addDevice(body: AddDeviceBody): Promise<ClientResponse>;
    /**
     * Update an existing device in one of your OneSignal apps.
     * Reference: https://documentation.onesignal.com/reference#edit-device
     *
     * @param deviceId The device's OneSignal ID.
     * @param {EditDeviceBody} body Request body.
     *
     * @return {Promise<ClientResponse>} Http response of One Signal server.
     */
    editDevice(deviceId: string, body: EditDeviceBody): Promise<ClientResponse>;
    /**
     * Update an existing device's tags in one of your OneSignal apps using the External User ID.
     * Reference: https://documentation.onesignal.com/reference/edit-tags-with-external-user-id
     *
     * @param external_user_id The External User ID.
     * @param {EditTagsBody} body Request body.
     *
     * @return {Promise<ClientResponse>} Http response of One Signal server.
     */
    editTagsWithExternalUserIdDevice(externalUserId: string, body: EditTagsBody): Promise<ClientResponse>;
    /**
     * Update a device's session information.
     * Reference: https://documentation.onesignal.com/reference#new-session
     *
     * @param {string} deviceId The device's OneSignal ID.
     * @param {NewSessionBody} body Request body.
     *
     * @return {Promise<ClientResponse>} Http response of One Signal server.
     */
    newSession(deviceId: string, body: NewSessionBody): Promise<ClientResponse>;
    /**
     * Track a new purchase in your app.
     * Reference: https://documentation.onesignal.com/reference#new-session
     *
     * @param {string} deviceId The device's OneSignal ID.
     * @param {NewPurchaseBody} body Request body.
     *
     * @return {Promise<ClientResponse>} Http response of One Signal server.
     */
    newPurchase(deviceId: string, body: NewPurchaseBody): Promise<ClientResponse>;
    /**
     * Update a device's session length upon app resuming.
     * Reference: https://documentation.onesignal.com/reference#increment-session-length
     *
     * @param {string} deviceId The device's OneSignal ID.
     * @param {IncrementSessionLengthBody} body Request body.
     *
     * @return {Promise<ClientResponse>} Http response of One Signal server.
     */
    incrementSessionLength(deviceId: string, body: IncrementSessionLengthBody): Promise<ClientResponse>;
    /**
     * Generate a compressed CSV export of all of your current user data.
     * Reference: https://documentation.onesignal.com/reference#increment-session-length
     *
     * @param {ExportCSVBody} body Request body.
     *
     * @return {Promise<ClientResponse>} Http response of One Signal server.
     */
    exportCSV(body: ExportCSVBody): Promise<ClientResponse>;
    /**
     * Create segments visible and usable in the dashboard and API.
     * Reference: https://documentation.onesignal.com/reference#notification-history
     *
     * @param {CreateSegmentBody} body Request body.
     *
     * @return {Promise<ClientResponse>} Http response of One Signal server.
     */
    createSegment(body: CreateSegmentBody): Promise<ClientResponse>;
    /**
     * Delete a segment.
     * Reference: https://documentation.onesignal.com/reference#delete-segments.
     *
     * @param {string} segmentId Id of the segment.
     *
     * @return {Promise<ClientResponse>} Http response of One Signal server.
     */
    deleteSegment(segmentId: string): Promise<ClientResponse>;
    /**
     * Delete an existing device in one of your OneSignal apps.
     * Reference: https://documentation.onesignal.com/docs/delete-users#section-api-deletion-requirements
     *
     * @param deviceId The device's OneSignal ID.
     *
     * @return {Promise<ClientResponse>} Http response of One Signal server.
     */
    deleteDevice(deviceId: string): Promise<ClientResponse>;
    /**
     * Sign user external id using client REST key to use on the client-side code
     * Reference: https://documentation.onesignal.com/docs/identity-verification
     *
     * @param {string} id User id to be signed
     *
     * @return {string} Signed user external id
     */
    signUserExternalId(id: string | number): string;
    /**
     * Sign user email using client REST key to use on the client-side code
     * Reference: https://documentation.onesignal.com/docs/identity-verification
     *
     * @param {string} email Email to be signed
     *
     * @return {string} Signed email
     */
    signUserEmail(email: string): string;
}
//# sourceMappingURL=client.d.ts.map