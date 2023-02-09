const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountsController");

// Retrieve account details
/**
* @desc   Get account details
* @route  /api/accounts/:id
* @method GET
*/
router.get('/:id', accountController.getAccount);

// Update account
/**
* @desc   Update account
* @route  /api/accounts/:id
* @method PUT
*/
router.put('/:id', accountController.updateAccount);

// Create new account
/**
* @desc   Create new account
* @route  /api/accounts
* @method POST
*/
router.post('/', accountController.createAccount);

// Delete account
/**
* @desc   Delete account
* @route  /api/accounts/:id
* @method DELETE
*/
router.delete('/:id', accountController.deleteAccount);

module.exports = router;