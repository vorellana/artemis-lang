import express, { Application, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { shipRouter } from "./routes/shipRoutes";

const app: Application = express();

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/ship", shipRouter);

export default app;
