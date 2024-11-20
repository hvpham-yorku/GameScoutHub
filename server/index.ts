import cookieParser from "cookie-parser";
import { authRoutes } from "./routes/auth";
import {Database} from "./utils/db";

const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

//Configure headers
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Initialize DB connection
Database.getInstance()

app.use("/auth",authRoutes)

app.listen(port, async () => {
  console.log(`Server is running at ${port}`);
});
