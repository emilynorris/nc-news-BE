const { fetchAllArticles , fetchArticlesById , updateArticleVotesById } = require ("../models/articles.models")

function getAllArticles (req,res) {
    fetchAllArticles().then((articles) => {
        res.status(200).send({articles})
    }).catch((err) => {
    next(err)
  })
}

function getArticlesById (req,res,next) {
  const { article_id } = req.params
  fetchArticlesById(article_id).then((article) => {
    res.status(200).send({article})
  })
  .catch((err) => {
    next(err)
  })
}

function patchArticleVotesById (req,res,next) {
    const { article_id } = req.params
    const { inc_votes } = req.body
    updateArticleVotesById(article_id, inc_votes).then((updatedArticle) => {
        res.status(200).send({updatedArticle})
    })
}

module.exports = { getAllArticles , getArticlesById , patchArticleVotesById }