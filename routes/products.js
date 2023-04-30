const express= require("express")
const router = express.Router();
 const{getAllproducts,getAllproductsTAesting}= require("../controllers/products") 

router.route("/").get(getAllproducts);
router.route("/testing").get(getAllproductsTAesting)
module.exports= router;

