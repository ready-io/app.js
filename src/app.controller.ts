import {LoggerService, HttpService} from '@ready.io/server';

export default class AppController
{
  requestsPerMinute: any;


  constructor(public http: HttpService,
              public logger: LoggerService)
  {
    this.requestsPerMinute = new this.http.prometheus.Gauge({
      name: 'requests_per_minute',
      help: 'Number of requests per minute',
      labelNames: ['action'],
    });

    this.http.onMetricsCollected(() =>
    {
      this.requestsPerMinute.reset();
    });
  }


  init()
  {
    this.http.route('/hello', [this, 'hello']);
  }


  hello(res: any)
  {
    this.requestsPerMinute.inc({action: 'hello'});
    res.send('hello');
  }
}

