const cloudinary = require('cloudinary').v2

cloudinary.config({

    cloud_name: "go-mu-code",
    api_key: "618129844258316",
    api_secret: "LMQ_3a6dNlRBG2iT7uqKEtn-rZg",
})

module.exports= cloudinary;