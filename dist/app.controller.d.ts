import { Controller } from '@ready.io/server';
import { LoggerService, HttpService } from '@ready.io/server';
export default class AppController extends Controller {
    http: HttpService;
    logger: LoggerService;
    constructor(http: HttpService, logger: LoggerService);
    index(): string;
}
