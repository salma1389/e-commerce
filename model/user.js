const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const userSchema=new Schema ({
    
        fullName: {
          type: String,
          required: true,
          trim: true,
        },
        email: {
          type: String,
          required: true,
          unique: true,
        },
        password: {
          type: String,
          required: true,
        }

});

module.exports=mongoose.model("usser",userSchema)