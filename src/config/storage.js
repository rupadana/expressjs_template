require("dotenv").config()
module.exports = {
    "development": {
        "secretKey": process.env.AWS_SECRET_DEV,
        "accessKey": process.env.AWS_KEY_DEV,
        "port": parseInt(process.env.AWS_PORT_DEV),
        "endPoint": process.env.AWS_ENDPOINT_DEV,
        "bucket": process.env.AWS_BUCKET_DEV,
        "useSSL": false,
      },
      "test": {
        "secretKey": process.env.AWS_SECRET_TEST,
        "accessKey": process.env.AWS_KEY_TEST,
        "port": parseInt(process.env.AWS_PORT_TEST),
        "endPoint": process.env.AWS_ENDPOINT_TEST,
        "bucket": process.env.AWS_BUCKET_TEST,
        "useSSL": false
      },
      "production": {
        "secretKey": process.env.AWS_SECRET,
        "accessKey": process.env.AWS_KEY,
        "port": parseInt(process.env.AWS_PORT),
        "endPoint": process.env.AWS_ENDPOINT,
        "bucket": process.env.AWS_BUCKET,
        "useSSL": false
      }
}