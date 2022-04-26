const jwt = require("jsonwebtoken");
const { token } = require("morgan");
const user =require("../models/userSchema")
exports.protect = async function (req, res, next){
    let token;
    if (req.handlers.authorizatiom && req.headers.authorizatiom.startsWith("Bearer")){
        try{
            token = req.handlers.authorization.split("")[1];
            const decoded = jwt. verify(token, process.env.JWT_SECRET);
            req.user = await user.findById(decoded.id);
            next();
        
    }catch (err) {
           res.status(401).json({
               message: "invalid token"
           });

        }
        }
       if(!token){
           res.status(401).json({
               message:"You are not authorizes"
           });
       }
    }

    //is admin middleware
    exports.admin = async function (req, res, next){
        if (req.user && req.isAdmin){
            next();
        } else{
            res.status(401).json({
                message: "You are not authorize Admin",
            });
        }
    }
