import express, { Application, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { shipRouter } from "./routes/shipRoutes";

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/ship", shipRouter);

export default app;
