const express = require("express");
const router = express.Router();
const itineraryRouter = require("./itinerary");
const profileRouter = require("./profile");

const { authentication } = require("../middleware/authentication");
const UserContoller = require("../controllers/userController");

router.get("/users", UserContoller.getUser);

router.post("/register", UserContoller.userRegister);
router.post("/login", UserContoller.userLogin);
router.post("/auth-google", UserContoller.googleLogin);

router.use(authentication); // middleware for authentication

router.use('/profile/', profileRouter);
router.use('/itinerary/', itineraryRouter);   

module.exports = router;
