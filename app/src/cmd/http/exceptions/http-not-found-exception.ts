import Exception from './Exception';

export default class HttpNotFoundException extends Exception {
  constructor(message: string) {
    super('HttpNotFoundException', message);
  }
}
