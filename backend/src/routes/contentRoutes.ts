import express from 'express';
import { generateContent } from '../controllers/contentController';

const router = express.Router();

router.post('/generate-content', generateContent);

export default router;
