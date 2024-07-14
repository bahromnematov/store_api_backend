"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultClientOptions = exports.APP_ID_FIELD_NAME = exports.APP_ID_QUERY_NAME = exports.DEVICES_CSVEXPORT = exports.DEVICES_ONFOCUS = exports.DEVICES_ONPURCHASE = exports.DEVICES_ONSESSION = exports.DEVICES_PATH = exports.APPS_USERS = exports.APPS_SEGMENTS = exports.APPS_PATH = exports.NOTIFICATIONS_HISTORY = exports.NOTIFICATIONS_PATH = exports.API_ROOT = void 0;
exports.API_ROOT = 'https://onesignal.com/api/v1';
exports.NOTIFICATIONS_PATH = 'notifications';
exports.NOTIFICATIONS_HISTORY = 'history';
exports.APPS_PATH = 'apps';
exports.APPS_SEGMENTS = 'segments';
exports.APPS_USERS = 'users';
exports.DEVICES_PATH = 'players';
exports.DEVICES_ONSESSION = 'on_session';
exports.DEVICES_ONPURCHASE = 'on_purchase';
exports.DEVICES_ONFOCUS = 'on_focus';
exports.DEVICES_CSVEXPORT = 'csv_export';
// Name to be used in query string for url for app_id field.
exports.APP_ID_QUERY_NAME = 'app_id';
// Name to be used in request body for app_id field.
exports.APP_ID_FIELD_NAME = 'app_id';
exports.defaultClientOptions = {
    apiRoot: exports.API_ROOT,
};
//# sourceMappingURL=constants.js.map