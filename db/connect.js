const mongoose=  require("mongoose")
uri= "mongodb://127.0.0.1:27017/MousamApi"
const connectDB=()=>{
      console.log("connectdb")
      return mongoose.connect(uri,{
            useNewUrlparser:true,
            useUnifiedtopology:true
      })
};
module.exports= connectDB;