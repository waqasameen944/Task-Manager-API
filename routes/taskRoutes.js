import express from "express";
import {
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
  getAllTasks,
} from "./../controllers/taskController.js";
import {
  createTaskValidator,
  updateTaskValidator,
  taskIdValidator,
} from "../validators/taskValidator.js";

import { runValidation } from "../middlewares/errorValidations.js";

//router object
const router = express.Router();

// GET /tasks
router.get("/", getAllTasks);
// GET /tasks/:id
router.get("/:id", taskIdValidator, runValidation, getSingleTask);
// POST /tasks
router.post("/createtask", createTaskValidator, runValidation, createTask);
// PUT /tasks/:id
router.put(
  "/updatetask/:id",
  taskIdValidator,
  updateTaskValidator,
  runValidation,
  updateTask
);
// DELETE /tasks/:id
router.delete("/deletetask/:id", taskIdValidator, runValidation, deleteTask);

export default router;
