const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
var userSchema=new mongoose.Schema({
    fullName:{type:String,required:'Name mut be required '},
    email:{type:String,unique:true,required:'Email must be required'},
    password:{type:String, required:'Passord can\'t be emapty',
    minlength:[4,'Password mut be atleast 4 chracter long']},
    saltSecret:String
});






userSchema.pre('save',function(next)
{
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(this.password,salt,(err,hash)=>{
            this.password=hash;
            this.saltSecret=salt;
            next();
        })
    })
})

mongoose.model('User',userSchema)