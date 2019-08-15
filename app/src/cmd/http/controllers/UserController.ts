import { Request, Response } from 'express';
import UserService from '../../../domain/services/UserService';

export default class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const service = new UserService();
    return res
      .status(200)
      .json(await service.getAllUsers());
  }
}
