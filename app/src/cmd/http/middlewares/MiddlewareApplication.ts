/* eslint-disable @typescript-eslint/no-explicit-any */
import InitializeAuthenticator from './InitializeAuthenticator';
import Middleware from './Middleware';

export default class MiddlewareApplication implements Middleware {
  private middlewares: Array<Middleware>;

  constructor() {
    this.middlewares = [
      new InitializeAuthenticator(),
    ];
  }


  public handle(): any {
    return this.middlewares
      .map((middleware) => middleware.handle())
  }
}
