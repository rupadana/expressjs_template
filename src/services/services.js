const jwt = require("jsonwebtoken")

const generateAccessToken = (text) => {
    return jwt.sign(text, process.env.TOKEN_SECRET, { expiresIn: '1d' });
}

const verification_message = text => `Kode verifikasi kamu adalah : ${text}`

module.exports = {
    generateAccessToken,
    verification_message
}