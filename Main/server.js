const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/config'); // Sequelize instance
const routes = require('./routes'); // Your routes

const app = express();

const PORT = process.env.PORT || 3000;

// Set up session with Sequelize store
const sess = {
  secret: 'Super secret secret', // This should be an environment variable in production. Remember to replace the 'Super secret secret' with an environment variable or another secure method of storing secrets when you deploy or share your code.


  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Implement routes
app.use(routes);

// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});
