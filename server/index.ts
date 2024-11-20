import { db } from "./utils/db";

const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.listen(port, () => {
  if (db == null) console.log("Error when creating db");
  console.log(`Server is running at ${port}`);
});
