import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import PostRoutes from "./routes/post.route.js";
import cookieParser from "cookie-parser";
dotenv.config();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connect to DB!!");
  })
  .catch((error) => {
    console.log(error);
  });
const app = express();

app.use(express.json());
app.use(cookieParser())
//routes

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", PostRoutes);

//middlewares

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    sucess: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log("Server running !!");
});
