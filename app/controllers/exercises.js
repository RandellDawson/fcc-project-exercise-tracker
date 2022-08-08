import Exercise from '../models/exercises.js';
import { findUserName } from './users.js';

const correctForTimeZoneOffset = (date) => {
  const hoursOffset = date.getTimezoneOffset()/60;
  date.setHours(date.getHours() + hoursOffset);
  return date;
};

const addExercise = async (req, res) => {
  const { _id } = req.params;
  let {
    description,
    duration,
    date
  } = req.body;
  date = date ? new Date(date) : new Date();
  duration = Number(duration);
  try {
    const username = await findUserName(_id);

    if (username) {
      const newExercise = new Exercise({
        userId: _id,
        description,
        duration,
        date
      });
      await newExercise.save();
      const correctedDate = correctForTimeZoneOffset(date);
      res.json({ _id, username, description, duration, date: correctedDate.toDateString() });
    }
    
  }
  catch (err) {
    console.log(err)
    res.json({ error: 'Unable to add new exercise for user'});
  };
};

const changeExerciseDate = ({
  userId: _id, description, duration, date }
) => {
  const correctedDate = correctForTimeZoneOffset(date);
  return { _id, description, duration, date: correctedDate.toDateString() };
};

const getUserExerciseLog = async (req, res)=> {
  const { _id } = req.params;
  try {
    const log = await Exercise.find({ userId: _id });

    const username = await findUserName(_id);
    res.json({
      _id,
      username,
      log: log.map(changeExerciseDate),
      count: log.length
    });
  }
  catch (err) {
    console.log(err)
    res.json({ error: 'Unable to retrieve user exercise log'});
  };
};

export {
  addExercise,
  getUserExerciseLog
};

