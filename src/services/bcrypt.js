require("dotenv").config()

const bcrypt = require("bcrypt")


const encrypt = (text = "") => {
    text = text.toString();
    const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUND));
    return bcrypt.hashSync(text, salt)
}

const compare = (password, hashed_passord) => {
    return bcrypt.compareSync(password, hashed_passord);
}

module.exports = {
    encrypt,
    compare
}