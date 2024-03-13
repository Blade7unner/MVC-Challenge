const sequelize = require('./config/config');
const models = require('./models'); // This will import your models and the associations

sequelize.sync({ force: false }).then(() => {
  // This code runs once sequelize has established a database connection
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});
