const express = require("express")
const app = express();

app.get("/home", (req,res) => {
  console.log("Accessed the home page");
})
