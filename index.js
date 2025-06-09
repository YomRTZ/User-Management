const express = require('express')
const mongoose = require('mongoose');
const User =require("./models/user.model.js");
const userRoutes=require("./routes/user.route.js")
const app = express()
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use('/api/user',userRoutes);
const PORT = process.env.PORT || 3000;
mongoose.connect('mongodb+srv://rediettedila5:a31mKH1Uh8jv7JYX@seniorproject.91pud.mongodb.net/?retryWrites=true&w=majority&appName=SeniorProject')
  .then(() =>{
    console.log('Connected!');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }).catch(()=>{
    console.log("Connection failed!");
  });



  
