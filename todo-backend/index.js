const express = require("express");
const bodyParser = require("body-parser");

const todo = require("./routes/todo.route.js");
const app = express();

const mongoose = require("mongoose");

let dev_db_url =
  "mongodb+srv://OlegAntonov:Antonov_123@olegclaster.t6nr6.mongodb.net/?retryWrites=true&w=majority";

let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose
  .connect(mongoDB)
  .then(() => console.log("Connected to DataBase"))
  .catch((err) => console.log("At connection catch error ", err));
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection at connect MongoDB"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/todo", todo);

let port = 7000;

app.listen(port, () => {
  console.log("Backend started on", port);
});
