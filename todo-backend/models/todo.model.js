const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TodoSchema = new Schema({
  todo: { type: String, required: true, max: 50 },
  isDone: { type: Boolean, required: true },
  id: { type: String, required: true },
});

module.exports = mongoose.model("Todo", TodoSchema);
