import { Router } from 'express';
import { userController } from '../controllers';

const routes = Router();

routes.get('/', userController.index.bind(userController));
routes.get('/:id', userController.findById.bind(userController))

export default routes;
