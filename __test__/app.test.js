const request = require('supertest')
const App = require('../app.js');


describe("GET /", () => {
    let app_; // good practice tp avoid change in state
    beforeEach(() =>{ 
        app_ = App;
    });
  
      test("Root route status code", async () => {
        const response = await request(app_).get("/")
      
        expect(response.statusCode).toBe(200)
      })

      test("Root route content", async () => {
        const response = await request(app_).get("/")
       
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
      })

      test("Ping route status code", async () => {
        const response = await request(app_).get("/api/ping")
        
        expect(response.statusCode).toBe(200)

      })

      test("Ping route content", async () => {
        const response = await request(app_).get("/api/ping")
        
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))

      })

    //   test("Ping route content id", async () => {
    //     const response = await request(app_).get("/api/ping")
        
    //     expect(response.body.data.id).toBeDefined()

    //   })

  

  
  })