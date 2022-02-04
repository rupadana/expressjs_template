
const index = (req, res, next) => {
    console.log(req.user.hasAccess('token.refresh'))
    res.send(req.user)
}



module.exports = {
    index
}