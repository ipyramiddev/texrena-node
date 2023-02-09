// Imports
const express = require('express');
const accountsRoute = require("./routes/accounts");
const usersRoute = require("./routes/users");
const authenticationRoute = require("./routes/authentication");
const deviceRoute = require("./routes/device");

// Environment
const PORT = process.env.PORT || 5000;

// Init app
const app = express();

// Middleware

// Routing
app.use("/api/accounts", accountsRoute);
app.use("/api/users", usersRoute);
app.use("/api/authentication", authenticationRoute);
app.use("/api/device", deviceRoute);

// Run
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));