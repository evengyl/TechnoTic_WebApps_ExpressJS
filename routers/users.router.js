const express = require("express")
const router = express.Router()
const {testUser} = require("../middlewares/others")
const usersController = require("../controllers/users.controller")

// GET /users
// POST /users
// GET /users/:id
// PATCH /users/:id
// DELETE /users/:id

router.get("/", usersController.getAll)
router.get("/:id", usersController.getOne)
router.post("/", testUser, usersController.new)
router.patch("/:id", usersController.update)
router.delete("/:id", usersController.delete)

module.exports = router