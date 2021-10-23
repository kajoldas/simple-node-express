const express = require('express');
const cors = require('cors');
const app = express();

//middleware
app.use(cors())
app.use(express.json());


// const port = process.env.PORT || 3000;likte kosto hoile evabe likte pari
const port = 3000;


// app.use (express.json ());
app.get('/',(req,res) =>{
    res.send('Wow.I am Excited learning Node with nodmon.automatic restart !!!');
}
);

//all users dekhar jono
const users = [
    {id:0,name:'Shabana',email:'Shabana@gmail.com',phone:'o170000000000'},
    {id:1,name:'Shabnur',email:'Shabanur@gmail.com',phone:'o180000000000'},
    {id:2,name:'Suchona',email:'Shuchona@gmail.com',phone:'o190000000000'},
    {id:3,name:'Shathi',email:'Shathi@gmail.com',phone:'o150000000000'},
    {id:4,name:'Sahara',email:'Sahara@gmail.com',phone:'o140000000000'},
    {id:5,name:'Sakila',email:'Sakila@gmail.com',phone:'o130000000000'},
]
app.get('/users',(req,res) =>{
    //query create korara jono
    const search = req.query.search;
    if(search){
   const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
   res.send(searchResult);
    }
    else{
        res.send(users);
    }
   
});
//app.method
app.post('/users', (req,res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hittinh the post',req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})
.then(res =>res.json())
.then(data =>{
    console.log(data);
})





//dynamic api
app.get('/users/:id',(req,res) =>{
   const id = req.params.id;
   const user = users[id]
   res.send(user);
})
//spcial data 5
app.get('/fruits',(req,res) =>{
    res.send(['mango','oranges','banana','apple']);
});


app.get('/fruits/mangoes/fazli',(req,res)=>{
    res.send('Yummy Yummy tok marka fazli');
})




app.listen(port, () => {
    console.log('listening to port',port);
  })