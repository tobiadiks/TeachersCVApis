var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");

app = express();

const uri = process.env.DB_CONNECT;
//const um = "mongodb://127.0.0.1:27017/local";
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
}); //connecting database;

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDb database connection established successfully");
}); //listening for an opened connection

const teacherRoute = require("./routes/teacher");

app.use("/api", teacherRoute);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
