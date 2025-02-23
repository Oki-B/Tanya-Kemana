const { GoogleGenerativeAI } = require("@google/generative-ai");

const gemini = async (userInput) => {
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const {
    numOfPeople,
    destination,
    arrivalDate,
    arrivalTime,
    departureDate,
    departureTime,
    language,
    notes,
  } = userInput;

  const prompt = `
You are an expert travel guide. Create a detailed travel itinerary for a group of ${numOfPeople} people planning a trip to ${destination}. The itinerary should cover the period from ${arrivalDate}, at ${arrivalTime} (arrival at ${destination} Airport) to ${departureDate}, at ${departureTime} (departure from ${destination} Airport).
The itinerary must include comprehensive details, such as: Time range for each activity, Specific activities planned, Exact locations of each activity, Estimated distance between locations, Travel time between locations, Recommended modes of transportation and Estimated cost for each activity for ${numOfPeople} people. all the budget and cost calculation must be in ${destination} currency format . Generate a list of necessary preparations and helpful suggestions, including travel essentials and location-specific tips. Also, provide the total estimated budget for the entire trip. Assume the group will be staying at a hotel in the city center.

Ensure the itinerary is efficient by suggesting locations that are close to each other, minimizing travel time and preventing a rushed experience. Prioritize the group's enjoyment by incorporating attractive destinations, popular spots, famous landmarks, and trendy places in ${destination}. Limit the itinerary to a maximum of 5 activities per day to maintain a relaxed pace. Give more time spend in that required full day to explore such as theme park or similiar destination. let the group enjoy full day activity from morning until night.
Consider activities that require advance booking or those that may take a full day to enjoy. don't forget to put travel to airport at the end of the list. Ensure the group arrives at the airport well in advance of their departure flight.
The itinerary should be in ${language} Language.
${notes ? `in addition consider this notes "${notes}"` : ""}
The response must be in format it in JSON without using any code block indicators or triple backticks as follows:
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
"totalBudget": String,
"preparation": String[],
"suggestion": String[]
}. create without \`\`\` json and \`\`\``;

  const result = await model.generateContent(prompt);

  let text = result.response.text();
  console.log(text);
  text = JSON.parse(text.trim());
  return text;
};

module.exports = gemini;
