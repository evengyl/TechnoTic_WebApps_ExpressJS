const logger = function(req, res, next){
    console.log("ok j'ai logger dans la db")
    next()
}

const testUser = function(req, res, next){
    console.log("Petite vérif user bla bla bla pour tel route")
    next()
}




const express = require("express")
const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.use(logger)


// GET /users
// POST /users
// GET /user/:id
// PATCH /user/:id
// DELETE /user/:id

app.get("/users", (req, res, next) => {
    console.log("bonjour")

    res.end()
})

app.get("/user/:id", (req, res, next) => {
    console.log(req.params.id)
    res.end()
})

app.post("/users", testUser, (req, res, next) => {
    console.log(req.body)
    res.end()

})

app.patch("/user/:id", (req, res, next) => {
    console.log(req.params.id)
    console.log(req.body)
    res.end()

})

app.delete("/user/:id", (req, res, next)=> {
    console.log(req.params.id)
    res.end()
})


app.all("*", (req, res, next) => {
    console.log("attention route non trouvée")
    res.end()
})


app.listen(PORT, console.log(`Serveur sur port ${PORT}`))
