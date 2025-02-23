const express = require("express");
const router = express.Router();

const { authentication } = require("../middleware/authentication");
const UserContoller = require("../controllers/userController");

router.get("/users", UserContoller.getUser);

router.post("/register", UserContoller.userRegister);
router.post("/login", UserContoller.userLogin);

router.use(authentication); // middleware for authentication

router.use("/itinerary", require("./itinerary"));   

module.exports = router;
