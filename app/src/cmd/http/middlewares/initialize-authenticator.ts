/* eslint-disable @typescript-eslint/no-explicit-any */
import Auth from './auth';

import passport = require('passport');

export default class InitializeAuthenticator extends Auth {
  public handle(): any {
    return passport.initialize();
  }
}
