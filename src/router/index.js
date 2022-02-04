var router = require("express")()
var api = require("./api")


router.use("/api", api)
router.get("/",function(req, res) {
    return res.send("OK")
})


module.exports = router