"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const server_1 = require("@ready.io/server");
const app_controller_1 = __importDefault(require("./app.controller"));
class AppModule extends server_1.Module {
    init() {
        this.services.logger = new server_1.LoggerService({ dir: '/var/ready/logs', level: 'debug' });
        this.services.logger.start();
        const log = this.services.logger.action('AppModule.init');
        this.startServices();
        this.initControllers();
        log.info('⚡');
    }
    startServices() {
        this.services.http = new server_1.HttpService({
            port: 3000,
        }, this.services.logger);
        this.services.http.start();
    }
    initControllers() {
        const appController = new app_controller_1.default(this.services.http, this.services.logger);
        appController.init();
    }
}
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map