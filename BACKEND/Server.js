/*const express =  require("express");
const bodyParser =  require("body-parser");
const cors =  require("cors");
require("dotenv").config();
const app = express();

const Schedule = require('./models/ScheduleManagement')



const PORT = process.env.PORT || 8110;

app.use(cors());
app.use(bodyParser.json());
const mongoose = require("mongoose");

var MONGODB_URL = 'mongodb+srv://Rathnayaka:Kalharadb2023@schedulemanagementsyste.i3ncgqd.mongodb.net/schedule_db'
mongoose.connect(MONGODB_URL , { useUnifiedTopology: true, useNewUrlParser: true })

var db = mongoose.connection

db.on('connected', () => {
    console.log(`Mongodb Connection Success!`);
})

db.on('error', () => {
    console.log(`Mongodb Connection failed!`);
})

const scheduleRouter = require("./routes/schedules.js");

app.use("/ScheduleManagement", scheduleRouter);

app.listen(PORT,()=>{
    console.log(`server is up running on port number: ${PORT}`)
})

module.exports = mongoose*/



const express =  require("express");
const bodyParser =  require("body-parser");
const cors =  require("cors");
require("dotenv").config();

const Customer = require('./models/ScheduleManagement')

const app = express();



const PORT = process.env.PORT || 8110;

app.use(cors());
app.use(bodyParser.json());
const mongoose = require("mongoose");

var MONGODB_URL = 'mongodb+srv://Rathnayaka:Kalharadb2023@schedulemanagementsyste.i3ncgqd.mongodb.net/schedule_db'
mongoose.connect(MONGODB_URL , { useUnifiedTopology: true, useNewUrlParser: true })

var db = mongoose.connection

db.on('connected', () => {
    console.log(`Mongodb Connection Success!`);
})

db.on('error', () => {
    console.log(`Mongodb Connection failed!`);
})
const scheduleRouter =require("./routes/schedules");
app.use("/api/schedulemanagement",scheduleRouter);

app.get("/", (req, res) => {

    res.send("Server Working!");

});



app.listen(PORT,()=>{
    console.log(`server is up running on port number: ${PORT}`)
})

module.exports = mongoose