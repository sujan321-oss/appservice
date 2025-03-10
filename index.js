const express = require("express")

const app = express() 
const PORT = process.env.PORT | 8001

app.get("/",(req,res)=>{
    res.json({"msg":"Hello this message from the server"})
})


app.listen(8001,()=>{
  console.log("LIstening to port 8001") 
})
