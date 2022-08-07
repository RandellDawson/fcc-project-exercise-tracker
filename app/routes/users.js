import express from 'express';
const router = express.Router();

import { addUser } from './../controllers/users.js'

router.post('/users', addUser);

export default router;