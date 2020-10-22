import { LoggerService, HttpService } from '@ready.io/server';
export default class AppController {
    http: HttpService;
    logger: LoggerService;
    requestsPerMinute: any;
    constructor(http: HttpService, logger: LoggerService);
    init(): void;
    hello(res: any): void;
}
