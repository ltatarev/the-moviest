const jwt = require('express-jwt');

const secret = "QccG2VSXbmkWbWSW";
const userProperty = "payload";

const authMiddleware = jwt({ secret, userProperty, algorithms: ['sha1', 'RS256', 'HS256'], });

module.exports = { authMiddleware, secret };
