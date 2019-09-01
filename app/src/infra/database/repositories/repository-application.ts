import Repository from './repository';
import Mongo from '../mongodb';

export default abstract class RepositoryApplication<Entity> implements Repository<Entity> {
  private _collectionName: string;

  protected dao: Mongo<Entity>;

  constructor(collectionName: string) {
    this._collectionName = collectionName;
    this.dao = new Mongo<Entity>(this.collectionName);
  }

  get collectionName(): string {
    return this._collectionName;
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
