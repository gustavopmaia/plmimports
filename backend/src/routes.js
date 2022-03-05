import { Router } from 'express'
import mongoose from 'mongoose'

import UserController from './app/controllers/UserController'
import LoginController from './app/controllers/LoginController'
import PerfilController from './app/controllers/PerfilController'

import authMiddleware from './app/middlewares/auth'
import { route } from 'express/lib/application'

const routes = new Router()

routes.get('/users', authMiddleware, UserController.index)
routes.get('/users/:id', authMiddleware, UserController.show)
routes.post('/users', UserController.store)
routes.put('/users', authMiddleware, UserController.update)
routes.delete("/users/:id", authMiddleware, UserController.delete)

routes.get('/perfil', authMiddleware, PerfilController.show)
routes.put('/perfil', authMiddleware, PerfilController.update)

routes.post('/login', LoginController.store)

export default routes
