const multer = require("multer")

const getExtension = (file) => {
    const _file_orig = file.originalname.split(".");
    const extension = _file_orig[_file_orig.length - 1];

    return extension;
}


const multer_storage = multer.diskStorage({
    destination: 'tmp/',
    filename: function (req,file,cb) {
        const date_now = new Date()
        
        cb(null, `${date_now.getTime()}.${getExtension(file)}`);
    }
})

const upload = multer({storage: multer_storage});


module.exports = {
    upload
}
