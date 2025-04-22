const { Router } = require("express");
const historyController = require("../controllers/history");

const historyRouter = Router();

historyRouter.get("/", historyController.index);
historyRouter.get("/:id", historyController.show);
historyRouter.post("/", historyController.create);
historyRouter.patch("/:id", historyController.update);
historyRouter.delete("/:id", historyController.destroy);

module.exports = historyRouter;
