const express = require("express")
const app = express();
const PORT = process.env.PORT || 3000
const db = require("./models/dbc")
db.connect()


const {logger} = require("./middlewares/others")

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(logger)

const usersRouter = require("./routers/users.router")
app.use("/users", usersRouter)



app.all("*", (req, res, next) => {
    console.log("attention route non trouvée")
    res.end()
})



app.listen(PORT, console.log(`Serveur sur port ${PORT}`))