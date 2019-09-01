/* eslint-disable @typescript-eslint/no-explicit-any */
import Repository from './repositories/repository';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export default interface Database<Entity> extends Repository<Entity> {}
