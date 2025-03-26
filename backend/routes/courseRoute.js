import express from 'express';
import { addplaylist } from '../controller/course.controller.js';

const Router = express.Router();

Router.post('/add/:playlistId', addplaylist );



export default Router;