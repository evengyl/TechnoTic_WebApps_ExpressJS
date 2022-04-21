let connection = require("./dbc").get()

exports.getAll = () => {
    return connection
        .then((con) => {
            return con.all("SELECT * FROM users")
        })
}

exports.getOne = () => {
}

exports.new = (name) => {
    return connection.then((con) => {
        return con.run("INSERT INTO users (name) VALUES (?)", name)
    })
}

exports.update = () => {
}

exports.delete = ()=> {
}
