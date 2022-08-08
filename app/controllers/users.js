import User from '../models/users.js'

const addUser = async (req, res, next) => {
  const { username } = req.body;

  try {
    let _id = await findUserId(username);

    if (!_id) {
      const newUser = new User({
        username
      });
      const savedUser = await newUser.save();
      _id = savedUser._id;
    }
    res.json({ _id, username });
  }
  catch (err) {
    res.json({ error: 'Unable to create username'});
  };
};

const findUserId = async (username) => {
  const userRecord = await User.findOne({ username }).exec();
  if (userRecord) {
    const { _id } = userRecord;
    return _id;
  }
  return null;
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  }
  catch (err) {
    res.json({ error: 'Unable to retrieve list of all users'});
  };
};

const findUserName = async (_id) => {
  const userRecord = await User.findOne({ _id }).exec();
  if (userRecord) {
    const { username } = userRecord;
    return username;
  }
  return null;
};

export {
  addUser,
  getAllUsers,
  findUserName
};

