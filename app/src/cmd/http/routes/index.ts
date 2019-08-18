import { Router } from 'express';
import users from './users';
import AuthenticateUser from '../middlewares/AuthenticateUser';

const routes = Router();

routes.use('/users', users);

export default routes;
