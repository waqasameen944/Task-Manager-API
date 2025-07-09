import ErrorHandler from "../utils/errorHandler.js";
import Task from "../models/taskModel.js";

// GET /tasks
export const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();

    res.status(200).json({
      success: true,
      tasksCount: tasks.length,
      tasks,
    });
  } catch (error) {
    next(error);
  }
};

// GET /tasks/:id
export const getSingleTask = async (req, res, next) => {
  try {
    const id = req.params.id;

    const task = await Task.findById(id);

    if (task) {
      res.status(200).json({
        success: true,
        task,
      });
    }
  } catch (error) {
    next(error);
  }
};

// POST /tasks
export const createTask = async (req, res, next) => {
  try {
    const { title, description, completed } = req.body;
    const task = await Task.create({
      title,
      description,
      completed,
    });
    task.save();
    res.status(201).json({
      success: true,
      task,
    });
  } catch (error) {
    next(error);
  }
};

// PUT /tasks/:id
export const updateTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { title, description, completed } = req.body;

    const task = await Task.findById(id);

    if (!task) {
      return next(new ErrorHandler("Task not found", 404));
    }

    //udpdate field if avalivale in body
    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (completed !== undefined) task.completed = completed;

    await task.save();
    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      task,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE /tasks/:id
export const deleteTask = async (req, res, next) => {
  try {
    const id = req.params.id;

    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return next(new ErrorHandler("Task not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
