const router = require('express').Router()
// const auth = require('../middleware/auth')
// const authAdmin = require('../middleware/authAdmin')
const fs = require('fs')



const cloudinary = require('cloudinary').v2
const config=require("config");
const CLOUDINARY_CLOUD_NAME=config.get("CLOUDINARY_CLOUD_NAME");
const CLOUDINARY_API_KEY=config.get("CLOUDINARY_API_KEY");

const CLOUDINARY_API_SECRET=config.get("CLOUDINARY_API_SECRET");


cloudinary.config({

    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
})
router.post('/upload', (req,res)=> {
    try {
        console.log(req.files)
        if(!req.files || Object.keys(req.files).length === 0)
        return res.status(400).json({msg: 'No files were uploaded'})

        const file = req.files.file
        if(file.size > 1024*1024){
            removeTmp(file.tempFilePath)
             return res.status(400).json({msg: 'size too large'})
        }
        

        if(file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png' ){
            removeTmp(file.tempFilePath)
            return res.status(400).json({msg: 'Format is incorrect'})

        }
        
        cloudinary.v2.uploader.upload(file.tempFilePath, {folder: "test"}, async(err, result) =>{
            if(err) throw err 

            removeTmp(file.tempFilePath)

            res.json({public_id: result.public_id, url: result.secure_url})

        })

    } catch (error) {
       return res.status(500).json({msg: error.message})
    }
})

router.post('/destroy', (req,res)=>{
    try {
        const {public_id}= req.body
        if(!public_id) return res.status(400).json({msg: 'No image selected'})

        cloudinary.v2.uploader.destroy(public_id, async(err, result)=>{
            if(err) throw err

            res.json({msg : 'deleted image'})
        })

    } catch (error) {
        return res.status(500).json({msg: error.message})

    }
})



const removeTmp = (path)=>{
    fs.unlink(path, err =>{
        if(err) throw err
    })
}

module.exports = router