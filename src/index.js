const express = require("express");
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) => {
  res.send("Notes API");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/my-notes-app")
  .then((res) => {
    console.log("Mongo connected");
    app.listen(5001, () => {
      console.log("Server is started on no. 5001");
    });
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
