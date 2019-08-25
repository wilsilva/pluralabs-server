/* eslint-disable @typescript-eslint/no-explicit-any */
import Auth from './auth';

import passport = require('passport');

export default class AuthenticateUser extends Auth {
  public handle(): any {
    return passport.authenticate('jwt', { session: false });
  }
}
