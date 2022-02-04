const VerificationService = require("./verification")
const DateService = require("./date")
const Service = require("./services")
const Bcrypt = require("./bcrypt")
const Zenziva = require("./zenziva")
const Notify = require("./notify");
const { upload } = require("./multer")
const Storage = require("./storage")


module.exports = {
    VerificationService,
    DateService,
    Service,
    Bcrypt,
    Zenziva,
    Notify,
    upload,
    Storage
}