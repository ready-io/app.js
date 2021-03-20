import {HttpService, Module, LoggerModule} from "@ready.io/server";
import AppController from './app.controller';

export class AppModule extends Module
{
  declare()
  {
    return [
      LoggerModule.config((options) =>
      {
        options.level = 'debug';
      }),
      HttpService.config((options) =>
      {
        options.port = 3000;
      }),
      AppController,
    ];
  }

  onInit()
  {
    this.logger.action('AppModule.init').info(' ⚡');
  }
}

