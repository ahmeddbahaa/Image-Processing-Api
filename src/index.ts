import express from "express";

const port = 3000;
const app = express();
app.get("/",(req,res)=>{
    res.send("Hello");
    console.log("enters");
});
app.listen(port,()=>console.log(`Server started at port ${port}`));