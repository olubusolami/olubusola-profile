const express = require("express");
const app = express();
const route = require("./bioRoute")

app.use(route)

port = process.env.PORT || 3000;
app.listen(port, () => console.log("listening carefully"));