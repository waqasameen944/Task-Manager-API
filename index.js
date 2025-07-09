import express from "express";
import dotenv from "dotenv";

import morgan from "morgan";
import taskRouter from "./routes/taskRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import dbConnect from "./config/db.js";

dotenv.config();

//rest object
const app = express();
const PORT = process.env.PORT || 3000;

//db
dbConnect();

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/v1/tasks", taskRouter);

//ErrorHandler
app.use(errorMiddleware);

//server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
