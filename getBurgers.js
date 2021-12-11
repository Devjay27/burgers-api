const db = require("./db.json");
exports.getBurgers = (req, res) => {
  res.status(200).json(db);
};
