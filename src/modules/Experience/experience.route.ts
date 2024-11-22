import express from 'express';
import * as ExperienceController from './experience.controller'; // Import the controller

const router = express.Router();

// Route for creating a new experience
router.post('/experiences', ExperienceController.createExperience);

// Route for getting all experiences
router.get('/experiences', ExperienceController.getAllExperiences);

// Route for getting an experience by ID
router.get('/experiences/:id', ExperienceController.getExperienceById);

// Route for updating an experience by ID
router.put('/experiences/:id', ExperienceController.updateExperience);

// Route for deleting an experience by ID
router.delete('/experiences/:id', ExperienceController.deleteExperience);

export default router;
