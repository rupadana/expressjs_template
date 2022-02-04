
var express = require("express");
const { index } = require("../controller/api_controller");
const { authenticateToken } = require("../middleware/authentication");
var api = express();
userRoute = express.Router();

api.get("/",authenticateToken, index);

module.exports = api