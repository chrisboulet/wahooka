import { Request, Response } from 'express';

export const analyzeTopic = async (req: Request, res: Response) => {
  // Implémentation à venir
  res.json({ message: "Analyze topic endpoint" });
};

export const getHistory = async (req: Request, res: Response) => {
  try {
    // Ici, vous implémenterez la logique pour récupérer l'historique
    // Pour l'instant, nous allons simplement renvoyer un message
    res.json({ message: "Get history endpoint" });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch history' });
  }
};
