import express from "express";
import DB from "./config/db.js";
import { PORT } from "./common/utils/env.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";

dotenv.config();
const app = express();

const connect = new DB();
connect.connectionDB();
const port = PORT;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", authRoutes);

app.listen(port, () =>
  console.log(`server is running at http://localhost:${PORT}`)
);
