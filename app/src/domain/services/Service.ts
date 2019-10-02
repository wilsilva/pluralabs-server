import Repository from '../repositories/Repository';

export default abstract class Service<Entity> {
    protected repository: Repository<Entity>;

    constructor(repository: Repository<Entity>) {
      this.repository = repository;
    }
}
