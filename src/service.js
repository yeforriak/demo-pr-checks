const express = require("express");
const app = express();
const ms = require("ms");
const port = 3000;

const SECRET = "secret-token-xxxxxxxxx";

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/toMillis", (req, res) => {
  const period = req.query.period;
  const millis = ms(period);
  res.send(`${period} = ${millis} millis`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
