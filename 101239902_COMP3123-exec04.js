
let express = require('express')
let app = express()

app.use("/static", express.static('public'))

// GET Request /hello
//http://localhost:8079/hello
app.get("/hello", ( req, res) =>{
    res.send("<h1>Hello ExpressJS</h1>")
})

// GET Request /user
//http://localhost:8079/user?firstname=Jillian&lastname=Trafford
app.get("/user", (req, res) => {
    let firstname = req.query.firstname
    let lastname = req.query.lastname

    response = {
        status: "success",
        firstname,
        lastname

    }
    res.send(response)
})

// POST Request /user
//http://localhost:8079/user/Jillian/Trafford
app.post("/user/:firstname/:lastname", (req, res) => {
    let firstname = req.params.firstname
    let lastname = req.params.lastname

    response = {
        staus: "success",
        firstname,
        lastname
    }
    res.send(response)
})

let server = app.listen(8079, () => {
    let host = server.address().address
    let port = server.address().port
    console.log("Server running at http://%s:%s", host, port)
})