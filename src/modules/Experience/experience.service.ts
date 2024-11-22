
import { Document } from 'mongoose';
import Experience from './experience.model';

// Create a new experience
export const createExperience = async (experienceData: {
  position: string;
  companyName: string;
  tools: string;
  duration: string;
  description: string;
}): Promise<Document> => {
  try {
    const newExperience = new Experience(experienceData);
    return await newExperience.save();
  } catch (error) {
    throw new Error('Error creating experience');
  }
};

// Get all experiences
export const getAllExperiences = async (): Promise<Document[]> => {
  try {
    return await Experience.find();
  } catch (error) {
    throw new Error('Error retrieving experiences');
  }
};

// Get an experience by ID
export const getExperienceById = async (id: string): Promise<Document | null> => {
  try {
    const experience = await Experience.findById(id);
    if (!experience) {
      throw new Error('Experience not found');
    }
    return experience;
  } catch (error) {
    throw new Error('Error retrieving experience');
  }
};

// Update an experience by ID
export const updateExperience = async (
  id: string,
  experienceData: {
    position: string;
    companyName: string;
    tools: string;
    duration: string;
    description: string;
  }
): Promise<Document | null> => {
  try {
    const updatedExperience = await Experience.findByIdAndUpdate(id, experienceData, { new: true });
    if (!updatedExperience) {
      throw new Error('Experience not found');
    }
    return updatedExperience;
  } catch (error) {
    throw new Error('Error updating experience');
  }
};

// Delete an experience by ID
export const deleteExperience = async (id: string): Promise<Document | null> => {
  try {
    const deletedExperience = await Experience.findByIdAndDelete(id);
    if (!deletedExperience) {
      throw new Error('Experience not found');
    }
    return deletedExperience;
  } catch (error) {
    throw new Error('Error deleting experience');
  }
};
