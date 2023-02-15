// authentication.js

const express = require("express");
const router = express.Router();
const authenticationController = require("../controllers/authenticationController");

// Create JWT token
/**

*@desc JWT token creation
*@route /api/auth/login
*@method POST
*/
router.post("/login", authenticationController.login);
// Verify JWT token
/**

*@desc JWT token verification
*@route /api/auth/verify
*@method GET
*/
router.get("/verify", authenticationController.verify);
// End session/logout
/**

*@desc End session/logout
*@route /api/auth/logout
*@method POST
*/
router.post("/logout", authenticationController.logout);

module.exports = router;



// techlabz-3