const request = require("supertest")
const seed = require('../db/seeds/seed')
const data = require('../db/data/test-data/index')
const app = require("../app.js")
const db = require('../db/connection')

beforeEach (() => seed(data))
afterAll(() => db.end())

describe('GET /api/topics', () => {
  test('GET: 200 - responds with array of objects containing all topics', () => {
    return request(app)
      .get('/api/topics')
      .expect(200)
      .then (({body}) => {
        expect(body).toHaveProperty("topics")
        expect(body.topics).toHaveLength(data.topicData.length)
        expect(Array.isArray(body.topics)).toBe(true)
        body.topics.forEach((topic) => {
          expect(typeof topic).toBe("object")
        })
      })
    })
    test('GET: 200 - responds with expected properties with correct data types', () => {
    return request(app)
      .get('/api/topics')
      .expect(200)
      .then (({body}) => {
        body.topics.forEach((topic) => {
          expect(topic).toHaveProperty("slug", expect.any(String))
          expect(topic).toHaveProperty("description", expect.any(String))
        })
      })
    })
  })

  describe('/api/articles', () => {
    test('GET: 200 - responds with array of objects for all articles' , () => {
      return request(app)
        .get('/api/articles')
        .expect(200)
        .then (({body}) => {
          expect(body).toHaveProperty("articles")
          expect(body.articles).toHaveLength(data.articleData.length)
          expect(Array.isArray(body.articles)).toBe(true)
          body.articles.forEach((article) => {
            expect(typeof article).toBe("object")
          })
        })
    })
    test('GET: 200 - responds with expected properties with correct data types', () => {
      return request(app)
        .get('/api/articles')
        .expect(200)
        .then (({body}) => {
          body.articles.forEach((article) => {
            expect(article).toHaveProperty("author", expect.any(String))
            expect(article).toHaveProperty("title", expect.any(String))
            expect(article).toHaveProperty("article_id", expect.any(Number))
            expect(article).toHaveProperty("topic", expect.any(String))
            expect(article).toHaveProperty("created_at", expect.any(String))
            expect(article).toHaveProperty("votes", expect.any(Number))
            expect(article).toHaveProperty("article_img_url", expect.any(String))
            expect(article).toHaveProperty("comment_count", expect.any(Number))

            expect(article).not.toHaveProperty("body")
          })
        })
    })
    test('GET: 200 - responds with articles sorted by created_at date in desc order', () => {
      return request(app)
        .get('/api/articles')
        .expect(200)
        .then (({body}) => {
          for (let i = 0; i < body.articles.length - 1; i++) {
            const current = new Date(body.articles[i].created_at)
            const next = new Date(body.articles[i + 1].created_at)

            expect(current >= next).toBe(true)
          }
        })
    })
  })