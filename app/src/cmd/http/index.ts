/* eslint-disable import/first */
import dotenv from 'dotenv';

/**
 * Setting environment variable
 */
dotenv.config();


import App from './app';

/**
 * Running application http server
 */
const application = new App();
application.bootstrap();
application.run();
