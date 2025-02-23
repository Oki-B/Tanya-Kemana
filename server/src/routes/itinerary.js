const express = require("express");
const router = express.Router();
const ItineraryController = require("../controllers/ItineraryController");

router.get("/", ItineraryController.getItineraries);
router.post ("/generate", ItineraryController.generateItinerary);

router.get("/:id", ItineraryController.getItineraryById);

module.exports = router;