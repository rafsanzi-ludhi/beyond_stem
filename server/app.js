// Utilities and configs come first (e.g., logger, dotenv, db).

// Then middlewares.

// Then routers/routes.

// Then error handling or app.listen().

const express = require("express");
const cors = require("cors");
const historyRouter = require("./routers/history");

const logger = require("./logger");

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);

// app.get("/history", (req, res) => {
//   res.send("Server is running ✅");
// });

app.use("/history", historyRouter);
module.exports = app;
