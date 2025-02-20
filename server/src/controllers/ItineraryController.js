const Itinerary = require("../models/Itinerary");
const ItineraryCard = require("../models/ItineraryCard");

class ItineraryController {
//   async generateItinerary(req, res, next) {
//     try {
//       const { name, description, price, duration, cityId } = req.body;
//       const itinerary = await Itinerary.create({
//         name,
//         description,
//         price,
//         duration,
//         cityId,
//       });

//       return res.status(201).json(itinerary);
//     } catch (err) {
//       next(err);
//     }
//   }

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
