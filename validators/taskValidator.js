import { body, param } from "express-validator";

export const createTaskValidator = [
  body("title").notEmpty().withMessage("Title is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("completed")
    .optional()
    .isBoolean()
    .withMessage("Completed must be a boolean"),
];

export const updateTaskValidator = [
  body("title")
    .optional()
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters long"),
  body("description")
    .optional()
    .isLength({ min: 5 })
    .withMessage("Description must be at least 3 characters long"),
  body("completed")
    .optional()
    .isBoolean()
    .withMessage("Completed must be a boolean"),
];

export const taskIdValidator = [
  param("id").isMongoId().withMessage("Invalid task id"),
];
