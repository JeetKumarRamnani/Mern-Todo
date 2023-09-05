
//*****************Importing Packages Starts***********************/
//Importing Packages
const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose")

//*****************Importing Packages Endss***********************/


//Mongodb URI To Connect Mongoose With MongoDB
const mongoDBURI = "mongodb+srv://jeetkramnani:1234554321@cluster333.ivhrq6k.mongodb.net/"

//Initializing The Express App
const app = express();

//*****************Middlewares Section Starts****************************/
//Middleware to parse json from res.body
app.use(express.json());
app.use(cors())
//*****************Middlewares Section ENDS****************************/
const PORT = process.env.port || 3000;


//**************Configuiring Database Starts********************/

//Connecting Mongoose With Mongodb

mongoose.connect(mongoDBURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

// Creating Schema Which Documents Will Follow

const todoSchema = new mongoose.Schema({
    todoTitle: String,
    todoDescription: String,
})

//Creating Collection Which Will Use todoSchema

const Todos = new mongoose.model('Todos',todoSchema)

//**************Configuiring Database Ends********************/




//*********CREATING ROUTES**********/

//Home Route 
app.get("/",(req,res)=>{
     res.send("<h1>Welcome To The Todo Api</h1>")
})


//Route To Get All Todos
app.get("/api/gettodos",async (req,res)=>{
   try{
    const allTodos = await Todos.find();
    res.status(200).json(allTodos);
    
   console.log(allTodos)
}catch(error){

    res.send(`Error Hai====>${error}`)

}
})

//*********CREATING ROUTES ENDS**********/


//Starting The Express Server
app.listen(PORT,()=>console.log(`Server Is Running On PORT:${PORT}`))