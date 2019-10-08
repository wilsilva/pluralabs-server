import Repository from './Repository';
import Database from '../../infra/database/Database';
import Mongo from '../../infra/database/mongodb/Mongo';

export default abstract class RepositoryApplication<Entity> implements Repository<Entity> {
  protected collectionName: string;

  protected dao: Database<Entity>;

  constructor(collectionName: string) {
    this.collectionName = collectionName;
    this.dao = new Mongo<Entity>(this.collectionName);
  }

  abstract async find(): Promise<Entity[]>;

  abstract async findById(identify: string): Promise<Entity|null>;

  abstract async insert(data: Entity): Promise<Entity|null>;

  abstract async update(identify: string, data: Entity): Promise<Entity|null>;

  abstract async delete(identify: string): Promise<boolean>;
}
