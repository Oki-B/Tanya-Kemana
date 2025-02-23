if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require("express");
const app = express();
const router = require('./routes');
const cors = require("cors");
const { errorHandler } = require("./middleware/errorHandler");

const connectDB = require("./config/db");
connectDB(); // connect DB on MongoDB

app.use(cors()); // handle cors error
app.use(express.json()); // handle json request
app.use(express.urlencoded({ extended: true })); // handle form request

app.get("/", (req, res) => { // check running server
  res.send(`Server Tanya Kemana Apps Ready to Use`);
});

app.use(router); // use router
app.use(errorHandler);

module.exports = app

