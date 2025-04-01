import express from 'express';
import { addplaylist, getPlaylists } from '../controller/course.controller.js';
import userMiddleware from '../middleware/userMiddleware.js';

const Router = express.Router();

Router.post('/add', addplaylist );

Router.get('/playlists', userMiddleware, getPlaylists )



export default Router;