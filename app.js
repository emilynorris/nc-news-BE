const express = require("express");
const app = express();
const db = require("./db/connection");
const {getAllTopics} = require ("./controllers/topics.controllers");


app.use("/api", express.static('public', {index: "index.html"}))
app.use(express.json())

//topics
app.get("/api/topics", getAllTopics)

module.exports = app