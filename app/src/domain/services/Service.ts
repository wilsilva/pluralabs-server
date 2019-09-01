import Repository from '../../infra/database/repositories/repository';

export default abstract class Service<Entity> {
    protected repository: Repository<Entity>;

    constructor(repository: Repository<Entity>) {
      this.repository = repository;
    }
}
