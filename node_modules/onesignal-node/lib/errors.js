"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPError = void 0;
class HTTPError extends Error {
    constructor(status, body) {
        super(body);
        this.body = body;
        this.statusCode = status;
    }
}
exports.HTTPError = HTTPError;
//# sourceMappingURL=errors.js.map