const Itinerary = require("../models/Itinerary");
const ItineraryCard = require("../models/ItineraryCard");
const gemini = require("../helpers/gemini");

class ItineraryController {

  static async generateItinerary(req, res, next) {
    try {
      const userId = "67b6fccba648b4e0d86f44fb"
      const { numOfPeople, destination, arrivalDate, arrivalTime, departureDate, departureTime, language, notes } = req.body;

      const table = await gemini (req.body);

      const itinerary = await Itinerary.create({
        ...table,
        _userId: userId,
      });
      const cardContent = {
        title: `${itinerary.table.length} Days ${destination} Itinerary`,
        description: numOfPeople > 1 ? `A detailed travel itinerary trip to ${destination} for a group of ${numOfPeople} people.` : `detail travel itinerary trip to ${destination} for solo traveler.`,
        image: `https://image.pollinations.ai/prompt/imageof${destination}landmarkfortravelitinerarypicturecard?width=480&height=480&nologo=true`,
      }
      const card = await ItineraryCard.create({
        ...cardContent,
        _userId: userId,
        _itineraryId: itinerary._id,
      });

      return res.status(201).json(itinerary);
    } catch (err) {
      console.log(err);
      
      next(err);
    }
  }

  static async getItineraries(req, res, next) {
    try {
      const itineraries = await ItineraryCard.find();

      return res.status(200).json(itineraries);
    } catch (err) {
      next(err);
    }
  }

  static async getItineraryById(req, res, next) {
    try {
      const { id } = req.params;
      const itinerary = await ItineraryCard.findById(id).populate("_itineraryId");
      console.log(itinerary)

      if (!itinerary) {
        return res.status(404).json({ message: "Itinerary not found" });
      }

      return res.status(200).json(itinerary);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ItineraryController;
