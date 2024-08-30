/**
 * Content Controller
 * 
 * This module contains controller functions for analyzing topics and generating content.
 * It handles HTTP requests, performs input validation, and interacts with the content service.
 */

import { Request, Response } from 'express';
import { generateContent as generateContentService, analyzeTopic as analyzeTopicService } from '../../lib/api/contentService';

/**
 * Analyzes a given topic in a specified language.
 * 
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @returns {Promise<void>}
 */
export const analyzeTopic = async (req: Request, res: Response): Promise<void> => {
  try {
    const { topic, language } = req.body;

    // Input validation
    if (!topic || typeof topic !== 'string') {
      res.status(400).json({ success: false, message: 'Invalid or missing topic' });
      return;
    }
    if (!language || typeof language !== 'string') {
      res.status(400).json({ success: false, message: 'Invalid or missing language' });
      return;
    }
    // Validate language
    const supportedLanguages = ['en', 'es', 'fr', 'de', 'it'];
    if (!supportedLanguages.includes(language.toLowerCase())) {
      res.status(400).json({ success: false, message: 'Unsupported language' });
      return;
    }

    // Log the request
    console.log(`Analyzing topic: "${topic}" in language: ${language}`);

    // Call the service function
    const result = await analyzeTopicService(topic, language);

    // Send response
    if (result.success) {
      res.json({ success: true, analysis: result.summary });
    } else {
      res.status(500).json({ success: false, message: result.message });
    }
  } catch (error) {
    console.error('Error in analyzeTopic controller:', error);
    res.status(500).json({ success: false, message: 'An unexpected error occurred' });
  }
};

/**
 * Generates content based on the provided parameters.
 * 
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @returns {Promise<void>}
 */
export const generateContent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { topic, analysis, contentType, tone, wordCount, language } = req.body;

    // Input validation
    if (!topic || typeof topic !== 'string') {
      res.status(400).json({ success: false, message: 'Invalid or missing topic' });
      return;
    }
    if (!analysis || typeof analysis !== 'string') {
      res.status(400).json({ success: false, message: 'Invalid or missing analysis' });
      return;
    }
    if (!contentType || typeof contentType !== 'string') {
      res.status(400).json({ success: false, message: 'Invalid or missing contentType' });
      return;
    }
    if (!tone || typeof tone !== 'string') {
      res.status(400).json({ success: false, message: 'Invalid or missing tone' });
      return;
    }
    if (!wordCount || typeof wordCount !== 'number' || wordCount <= 0) {
      res.status(400).json({ success: false, message: 'Invalid or missing wordCount' });
      return;
    }
    if (!language || typeof language !== 'string') {
      res.status(400).json({ success: false, message: 'Invalid or missing language' });
      return;
    }

    // Call the service function
    const result = await generateContentService(topic, analysis, contentType, tone, wordCount);

    // Handle the result
    if (result.success) {
      res.json({ success: true, content: result.content });
    } else {
      res.status(500).json({ success: false, message: result.message || 'Content generation failed' });
    }
  } catch (error) {
    console.error('Error in generateContent controller:', error);
    res.status(500).json({ success: false, message: 'An unexpected error occurred' });
  }
};
