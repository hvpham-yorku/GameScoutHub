import cookieParser from "cookie-parser";
import { authRoutes } from "./routes/auth";
import {Database} from "./utils/db";
import cors from "cors"
import { profileRoutes } from "./routes/profiles";
import { gamenewRoutes } from "./routes/gamenews";


const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

//Configure headers
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors(
  
  {credentials:true,
    origin:"http://localhost:5173"
  }
))

//Initialize DB connection
Database.getInstance()

//Application Router
app.use("/auth",authRoutes)
app.use("/profile", profileRoutes);
app.use("/news",gamenewRoutes)


app.listen(port, async () => {
  console.log(`Server is running at ${port}`);
});