const {Router} = require("express")
const router = Router();
const {createUser,loginUser} = require("../controllers/userController");

router
// .route("/api/user")
.post("/register", createUser)
.post("/login", loginUser);


module.exports = router;