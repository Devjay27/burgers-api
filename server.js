require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const getBurgers = require("./getBurgers");

app.use(express.json());

app.get("/get-burgers", getBurgers.getBurgers);

app.listen(PORT, () => console.log(`server running at port ${PORT}`));
