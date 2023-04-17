import { Request, Response } from "express";
import { shipService } from "../services/shipService";

export const shipController = {
  evaluate: async (req: Request, res: Response) => {
    const expression = req.body;

    try {
      const result = await shipService.evaluate(expression);
      res.json({ result });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
