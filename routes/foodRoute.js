const { Router } = require("express")
const  {createFood, getMenu} = require("../controllers/foodController")
const {protect,admin}=require("../middlewares/authMiddleware")
const router =require("express").Router();

router.route("/").post(protect, admin, createFood).get(protect,getMenu);

module.exports=router