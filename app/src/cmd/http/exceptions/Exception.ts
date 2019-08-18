export default abstract class Exception extends Error {
  protected _typeError: string|undefined;

  constructor(typeError: string, message: string) {
    super(message);
    this.typeError = typeError;
    Object.setPrototypeOf(this, Exception.prototype);
  }

  set typeError(typeError: string) {
    this.typeError = typeError;
  }

  get typeError(): string {
    return this._typeError || 'Exception';
  }
}
