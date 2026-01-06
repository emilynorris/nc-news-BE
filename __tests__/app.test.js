const request = require("supertest");
const seed = require('../db/seeds/seed');
const data = require('../db/data/test-data/index');
const app = require("../app.js");
const db = require('../db/connection');

beforeEach (() => seed(data));
afterAll(() => db.end());

describe('GET /api/topics', () => {
  test('responds with array of objects containing all topics', () => {
    return request(app)
      .get('/api/topics')
      .expect(200)
      .then (({body}) => {
        expect(body.topics).toHaveLength(data.topicData.length)
        expect(Array.isArray(body.topics)).toBe(true)
      })
    })
    test('data types are correct', () => {
    return request(app)
      .get('/api/topics')
      .expect(200)
      .then (({body}) => {
        body.topics.forEach((topic) => {
          expect(typeof topic.slug).toBe("string")
          expect(typeof topic.description).toBe("string")
        })
      })
    })
  })