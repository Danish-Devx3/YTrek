import express from 'express';
import { addplaylist } from '../controller/course.controller.js';
import userMiddleware from '../middleware/userMiddleware.js';

const Router = express.Router();

Router.post('/add', addplaylist );



export default Router;