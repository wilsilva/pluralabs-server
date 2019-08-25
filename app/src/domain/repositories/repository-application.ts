import Repository from './repository';
import Database from '../../infra/database/database';
import Mongo from '../../infra/database/mongodb';

export default abstract class RepositoryApplication<Entity> implements Repository<Entity> {
  protected collectionName: string;

  protected dao: Database<Entity>;

  constructor(collectionName: string) {
    this.collectionName = collectionName;
    this.dao = new Mongo<Entity>(this.collectionName);
  }

  async find(): Promise<Entity[]> {
    const entities = await this.dao.find();
    return entities;
  }

  async findById(identify: string): Promise<Entity|null> {
    const entity = await this.dao.findById(identify);
    return entity;
  }

  async insert(data: Entity): Promise<Entity|null> {
    const entity = await this.dao.insert(data);
    return entity;
  }

  async update(identify: string, data: Entity): Promise<Entity|null> {
    const entity = await this.dao.update(identify, data);
    return entity;
  }

  async delete(identify: string): Promise<boolean> {
    const isDeleted = await this.dao.delete(identify);
    return isDeleted;
  }
}
