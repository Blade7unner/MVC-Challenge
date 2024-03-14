const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/config'); // Sequelize instance
const routes = require('./routes'); // Your routes

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars as the view engine
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set up session with Sequelize store
const sess = {
  secret: 'Super secret secret', // This should be an environment variable in production
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
