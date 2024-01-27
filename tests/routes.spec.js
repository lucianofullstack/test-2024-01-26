process.env.VERBOSE = 0
process.env.MORGAN  = 0

const 
{ expect } = require('chai'),
session = require('supertest-session'),
app = require('../src/app.js'),
agent = session(app)

describe('⚙️ Routes', () => {

    describe('\n\t Status\n', () => {
       it(' GET /favicon.ico should get 200', () =>
            agent.get('/favicon.ico').expect(200)
       )
       it(' GET /amazon should get 404', () =>
            agent.get('/amazon').expect(404)
       )
       it(' GET /lists should get 200', () =>
            agent.get('/lists').expect(200)
       )
       it(' GET /books/hardcover-fiction should get 200', () =>
            agent.get('/books/hardcover-fiction').expect(200)
       )
       it(' GET 1st book in hardcover fiction to return rank', () =>
            agent.get('/books/hardcover-fiction').then((res) => 
            {
                expect(res._body[0].book).to.have.property('rank')
            })
       )
       it(' GET 2nd book in hardcover-fiction with google_preview', () =>
            agent.get('/books/hardcover-fiction').then((res) => 
            {
                expect(res._body[1].google_preview).contains('https')
            })
       )
    })
})
