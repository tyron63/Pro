// importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./DB/dbMessages.js";

// app config
const app = express();
const port = process.env.PORT || 5000;

// middleware

// DB config
const connection_url =
  "mongodb+srv://admin:qIvwcdVoLpDXXfDR@fp.uk7k5.mongodb.net/FinalProject?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ??? //qIvwcdVoLpDXXfDR

// api routes
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (ree, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
