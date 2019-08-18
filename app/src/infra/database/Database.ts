import Repository from '../../domain/repositories/Repository';

export default interface Database<Entity> extends Repository<Entity> {
  findByQuery(): Promise<Array<Entity>>;
}
