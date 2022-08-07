import express from 'express';
const router = express.Router();

import { addUser, getAllUsers } from './../controllers/users.js'

router.post('/users', addUser);
router.get('/users', getAllUsers);

export default router;