require("dotenv").config();
const  express= require("express")
const app= express();
const connectDB=require("./db/connect")
const port=  process.env.port || 5000
const products_routes =require("./routes/products")
app.get("/",(req, res)=>{
res.send("hello")
})
//middlewae function set router 
 app.use("/api/products",products_routes);
const start= async()=>{
      try{
            await  connectDB();
app.listen(port,()=>{
     console.log( `${port} yes i am connnect`)
})
      }catch(error){
console.log(error)
}
}
start();
 