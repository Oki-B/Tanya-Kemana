if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorHandler");
const PORT = process.env.PORT || 3000;
const UserContoller = require("./controllers/userController");

connectDB(); // connect DB on MongoDB

app.use(cors()); // handle cors error
app.use(express.json()); // handle json request
app.use(express.urlencoded({ extended: true })); // handle form request

app.get("/", (req, res) => { // check running server
  res.send(`Server Tanya Kemana Apps Ready to Use`);
});

app.get("/users", UserContoller.getUser);

app.post("/register", UserContoller.userRegister);
app.post("/login", UserContoller.userLogin);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
