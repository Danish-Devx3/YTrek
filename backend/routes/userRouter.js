import express from 'express';
import { login, profile, signup } from '../controller/user.controller.js';
import userMiddleware from '../middleware/userMiddleware.js';

const Router = express.Router();

Router.post('/signup', signup);

Router.post('/login', login);

Router.get('/profile', userMiddleware, profile)
export default Router;
