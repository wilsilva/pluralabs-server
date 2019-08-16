/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import bodyParser from 'body-parser';
import MiddlewareApplication from './middlewares/MiddlewareApplication';
import routes from './routes';

export default class App {
    public express: express.Application

    constructor() {
      this.express = express();
    }

    private middlewares(): void {
      const urlEnconded = bodyParser.urlencoded({ extended: false });
      const jsonParser = bodyParser.json();
      const middlewares: Array<any> = (new MiddlewareApplication()).handle();

      this.express.use(urlEnconded);
      this.express.use(jsonParser);

      middlewares.forEach((middleware) => (
        this.express.use(middleware)
      ));
    }

    private route(): void {
      this.express.use('/', routes);
    }

    run(port = 3000): void {
      this.middlewares();
      this.route();
      this.express.listen(port, () => {
        // eslint-disable-next-line no-console
        console.log('Running application in port', port, '...');
      });
    }
}
