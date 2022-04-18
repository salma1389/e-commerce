const express=require("express");
const cors=require("cors");
const app=express();
const connectDb=require("./config/connectDb")
connectDb()
const user=require("./routes/user")
const product=require("./routes/product")
const category=require("./routes/category")

app.use(express.json())
app.use(cors())
app.use("/user",user)
app.use("/products",product)
app.use("/categorys",category)

// app.get('/',(req,res)=>{
//     res.json({msg:"welcome to my world"})
// })

const PORT=process.env.PORT||4000;
app.listen(PORT,err=>err?console.log(err):console.log(`server is running on PORT=${PORT}`))