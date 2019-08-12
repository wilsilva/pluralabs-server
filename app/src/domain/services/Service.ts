import IRepository from "../repositories/IRepository";

export default abstract class Service<Entity> {
    
    protected repository: IRepository<Entity>;
    
    constructor(repository: IRepository<Entity>){
        this.repository = repository;
    }
}