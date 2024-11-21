// console.log("I am in express project");

const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

// app.get("/api/contacts",(req,res)=>{
//     // res.send("Get all contacts");
//     res.json({Message:"Get all contacts"});
// })

app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"))

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});