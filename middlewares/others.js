exports.logger = (req, res, next) => {
    console.log("ok j'ai logger dans la db")
    next()
}

exports.testUser = (req, res, next) => {
    console.log("Petite vérif user bla bla bla pour tel route")
    next()
}
