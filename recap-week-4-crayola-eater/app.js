const path = require("path");
const express = require("express");
const cors = require("cors");

const petsRouter = require("./routes/pets.js");
const pageantsRouter = require("./routes/pageants.js");

const { PORT } = require("./config");

const app = express();

app.use((req, res, next) => {
  // middleware: logger - says type of req received in terminal
  console.log(`${req.method} request received to ${req.url}`);
  next();
});

app.use(express.json()); // grabs the body of each request and does .json() on it to parse it into
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.use("/pets", petsRouter);
app.use("/pageants", pageantsRouter);

app.listen(PORT, () => {
  console.log(`listening on localhost:${PORT}`);
});
