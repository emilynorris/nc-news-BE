const { fetchAllArticles } = require ("../models/articles.models")

function getAllArticles (req,res) {
    fetchAllArticles().then((articles) => {
        res.status(200).send({articles})
    }).catch((err) => {
    next(err)
  })
}

module.exports = { getAllArticles }