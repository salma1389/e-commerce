const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const categSchema=new Schema ({
    
        categName: {
          type: String,
          required: true,
          trim: true,
        },
        img: {
          type: String,
          required: true,
        },
        cloudinary_id:{
            type:String
          },

});

module.exports=mongoose.model("category",categSchema)