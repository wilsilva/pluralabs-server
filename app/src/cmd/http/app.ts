import express from 'express';
import * as middlewares from './middlewares';
import routes from './routes';

export default class App {
    public express: express.Application

    constructor() {
        this.express = express();
        this.middlewares();
        this.route();
    }

    private middlewares(): void {
        Object.values(middlewares).forEach(middleware => (
            this.express.use(middleware)
        ));
    }

    private route(): void {
        this.express.use('/', routes);
    }

    run(port = 3000) {
        this.express.listen(port, function() {
            console.log('Running application in port', port, '...');
        });
    }
}