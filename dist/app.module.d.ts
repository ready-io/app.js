import { Module } from "@ready.io/server";
import AppController from './app.controller';
export declare class AppModule extends Module {
    declare(): ((typeof import("@ready.io/server").Service | import("@ready.io/server").ConfigHandler<any>)[] | typeof AppController)[];
    onInit(): void;
}
