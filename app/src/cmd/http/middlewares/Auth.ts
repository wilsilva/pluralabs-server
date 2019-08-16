/* eslint-disable @typescript-eslint/no-explicit-any */
import passport from 'passport';
import {
  ExtractJwt, Strategy, StrategyOptions, VerifiedCallback,
} from 'passport-jwt';
import UserRepository from '../../../domain/repositories/UserRepository';
import Middleware from './Middleware';

export default abstract class Auth implements Middleware {
  private authParams: StrategyOptions;

  constructor() {
    this.authParams = {
      audience: 'konta.fit',
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    };

    this.init();
  }

  protected init(): void {
    passport.use(new Strategy(this.authParams, this.authenticate));
  }

  protected async authenticate(payload: any, done: VerifiedCallback): Promise<void> {
    const repository = new UserRepository();
    const user = await repository.findById(payload.id);

    if (user) {
      done(null, { id: user.id });
    } else {
      done(new Error('User not found'), null);
    }
  }

  public abstract handle(): any;
}
