const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db_give-me-the-shit'),
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  console.log('⚽️ connected to database');
(err: any) => {
  if (err) return console.log(err);
};

export = mongoose;
