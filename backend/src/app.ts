import express, { Application, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { shipRouter } from "./routes/shipRoutes";

const app: Application = express();

// const corsOptions = {
//   origin: '*',
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// };

const corsOptions = {
  origin: 'http://artemis-frontend-balance-b-1639758126.us-east-1.elb.amazonaws.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD'],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/ship", shipRouter);

export default app;
