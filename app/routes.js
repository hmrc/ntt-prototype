const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Page routes
require('./views/ntt/trust-details/_routes.js')(router);
require('./views/ntt/trustees/_routes.js')(router);

module.exports = router
