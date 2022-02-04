const { validationResult } = require("express-validator")

const checkValidation = async (req,res,next) => {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(422).json({
                message: errors.errors[0].msg,
                errors: errors.array().map(item => ({
                    message: item.msg,
                    field: item.param,
                }))
            });
        }

        return next();
    } catch(err) {
        next(err);
    }
}

const createUserValidator = require("./create_user")
const verificationCodeValidator = require("./verification_code")
const loginValidator = require("./login");
const requestResetPasswordValidator = require("./request_reset_password");
const resetPasswordValidator = require("./reset_password");
const getAllUserValidator = require("./get_all_user")
const updateDataUsahaValidator = require("./update_data_usaha")

module.exports = {
    createUserValidator,
    checkValidation,
    verificationCodeValidator,
    loginValidator,
    resetPasswordValidator,
    requestResetPasswordValidator,
    getAllUserValidator,
    updateDataUsahaValidator,
}