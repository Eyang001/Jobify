import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";

// db and authenticateUser
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

//middleware
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

// introduce middleware and create global actions
app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.get("/", (req, res) => {
  // throw new Error('error')
  res.send("welcome!");
});
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
