const request = require('supertest')
const app = require('../../app')
const { resetTestDB } = require('./config')

describe('History API endpoints', () =>{

    beforeEach(async () => {
        await resetTestDB()
      })
    
      beforeAll(() => {
        api = app.listen(4000, () => {
          console.log('Test server running on port 4000')
        })
      })
    
      afterAll((done) => {
        console.log('Closing test server')
        api.close(done)
      })

      xdescribe('GET /', () => {
        it('responds to GET / with a message and a description', async () => {
          const response = await request(api).get('/')
      
          expect(response.statusCode).toBe(200)
          expect(response.body.name).toBe('Beyond Stem')
          expect(response.body.description).toBe('team-built educational game')
        })
      });

      describe('GET /history', () => {
        it('should return all history items with a status code 200', async () => {
          const response = await request(api).get('/history');
          
    
          expect(response.status).toBe(200);
          expect(response.body.data).toBeInstanceOf(Array);
          expect(response.body.data.length).toBeGreaterThan(0);
        });
      });


})