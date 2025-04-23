const db = require("../db/connect");

class History {
  constructor({ id, fact, fact_img }) {
    this.id = id;
    this.fact = fact;
    this.fact_img = fact_img;
  }

  static async getAll() {
    const response = await db.query("SELECT * FROM history_item;");
    if (response.rows.length === 0) {
      throw new Error("No history items available.");
    }
    return response.rows.map((h) => new History(h));
  }

  static async getOneById(id) {
    const response = await db.query(
      "SELECT * FROM history_item WHERE id = $1;",
      [id]
    );
    if (response.rows.length != 1) {
      throw new Error("Unable to locate history item.");
    }
    return new History(response.rows[0]);
  }

  static async create(data) {
    const { fact, fact_img } = data;

    let response = await db.query(
      "INSERT INTO history_item (fact, fact_img) VALUES ($1, $2) RETURNING *;",
      [fact, fact_img]
    );

    return new History(response.rows[0]);
  }

  async update(data) {
    const { fact, fact_img } = data;

    const response = await db.query(
      "UPDATE history_item SET fact = $1, fact_img = $2 WHERE id = $3 RETURNING *;",
      [fact, fact_img, this.id]
    );

    if (response.rows.length != 1) {
      throw new Error("Unable to update history item.");
    }
    return new History(response.rows[0]);
  }

  async destroy() {
    const response = await db.query(
      "DELETE FROM history_item WHERE id = $1 RETURNING *;",
      [this.id]
    );

    if (response.rows.length != 1) {
      throw new Error("Unable to delete history item.");
    }

    return new History(response.rows[0]);
  }
}

module.exports = History;
