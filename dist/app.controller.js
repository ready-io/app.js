"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppController {
    constructor(http, logger) {
        this.http = http;
        this.logger = logger;
        this.requestsPerMinute = new this.http.prometheus.Gauge({
            name: 'requests_per_minute',
            help: 'Number of requests per minute',
            labelNames: ['action'],
        });
        this.http.onMetricsCollected(() => {
            this.requestsPerMinute.reset();
        });
    }
    init() {
        this.http.route('/hello', [this, 'hello']);
    }
    hello(res) {
        this.requestsPerMinute.inc({ action: 'hello' });
        res.send('hello');
    }
}
exports.default = AppController;
//# sourceMappingURL=app.controller.js.map