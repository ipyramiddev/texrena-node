// users.js

const express = require("express");
const router = express.Router();
const usersController = require("../controllers/userController");

// Retrieve user details
/**
*@desc Get user details
*@route /api/users/:id
*@method GET
*/
router.get("/:id", usersController.getUser);
// Update user
/**
*@desc Update user
*@route /api/users/:id
*@method PUT
*/
router.put("/:id", usersController.updateUser);

// Create new user
/**
*@desc Create new user
*@route /api/users
*@method POST
*/
router.post("/", usersController.createUser);

// Delete user
/**
*@desc Delete user
*@route /api/users/:id
*@method DELETE
*/
router.delete("/:id", usersController.deleteUser);

module.exports = router;