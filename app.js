const express = require('express');
 const app = express();
const port = 8000; 

 app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
 })

 app.get('/accueil',(req,res)=>{
    res.sendFile(__dirname+'/accueil.html');
 })

 app.listen(port,()=>{console.log(`nous ecoutons au port ${port}`)});