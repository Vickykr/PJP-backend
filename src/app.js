const express = require('express');
const path = require('path');
const app = express();
const port =process.env.PORT || 8000 ;

require('./db/conn');
const user = require('./models/register');
const staticPath = path.join(__dirname,'../public');
app.use(express.static(staticPath));


//reading json
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req,res) =>{
    
})

app.post('/userLogin', async (req,res)  => {
    try{
        const newUser = new user({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            gender:req.body.gender,
            dob:req.body.dob,
            email:req.body.email,
            password:req.body.pwd1[0],
            phone:req.body.phone,
            yearsofexp:req.body.yearsofexp
        })
        const registered = await newUser.save();
        res.status(201).send("Data saved");
        //res.sendFile(path.join(__dirname,'../public/index.html'));
    }
    catch(error){
        res.status(400).send(error);
    }
})

app.listen(port, () => {
    console.log(`App Running in port ${port}..`);
})