// <<<<<<< HEAD
// =======
const History = require("../models/History"); // Import the History model, not Country

async function index(req, res) {
  try {
    const historyItems = await History.getAll();
    res.status(200).json(historyItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function show(req, res) {
  try {
    const id = req.params.id; // Use id parameter instead of name
    const historyItem = await History.getOneById(id);
    res.status(200).json(historyItem);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

async function create(req, res) {
  try {
    const data = req.body;
    const newHistoryItem = await History.create(data);
    res.status(201).json(newHistoryItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function update(req, res) {
  try {
    const id = req.params.id; // Use id parameter instead of name
    const data = req.body;
    const historyItem = await History.getOneById(id);
    const result = await historyItem.update(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

async function destroy(req, res) {
  try {
    const id = req.params.id; // Use id parameter instead of name
    const historyItem = await History.getOneById(id);
    await historyItem.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

module.exports = { index, show, create, update, destroy };
// >>>>>>> d5c6182b7a7fa1423a7e60fc1efd72ea0739cb2e
