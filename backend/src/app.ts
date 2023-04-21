import express, { Application, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { shipRouter } from "./routes/shipRoutes";

const app: Application = express();

const corsOptions = {
  origin: 'http://artemis-frontend-balance-b-1639758126.us-east-1.elb.amazonaws.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-api-key'],
};

app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, x-api-key");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/ship", shipRouter);

export default app;
