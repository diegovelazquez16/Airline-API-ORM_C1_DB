const { User } = require('../models');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  try {
    const { pass, ...userData } = req.body;
    const hashedPassword = await bcrypt.hash(pass, 10);
    const newUser = await User.create({ ...userData, pass: hashedPassword });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { pass, ...userData } = req.body;
    const hashedPassword = pass ? await bcrypt.hash(pass, 10) : undefined;
    const updatedUser = await User.update(
      { ...userData, ...(hashedPassword && { pass: hashedPassword }) },
      { where: { iduser: req.params.id } }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({ where: { iduser: req.params.id } });
    if (deleted) {
      res.status(204).json({ message: 'User deleted' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { firstName, pass } = req.body;

    if (!firstName || !pass) {
      return res.status(400).json({ message: 'Both fields are required: firstName and pass' });
    }

    const user = await User.findOne({ where: { firstName } });

    if (user && await bcrypt.compare(pass, user.pass)) {
      res.status(200).json({ message: 'Successful login', user });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  loginUser
};
