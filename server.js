const express =require('express');
const mongoose = require('mongoose');
const dotenv= require('dotenv');
//configuration du uri 
require('dotenv').config()
const app= express();
const usr = require("./routes/loginform");//mongodb
//connexion bd
mongoose.connect(
    process.env.BD_URI,
    {
        useNewUrlParser:true,
        //useFindAndModify:false,
        //useUnifiedTopology:true
    }
).then(()=>console.log("connected "))
 .catch(console.log("erreur"));
app.use('/loginform',usr)
app.use(app.router);
routes.initialize(app);
app.listen(4000,console.log("serveur connecter"));

