import { Schema, model } from 'mongoose';

// Define the Experience schema
const experienceSchema = new Schema({
  position: { type: String, required: true },
  companyName: { type: String, required: true },
  tools: { type: String, required: true },
  duration: { type: String, required: true },
  description: { type: String, required: true },
});

// Create the Experience model
const Experience = model('Experience', experienceSchema);

export default Experience;