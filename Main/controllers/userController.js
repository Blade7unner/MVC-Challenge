const bcrypt = require('bcrypt');
const User = require('../models/User');

const userController = {
  signup: async (req, res) => {
    try {
      const { username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10); 
      const newUser = await User.create({ username, password: hashedPassword });
     
    } catch (error) {
      
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username } });
      if (user) {
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
          
        } else {
          
        }
      } else {
        
      }
    } catch (error) {
      
    }
  },
  logout: async (req, res) => {
   
  },
};

module.exports = userController;
