import {Route, Controller, Inject} from '@ready.io/server';
import {LoggerService, HttpService} from '@ready.io/server';

@Inject()
export default class AppController extends Controller
{
  constructor(public http: HttpService,
              public logger: LoggerService)
  {
    super(http);
  }


  @Route('/')
  index()
  {
    this.logger.action('AppController.index').info('request');

    return 'Base ready.io app!';
  }
}

