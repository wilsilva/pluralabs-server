/* eslint-disable @typescript-eslint/no-explicit-any */
import Repository from '../../domain/repositories/Repository'

export default interface Database<Entity> extends Repository<Entity> {
  findByQuery(query: any): Promise<Array<Entity>>;
}
