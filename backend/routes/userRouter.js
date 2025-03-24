import e from 'express';
import express from 'express';
import { signup } from '../controller/user.controller.js';

const Router = express.Router();

Router.post('/signup', signup);

export default Router;
