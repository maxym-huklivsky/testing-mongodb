const mongoose = require('mongoose');
const app = require('./app');

const DB_HOST = 'mongodb+srv://Maxym:18102005jw@cluster0.tkrwhws.mongodb.net/test';

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
