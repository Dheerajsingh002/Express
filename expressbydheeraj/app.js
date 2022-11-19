const express=require('express');
const app=express();
const port=8000;
app.get('/',(req,res)=>
{
    res.send("Home page");
})
app.get('/about',(req,res)=>
{
    res.send("About page");
})
app.get('/Contects',(req,res)=>
{
    res.write("<h1>Contects page</h1>");
    res.write("<h2>Contects page</h2>");
    res.send();
})
app.get('/temp',(req,res)=>
{
   res.send([{
      id:1,
      name:"Dheeraj Singh",
   }])
})

app.listen(port,()=>
{
    console.log(`listining ${port}`);
})