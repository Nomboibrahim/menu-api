const {Router} = require("express")
const router = Router();
const {createUser} = require("../controllers/userController");

router.post("/user", createUser);


module.exports=router;