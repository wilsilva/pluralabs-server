import uniqid from 'uniqid'

export default class UID {
  generate(): string {
    return uniqid('knft');
  }
}
