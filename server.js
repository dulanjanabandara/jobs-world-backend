import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

// db and authenticate user
import connectDB from "./db/connect.js";

// router
import authRouter from "./routes/authRoutes.js";

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/api/v1/auth", authRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 4000;
const start = async () => {
  try {
    const DB = process.env.DATABASE.replace(
      "<password>",
      process.env.DATABASE_PASSWORD
    );

    await connectDB(DB);

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
