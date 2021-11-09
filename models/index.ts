import * as mongoose from 'mongoose';
import config from './../config'

mongoose
  .connect(`${config.DB_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions)
  .then(() => console.log('connected to db'))
  .catch((error: any) => console.log(error));

export = mongoose;