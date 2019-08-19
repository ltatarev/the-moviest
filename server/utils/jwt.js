const jwt = require('express-jwt');

const secret = "QccG2VSXbmkWbWSW";
const userProperty = "payload";

const authMiddleware = jwt({ secret, userProperty });

module.exports = { authMiddleware, secret };