import IRepository from "./IRepository";
import User from "../entities/User";
import Mongo from "../../infra/database/mongodb/Mongo";

export default class UserRepository implements IRepository<User> {
    
    private static dao : IRepository<User> = new Mongo<User>('users');

    async find(): Promise<User[]> {
        return await UserRepository.dao.find();
    }    
    
    async findById(identify: string): Promise<User | null> {
        return await UserRepository.dao.findById(identify);
    }
    
    async insert(data: User): Promise<User | null> {
        return await UserRepository.dao.insert(data);
    }
    
    async update(identify: string, data: User): Promise<User | null> {
        return await UserRepository.dao.update(identify, data);
    }
    
    async delete(identify: string): Promise<Boolean> {
        return await UserRepository.dao.delete(identify);
    }

    
}