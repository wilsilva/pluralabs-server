export default interface IRepository<Entity> {
    find(): Promise<Array<Entity>>;
    findById(identify: string): Promise<Entity|null>;
    insert(data: Entity): Promise<Entity|null>;
    update(identify: string, data: Entity): Promise<Entity|null>;
    delete(identify: string): Promise<Boolean>;
}