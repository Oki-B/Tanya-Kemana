const mongoose = require("mongoose");

const ItinerarySchema = new mongoose.Schema(
  {
    _userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    table: [
      {
        "index": String,
        "date": String,
        "activityTable": [
          {
            "index": String,
            "time": String,
            "activity": String,
            "destination": String,
            "transportation": String,
            "travelTime": String,
            "cost": String,
          }
        ],
      },
    ],
    totalBudget: String,
    preparation: Array,
    suggestion: Array,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Itinerary", ItinerarySchema);