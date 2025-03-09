const Itinerary = require("../models/Itinerary");
const ItineraryCard = require("../models/ItineraryCard");
const gemini = require("../helpers/gemini");

class ItineraryController {
  static async generateItinerary(req, res, next) {
    try {
      const userId = req.user.id;
      const {
        numOfPeople,
        destination,
        arrivalDate,
        arrivalTime,
        departureDate,
        departureTime,
        language,
        notes,
      } = req.body;

      if (numOfPeople < 1) throw { name: "numOfPeopleRequired" };
      if (!destination) throw { name: "destinationRequired" };
      if (!arrivalDate) throw { name: "arrivalDateRequired" };
      if (!arrivalTime) throw { name: "arrivalTimeRequired" };
      if (!departureDate) throw { name: "departureDateRequired" };
      if (!departureTime) throw { name: "departureTimeRequired" };
      if (!language) throw { name: "languageRequired" };

      const table = await gemini(req.body);

      const itinerary = await Itinerary.create({
        ...table,
        _userId: userId,
      });
      const cardContent = {
        title: `${itinerary.table.length} Days ${destination} Itinerary`,
        description:
          numOfPeople > 1
            ? `A detailed travel itinerary trip to ${destination} for a group of ${numOfPeople} people.`
            : `detail travel itinerary trip to ${destination} for solo traveler.`,
        image: `https://image.pollinations.ai/prompt/imageof${destination}landmarkfortravelitinerarypicturecard?width=480&height=480&nologo=true`,
      };
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
      // const { userId } = req.user.id;
      console.log(req.user.id);
      const itineraries = await ItineraryCard.find({ _userId: req.user.id });

      return res.status(200).json(itineraries);
    } catch (err) {
      next(err);
    }
  }

  static async getItineraryById(req, res, next) {
    try {
      const { id } = req.params;
      const itinerary = await ItineraryCard.findById(id).populate(
        "_itineraryId"
      );
      console.log(itinerary);

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
