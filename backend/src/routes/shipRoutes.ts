import express, { Request, Response } from "express";
import { shipController } from "../controllers/shipController";

export const shipRouter = express.Router();

shipRouter.post("/evaluate", (req: Request, res: Response) => {
  shipController.evaluate(req, res);
});
