 const product= require("../models/product")


 const getAllproducts= async(req,res)=>{
      const {company,name,featured,sort,select}= req.query
      const queryobject={};
      if(company){
            queryobject.company=company;
 console.log(queryobject.company)
      }

      if(name){
      queryobject.name={$regex: name, $options:"i"}
     
      }
      if(featured){
            queryobject.featured=featured;
      }
      
      let apiData =product.find(queryobject)

if(sort){
      let sortfix= sort.replace("," ," ");
      apiData= apiData.sort(sortfix);
}
if(select){
      let selectfix= select.split(",").join(" ");
      apiData= apiData.select(selectfix);
}
let page=Number(req.query.page) ||1;
let limit=Number(req.query.limit)  ||10;
  

let skip=(page-1)*limit



//page=2;
//limit =3
//skip=1*3
apiData=apiData.skip(skip).limit(limit)

      const mydata= await apiData;
      res.status(200).json({mydata,nbHits:mydata.length})
}
const getAllproductsTAesting= async(req,res)=>{
      const mydata= await product.find(req.query).select("name")
      console.log(mydata)
      res.status(200).json({mydata})
};
module.exports={getAllproducts,getAllproductsTAesting};