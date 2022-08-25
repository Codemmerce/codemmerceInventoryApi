const request = require("../src/index")
const supertest = require("supertest")
const expect = require("chai").expect

describe("GET /user", ()=>{
    it("Testeando route", done =>{
        supertest(request)
            .get("/user")
            .expect(200)
            .expect(response =>{
                console.log(response.body)
                expect(response.body.status).to.eql(true)
                expect(response.body.message).to.eql("Todo Correcto")
            })
            .end(err =>{
                if (err) return done(err)
                return done()
            })
    })
})