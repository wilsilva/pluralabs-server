/* eslint-disable @typescript-eslint/no-explicit-any */
import Repository from '../../domain/repositories/repository';

export default interface Database<Entity> extends Repository<Entity> {
  findByQuery(query: any, sort?: any): Promise<Array<Entity>>;
}
