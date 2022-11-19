const express=require("express");
const path=require("path");
const app=express();
const port=8000;
// const staticPath=path.join(__dirname,"../public");
const staticPath=path.join(__dirname,"../template");
 6
 
app.set("view engine","hbs");
app.set("views",staticPath);
//template engine route
 app.get("/",(req,res)=>
 {                                                                                                                                                                                                                                                                                      
    res.render("index.hbs");
 });
// app.use(express.static(staticPath));
app.get("/",(req,res)=>
{
    res.send("hello for the express server");
});
app.listen(port,()=>
{
    console.log(`loistining to the port ${port}`);
})