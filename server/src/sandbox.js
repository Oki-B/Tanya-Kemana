const Itinerary = require("./models/Itinerary");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const { hashPass } = require("./helpers/bcrypt");
const User = require("./models/User");
const ItineraryCard = require("./models/ItineraryCard");
const Profile = require("./models/Profile");
require("dotenv").config();
connectDB();

const prompt = `
You are an expert travel guide. Create a detailed travel itinerary for a group of 3 people planning a trip to Singapore. The itinerary should cover the period from 07 March 2025, at 08:00 (arrival at Singapore Airport) to 10 March 2025, at 20:00 (departure from Singapore Airport).
The itinerary must include comprehensive details, such as: Time range for each activity, Specific activities planned, Exact locations of each activity, Estimated distance between locations, Travel time between locations, Recommended modes of transportation and Estimated cost for each activity for 3 people. all the budget and cost calculation must be in Singapore currency format . Generate a list of necessary preparations and helpful suggestions, including travel essentials and location-specific tips. Also, provide the total estimated budget for the entire trip. Assume the group will be staying at a hotel in the city center.

Ensure the itinerary is efficient by suggesting locations that are close to each other, minimizing travel time and preventing a rushed experience. Prioritize the group's enjoyment by incorporating attractive destinations, popular spots, famous landmarks, and trendy places in Singapore. Limit the itinerary to a maximum of 5 activities per day to maintain a relaxed pace. Give more time spend in that required full day to explore such as theme park or similiar destination. let the group enjoy full day activity from morning until night.
Consider activities that require advance booking or those that may take a full day to enjoy. don't forget to put travel to airport at the end of the list. Ensure the group arrives at the airport well in advance of their departure flight.
The itinerary should be in English Language.
The response must be in JSON format, as follows:
{
"table": [
{
"index": "..",
"date": "Day 1 (Date in String)",
"activityTable": [
{
"index": "..",
"time": "...",
"activity": "...",
"destination": "...",
"transportation": "...",
"travelTime": "...",
"cost": "..."
}
]
},
"totalBudget": "...",
"preparation": [
"..."
],
"suggestion": [
"..."
]
}
The response should be raw JSON, without markdown  \`\`\`json and \`\`\`
`;

const user1 = {
  username: "user1",
  email: "user1@tanyakemana.id",
  password: hashPass("user123"),
};

const table1 = {
  table: [
    {
      index: "Day 1",
      date: "07 March 2025",
      activityTable: [
        {
          index: "1",
          time: "08:00 - 10:00",
          activity: "Arrival & Transfer to Hotel",
          destination: "Hotel in City Centre",
          transportation: "Taxi/Grab",
          travelTime: "20-30 mins",
          cost: "40-60 SGD",
        },
        {
          index: "2",
          time: "10:00 - 12:00",
          activity: "Gardens by the Bay - Cloud Forest",
          destination: "Gardens by the Bay",
          transportation: "MRT",
          travelTime: "15 mins",
          cost: "0 SGD (MRT), 20-30 SGD (per person)",
        },
        {
          index: "3",
          time: "12:00 - 14:00",
          activity: "Lunch at Gardens by the Bay",
          destination: "Gardens by the Bay Food Court",
          transportation: "Walking",
          travelTime: "5 mins",
          cost: "25-40 SGD",
        },
        {
          index: "4",
          time: "14:00 - 18:00",
          activity: "Supertree Grove & OCBC Skyway",
          destination: "Gardens by the Bay",
          transportation: "Walking",
          travelTime: "10 mins",
          cost: "0 SGD",
        },
        {
          index: "5",
          time: "18:00 - 20:00",
          activity: "Dinner at a Restaurant near Hotel",
          destination: "Restaurant near Hotel",
          transportation: "Walking",
          travelTime: "5-10 mins",
          cost: "30-50 SGD",
        },
      ],
    },
    {
      index: "Day 2",
      date: "08 March 2025",
      activityTable: [
        {
          index: "1",
          time: "09:00 - 18:00",
          activity: "Universal Studios Singapore",
          destination: "Universal Studios Singapore",
          transportation: "MRT/Taxi",
          travelTime: "45 mins",
          cost: "140 - 180 SGD (per person)",
        },
        {
          index: "2",
          time: "18:00 - 20:00",
          activity: "Dinner near Hotel or Sentosa",
          destination: "Restaurant on Sentosa or near Hotel",
          transportation: "Taxi/MRT",
          travelTime: "20-30 mins",
          cost: "30-50 SGD",
        },
      ],
    },
    {
      index: "Day 3",
      date: "09 March 2025",
      activityTable: [
        {
          index: "1",
          time: "09:00 - 18:00",
          activity: "Singapore Zoo",
          destination: "Singapore Zoo",
          transportation: "MRT",
          travelTime: "30 mins",
          cost: "80-120 SGD (per person)",
        },
        {
          index: "2",
          time: "18:00 - 20:00",
          activity: "Dinner & Relaxation",
          destination: "Restaurant near Hotel",
          transportation: "Walking",
          travelTime: "5-10 mins",
          cost: "25-40 SGD",
        },
      ],
    },
    {
      index: "Day 4",
      date: "10 March 2025",
      activityTable: [
        {
          index: "1",
          time: "09:00 - 11:00",
          activity: "Chinatown Exploration",
          destination: "Chinatown",
          transportation: "MRT/Walking",
          travelTime: "15-20 mins",
          cost: "0-10 SGD",
        },
        {
          index: "2",
          time: "11:00 - 13:00",
          activity: "Lunch at Chinatown",
          destination: "Chinatown Hawker Center",
          transportation: "Walking",
          travelTime: "5-10 mins",
          cost: "20-30 SGD",
        },
        {
          index: "3",
          time: "13:00 - 16:00",
          activity: "Shopping & Souvenirs",
          destination: "Bugis Street, Orchard Road (choose one)",
          transportation: "MRT/Walking",
          travelTime: "15-20 mins",
          cost: "Variable",
        },
        {
          index: "4",
          time: "16:00 - 18:00",
          activity: "Departure Preparation",
          destination: "Hotel",
          transportation: "Walking",
          travelTime: "5-10 mins",
          cost: "0 SGD",
        },

        {
          index: "5",
          time: "18:00 - 20:00",
          activity: "Transfer to Airport",
          destination: "Singapore Changi Airport",
          transportation: "Taxi/Grab",
          travelTime: "30-45 mins",
          cost: "40-70 SGD",
        },
      ],
    },
  ],
  totalBudget: "800-1200 SGD",
  preparation: [
    "Passport & Visas (if required)",
    "Singaporean currency (SGD)",
    "Credit/Debit cards",
    "Travel insurance",
    "Comfortable walking shoes",
    "Sunscreen, hat, and sunglasses",
    "Universal adapter",
    "Pre-booked tickets (where applicable)",
  ],
  suggestion: [
    "Download a Singapore map & MRT app",
    "Purchase a Singapore Tourist Pass if you will use public transport extensively.",
    "Singapore is very clean. Be mindful of littering.",
    "Enjoy the diverse food scene. Explore different hawker centres for delicious and affordable meals.",
    "Negotiate prices at street markets for souvenirs.",
    "Arrive at the airport 2-3 hours before your flight to avoid any last-minute hassles.",
  ],
};

const card1 = {
  title: "4 Days Singapore Itinerary",
  description:
    "A detailed travel itinerary for a group of 3 people planning a trip to Singapore.",
  image:
    "https://image.pollinations.ai/prompt/imageofsingaporelandmarkfortravelitinerarypicturecard?width=500&height=500&nologo=true",
};

async function createItinerary() {
  try {
    const user = await User.create(user1);
    console.log("User created successfully:", user);

    if (user) {
      await Profile.create({
        _userId: user._id,
        name: user.username,
        profileImage: `https://ui-avatars.com/api/?name=${user.username}&background=random&color=fff`,
      });
    }

    const generate = await Itinerary.create({
      ...table1,
      _userId: user._id,
    });

    console.log("Itinerary created successfully:", generate);

    const card = await ItineraryCard.create({
        ...card1,
        _userId: user._id,
        _itineraryId: generate._id,
      });
  
      console.log("Itinerary Card created successfully:", card);
  } catch (error) {
    console.error("Error creating Itinerary:", error);
  } finally {
    mongoose.connection
      .close()
      .then(() => console.log("MongoDB connection closed"))
      .catch((err) => console.error("Error closing MongoDB connection:", err));
  }
}

// createItinerary();


console.log(hashPass("user123")) 
