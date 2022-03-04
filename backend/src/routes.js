import { Router } from 'express';
import mongoose from 'mongoose';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);

export default routes;
