import Repository from '../repositories/repository';

export default abstract class Service<Entity> {
    protected repository: Repository<Entity>;

    constructor(repository: Repository<Entity>) {
      this.repository = repository;
    }
}
