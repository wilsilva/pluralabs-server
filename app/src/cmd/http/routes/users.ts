import { Router } from 'express';
import { userController } from '../controllers';

const routes = Router();

routes.get('/', userController.index);

export default routes;
