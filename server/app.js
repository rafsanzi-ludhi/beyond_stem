// Utilities and configs come first (e.g., logger, dotenv, db).

// Then middlewares.

// Then routers/routes.

// Then error handling or app.listen().

const express = require("express");
const cors = require("cors");
const historyRouter = require("./routers/history");
const userRouter = require("./routers/user");

const logRoutes = require("./middleware/logger");

const logger = require("./logger");

const app = express();

app.use(express.json());
app.use(cors());
app.use(logRoutes);
app.use(logger);

app.get("/", (req, res) => {
  res.json({
    name: "Beyond Stem",
    description: "team-built educational game",
  });
});

app.use("/history", historyRouter);

app.use("/users", userRouter);

module.exports = app;
