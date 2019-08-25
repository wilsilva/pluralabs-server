import Exception from './exception';

export default class HttpNotFoundException extends Exception {
  constructor(message: string) {
    super('HttpNotFoundException', message);
  }
}
