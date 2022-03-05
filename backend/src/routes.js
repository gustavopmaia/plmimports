import { Router } from 'express'
import mongoose from 'mongoose'

import UserController from './app/controllers/UserController'
import LoginController from './app/controllers/LoginController'

import authMiddleware from './app/middlewares/auth'
import { route } from 'express/lib/application'

const routes = new Router()

routes.get('/users', authMiddleware, UserController.index)
routes.post('/users', UserController.store)
routes.delete("/users/:id", authMiddleware, UserController.delete)

routes.post('/login', LoginController.store)

export default routes
