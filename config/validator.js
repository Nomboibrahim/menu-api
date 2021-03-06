const yup =require("yup");
 
function validate(data){
const userSchema =yup.object().shape({
    username: yup.string().required('username cannot be null').min(3).max(20),
    email: yup.string().email().required('email cannot be null').min(3).max(50),
    password: yup.string().required('password cannot be null').min(8).max(20),

})
return userSchema.validate(data);

}
module.exports=validate;