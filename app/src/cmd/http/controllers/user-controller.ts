import { Request, Response } from 'express';
import UserService from '../../../domain/services/user-service';
import Exception from '../exceptions/exception';

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  async index(req: Request, res: Response): Promise<Response> {
    const users = await this.service.getAllUsers();
    return res
      .status(200)
      .json(users);
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.params;
    try {
      const user = await this.service.getUserById(userId);
      return res
        .status(200)
        .json(user)
    } catch (err) {
      const error = { message: err.message, type: '', code: 400 };

      if (err instanceof Exception) {
        error.type = err.typeError;
        error.code = 404;
      }

      return res.status(error.code).json(error);
    }
  }
}
