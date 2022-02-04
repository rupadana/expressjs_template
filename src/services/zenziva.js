const fetch = require("node-fetch");
require("dotenv").config()
const send = (to, message) => {
    if(process.env.SMS != "true") return true
    message = encodeURI(message)
    const url = `https://reguler.zenziva.net/apps/smsapi.php?userkey=${process.env.SMS_USER}&passkey=${process.env.SMS_KEY}&nohp=${to}&pesan=${message}`;
    fetch(url)
    .then(res => {
        // console.log(res)
    })
    .catch(err => {
        // console.log(err)
    })
}

const sendWa = (to, message) => {
    if(process.env.NODE_ENV != "production") return true;
    if(process.env.SMS != "true") return true;

    const url = "https://gsm.zenziva.net/api/sendWA/"
    fetch(url, {
        method: 'post',
        body: JSON.stringify({
            userkey: process.env.SMS_USER,
            passkey: process.env.SMS_KEY,
            nohp: to,
            pesan: message
        }),
        headers: {
            "Content-Type": 'application/json'
        }
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = {
    send,
    sendWa
}