import { Request, Response } from 'express';
import * as ExperienceService from './experience.service'; // Import the service functions

// Create a new experience
export const createExperience = async (req: Request, res: Response) => {
  try {
    const { position, companyName, tools, duration, description } = req.body;
    
    const newExperience = await ExperienceService.createExperience({
      position,
      companyName,
      tools,
      duration,
      description
    });

    res.status(201).json({
      message: 'Experience created successfully',
      data: newExperience
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      message: 'Error creating experience',
      error: error.message
    });
  }
};

// Get all experiences
export const getAllExperiences = async (req: Request, res: Response) => {
  try {
    const experiences = await ExperienceService.getAllExperiences();
    res.status(200).json({
      message: 'Experiences retrieved successfully',
      data: experiences
    });
  } catch (error:any) {
    console.error(error);
    res.status(500).json({
      message: 'Error retrieving experiences',
      error: error.message
    });
  }
};

// Get an experience by ID
export const getExperienceById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const experience = await ExperienceService.getExperienceById(id);

    res.status(200).json({
      message: 'Experience retrieved successfully',
      data: experience
    });
  } catch (error:any) {
    console.error(error);
    res.status(404).json({
      message: 'Experience not found',
      error: error.message
    });
  }
};

// Update an experience by ID
export const updateExperience = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { position, companyName, tools, duration, description } = req.body;

    const updatedExperience = await ExperienceService.updateExperience(id, {
      position,
      companyName,
      tools,
      duration,
      description
    });

    res.status(200).json({
      message: 'Experience updated successfully',
      data: updatedExperience
    });
  } catch (error:any) {
    console.error(error);
    res.status(500).json({
      message: 'Error updating experience',
      error: error.message
    });
  }
};

// Delete an experience by ID
export const deleteExperience = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedExperience = await ExperienceService.deleteExperience(id);

    res.status(200).json({
      message: 'Experience deleted successfully',
      data: deletedExperience
    });
  } catch (error:any) {
    console.error(error);
    res.status(500).json({
      message: 'Error deleting experience',
      error: error.message
    });
  }
};
