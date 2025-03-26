import express from 'express';
import { login, signup } from '../controller/user.controller.js';
import userMiddleware from '../middleware/userMiddleware.js';

const Router = express.Router();

Router.post('/signup', signup);

Router.post('/login', login);

Router.post('/profile', userMiddleware, (req, res) => {
    res.send(req.user);
});
export default Router;
