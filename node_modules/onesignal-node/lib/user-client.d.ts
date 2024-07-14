import { ClientOptions, CreateAppBody, UpdateAppBody, ClientResponse, Options } from './types';
export declare class UserClient {
    userAuthKey: string;
    options: Options;
    constructor(userAuthKey: string, options?: ClientOptions);
    /**
     * View the details of all of your current OneSignal apps.
     * Reference: https://documentation.onesignal.com/reference#view-apps-apps
     *
     * @return {Promise<Response>} Http response of One Signal server.
     */
    viewApps(): Promise<ClientResponse>;
    /**
     * View the details of a single OneSignal app.
     * Reference: https://documentation.onesignal.com/reference#view-an-app
     *
     * @param {string} appId Application id.
     *
     * @return {Promise<Response>} Http response of One Signal server.
     */
    viewApp(appId: string): Promise<ClientResponse>;
    /**
     * Creates a new OneSignal app.
     * Reference: https://documentation.onesignal.com/reference#create-an-app
     *
     * @param {CreateAppBody} body Request body.
     * @returns {Promise<Response>} Http response of One Signal server.
     */
    createApp(body: CreateAppBody): Promise<ClientResponse>;
    /**
     * Updates the name or configuration settings of an existing OneSignal app
     * Reference: https://documentation.onesignal.com/reference#update-an-app
     *
     * @param {string} appId Application id.
     * @param {CreateAppBody} body Request body.
     * @returns {Promise<Response>} Http response of One Signal server.
     */
    updateApp(appId: string, body: UpdateAppBody): Promise<ClientResponse>;
}
//# sourceMappingURL=user-client.d.ts.map