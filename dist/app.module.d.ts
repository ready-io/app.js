import { LoggerService, HttpService, Module } from "@ready.io/server";
export declare class AppModule extends Module {
    protected services: {
        logger: LoggerService;
        http: HttpService;
    };
    init(): void;
    startServices(): void;
    initControllers(): void;
}
