const Minio = require("minio")
const _storage = require("../config/storage");

const config = _storage[process.env.NODE_ENV || 'development']

const fs = require('fs').promises;


function Storage() {
    try {
        
        this.client = new Minio.Client(config)
        this.config = config
        this.upload = (directory, file) => {
            return new Promise( (resolve, reject) => {
                try {
                    const __path = `${directory}/${file.filename}`
                   this.client.fPutObject(config.bucket, __path,file.path, (err) => {
                       if(err) reject(err)
                        fs.unlink(file.path)
                       resolve(__path)
                   })
                
                    
                } catch (error) {
                    reject(error)
                }
    
            })
        }
    } catch (error) {
        console.log(error)
    }

    this.url = (path) => {
        if(path == null) return null
        return `https://${this.config.endPoint}/${this.config.bucket}/${path}`
    }


    return this;
}



module.exports = Storage