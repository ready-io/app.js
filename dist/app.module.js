"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const server_1 = require("@ready.io/server");
const app_controller_1 = __importDefault(require("./app.controller"));
class AppModule extends server_1.Module {
    declare() {
        return [
            server_1.LoggerModule.config((options) => {
                options.level = 'debug';
            }),
            server_1.HttpService.config((options) => {
                options.port = 3000;
            }),
            app_controller_1.default,
        ];
    }
    onInit() {
        this.logger.action('AppModule.init').info(' ⚡');
    }
}
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map