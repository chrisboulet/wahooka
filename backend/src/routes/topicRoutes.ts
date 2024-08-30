import express from 'express';
import { analyzeTopic } from '../controllers/topicController';

const router = express.Router();

router.post('/analyze-topic', analyzeTopic);

export default router;
