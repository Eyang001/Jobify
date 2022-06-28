import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

// db and authenticateUser
import connectDB from "./db/connect.js";

// routers
import authRouter from './routes/authRoutes.js'

//middleware
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

app.get("/", (req, res) => {
  // throw new Error('error')
  res.send("welcome!");
});

app.use('/api/v1/auth', authRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const port = process.env.PORT;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    //start the app once db connection is successful
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
