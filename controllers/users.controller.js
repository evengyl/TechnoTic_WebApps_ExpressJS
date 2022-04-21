const userModel = require("../models/users.model")


exports.getAll = (req, res, next) => {
    userModel.getAll().then((datas) => {
        res.json(datas)
    })
}

exports.getOne = (req, res, next) => {
    userModel.getOne()
    res.json()
}

exports.new = (req, res, next) => {
    userModel.new(req.body.name)
    .then((datas) => {
        res.json(datas)
    })
}

exports.update = (req, res, next) => {
    userModel.update()
    res.json()
}

exports.delete = (req, res, next)=> {
    userModel.delete()
    res.json()
}
