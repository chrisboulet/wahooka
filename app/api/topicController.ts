import { Request, Response } from 'express';
import { analyzeTopic as analyzeTopicService } from '../../lib/api/contentService';

export const analyzeTopic = async (req: Request, res: Response): Promise<void> => {
  try {
    const { topic, timeFrame } = req.body;

    if (!topic || !timeFrame) {
      res.status(400).json({ success: false, message: 'Topic and timeFrame are required' });
      return;
    }

    const result = await analyzeTopicService(topic, timeFrame);

    if (result.success) {
      res.json({ success: true, summary: result.summary });
    } else {
      res.status(500).json({ success: false, message: result.message });
    }
  } catch (error) {
    console.error('Error in analyzeTopic controller:', error);
    res.status(500).json({ success: false, message: 'An unexpected error occurred' });
  }
};
