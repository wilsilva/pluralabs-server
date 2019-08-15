import dotenv from 'dotenv';
import App from './app';

const application = new App();

/**
 * Setting environment variable
 */
dotenv.config();

/**
 * Running application http server
 */
application.run();
