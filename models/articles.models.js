const db = require ("../db/connection")

function fetchAllArticles() {
    return db
      .query 
        (`
        SELECT 
        a.article_id, 
        a.author, 
        a.title, 
        a.topic, 
        a.created_at, 
        a.votes, 
        a.article_img_url,
        COUNT(c.comment_id)::int AS comment_count
        FROM articles a 
        LEFT JOIN comments c
        ON a.article_id = c.article_id
        GROUP BY a.article_id, a.author
        ORDER BY a.created_at DESC;
        `)
      .then (({rows}) => {
        return rows
      })
}

module.exports = { fetchAllArticles }