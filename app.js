const express = require("express")
const app = express()
const db = require("./db/connection")
const {getAllTopics} = require ("./controllers/topics.controllers")
const { getAllArticles } = require ("./controllers/articles.controllers")


app.use("/api", express.static('public', {index: "index.html"}))
app.use(express.json())

//topics
app.get("/api/topics", getAllTopics)

//articles
app.get("/api/articles", getAllArticles)

module.exports = app