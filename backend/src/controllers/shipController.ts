import { Request, Response } from "express";
import { shipService } from "../services/shipService";
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.API_KEY || '-';

export const shipController = {
  evaluate: async (req: Request, res: Response) => {
    const expression = req.body;
    const reqApiKey = req.headers['x-api-key'] as string || '';

    if (reqApiKey !== apiKey) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const result = await shipService.evaluate(expression);
      res.json({ result });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }

  },
};
