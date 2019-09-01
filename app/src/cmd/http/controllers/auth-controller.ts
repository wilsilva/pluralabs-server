import { Request, Response } from 'express';

export default class AuthController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
  }
}
