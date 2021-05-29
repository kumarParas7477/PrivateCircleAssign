const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8080;
const axios = require("axios");


var fs = require("fs");
app.use(cors());

app.get("/listItems", (req, res) => {
  res.sendFile("./mock_data.json", { root: __dirname });
});

app.listen(port, () => console.log(`listening on port ${port}!`));