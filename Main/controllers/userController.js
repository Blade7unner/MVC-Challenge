const bcrypt = require('bcrypt');
const User = require('../models/User');

const userController = {
  signup: async (req, res) => {
    try {
      const { username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with a salt round of 10
      const newUser = await User.create({ username, password: hashedPassword });
      // Handle successful user creation
    } catch (error) {
      // Handle error
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username } });
      if (user) {
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
          // User authenticated, handle login
        } else {
          // Passwords do not match, handle login failure
        }
      } else {
        // User not found, handle login failure
      }
    } catch (error) {
      // Handle error
    }
  },
  logout: async (req, res) => {
    // Handle logout logic, such as destroying the session
  },
};

module.exports = userController;
