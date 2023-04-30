const connectDB= require("./db/connect")
const productjson= require("./product.json")
const product= require("./models/product")
const start=async()=>{
      try{
await connectDB()
await product.deleteMany();
await product.create(productjson)
console.log("scesss")
      }catch(error){
     console.log(error)
      }
}
start();