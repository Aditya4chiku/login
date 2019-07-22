const express = require('express');
const app = express();
const router = express.Router();
const UserSchema=require('../model/user.model')
const ctrlUser=require('../controllers/user.controller')



router.post('/register',ctrlUser.register);



module.exports=router;