const yup =require("yup");
 
function validate(data){
const userSchema =yup.object().shape({
    username: yup.string().required().required("username can't be null").min(3).max(20),
    email: yup.string().email().cast.required("email can't be null").min(3).max(50),
    password: yup.string().required("password can't be null").min(8).max(20),

});
return userSchema.validate(date);

}
module.exports=validate;