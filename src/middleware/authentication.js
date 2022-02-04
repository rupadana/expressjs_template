const jwt = require("jsonwebtoken")
const {User, UserToken, UserRoles, Roles} = require("../db/models")

async function authenticateToken(req, res, next) {
    try {
        
        const authHeader = req.headers['authorization']
        const authType = authHeader && authHeader.split(' ')[0]
        const token = authHeader && authHeader.split(' ')[1]

        
        if (token == null) return res.status(401).json({
            message: "Unauthorize"
        })
        
        if(authType == "JWT") {
            jwt.verify(token, process.env.TOKEN_SECRET, async (err, user) => {
              if (err) return res.status(403).json({
                  message: "Forbidden"
              })

              req.user = await User.findByPk(user.id);
          
              return next()
            })
            return 
        }

        if(authType == "Bearer") {
            const _userToken = await UserToken.findOne({
                where: {
                    token
                },
                include: {
                    model:User,
                    include: {
                        model: UserRoles,
                        include: Roles
                    }
                }
            })

            if(_userToken) {
                req.user = _userToken.User
                return next();
            }
        }

        return res.status(403).json({
            message: "Forbidden"
        })
    } catch (error) {
        next(error)
    }
}


module.exports = {
    authenticateToken
}