const error_handler = (err, req, res, next) => {
    if(err.name == 'SequelizeUniqueConstraintError') {

        return res.status(400).json({
        message: err.errors[0].message,
            errors: err.errors.map(item => (
                {
                    field: item.path,
                    message: item.message
                }
            ))
        })
    }

    if(err.message == "wrong_password") {
        return res.status(400).json({
            message: "No Telp / Password anda salah"
        })
    }

    if(err.message == "already_verified" ) {
        return res.status(500).json({
            message: "Sudah diverifikasi"
        })
    }

    console.log(err)

    return res.status(500).json({
        message: "Error tidak diketahui. Hubungi developer@jinom.net"
    })
}


module.exports = error_handler