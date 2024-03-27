require('dotenv').config(); 

const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/config');
const routes = require('./routes');
const homeController = require('./controllers/homeController');


const app = express();
const PORT = process.env.PORT || 3000;


const exphbs = require('express-handlebars');
const hbs = exphbs.create({ defaultLayout: 'main' });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));


app.use(routes);


app.get('/', homeController.renderHomePage); 


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});
