import express from 'express';
const router = express.Router();

import { addExercise, getUserExerciseLog } from '../controllers/exercises.js';

router.post('/users/:_id/exercises', addExercise);
router.get('/users/:_id/logs', getUserExerciseLog);

export default router;