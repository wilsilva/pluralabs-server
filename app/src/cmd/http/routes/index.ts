import { Router } from 'express';
import users from './users';
import AuthenticateUser from '../middlewares/AuthenticateUser';

const routes = Router();

routes.use('/users', (new AuthenticateUser()).handle(), users);

export default routes;
