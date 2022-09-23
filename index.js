const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
//use express.json() to get data into json format
app.use(express.json());
//Port
const PORT = process.env.PORT || 5500;

//use cors
app.use(cors());

//Import routes
const TodoItemRoute = require('./routes/todoItems');

app.use('/', TodoItemRoute);

//Connect to mongodb
mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))





//Add Port and connect to server
app.listen(PORT, ()=> console.log("Server connected") );