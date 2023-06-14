import mongoose from "mongoose";

export const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Department: {
    type: String,
    required: true,
  },
Date: {
    type: Date,
    default: Date.now(),
  },
});
