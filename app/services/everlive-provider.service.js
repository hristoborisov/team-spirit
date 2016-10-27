"use strict";
var everlive_sdk_1 = require('everlive-sdk');
var core_1 = require('@angular/core');
var shared_1 = require('../shared');
var EverliveProvider = (function () {
    function EverliveProvider() {
        this._everlive = new everlive_sdk_1.default({
            appId: shared_1.constants.appId,
            authentication: {
                persist: true
            }
        });
    }
    Object.defineProperty(EverliveProvider.prototype, "get", {
        get: function () {
            return this._everlive;
        },
        enumerable: true,
        configurable: true
    });
    EverliveProvider.prototype.getNewQuery = function () {
        return new everlive_sdk_1.default.Query();
    };
    EverliveProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], EverliveProvider);
    return EverliveProvider;
}());
exports.EverliveProvider = EverliveProvider;
//# sourceMappingURL=everlive-provider.service.js.map