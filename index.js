const express = require("express");
const app = express();
const get = require("./api/routers/routers.js");

app.use("/", get);



app.listen(4000, ()=>{
console.log("server listening...")
});