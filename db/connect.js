import mongoose from 'mongoose';

const connectDB = (url) => {
  return mongoose.connect(url)
}

export default connectDB
const connectionString =
  "mongodb+srv://emily:<password>@atlascluster.tb962.mongodb.net/?retryWrites=true&w=majority";
