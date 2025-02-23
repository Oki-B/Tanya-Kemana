```js
const numOfPeople = 3;
const destination = "Tokyo";
const arrivalDate = "07/03/2025";
const arrivalTime = "08:00";
const departureDate = "10/03/2025";
const departureTime = "20:00";
const language = "Indonesia"


`You are an expert travel guide. Create a detailed travel itinerary for a group of ${numOfPeople} people planning a trip to ${destination}. The itinerary should cover the period from ${arrivalDate}, at ${arrivalTime} (arrival at ${destination} Airport) to ${departureDate}, at ${departureTime} (departure from ${destination} Airport). 
The itinerary must include comprehensive details, such as:
- Time range for each activity
- Specific activities planned
- Exact locations of each activity
- Estimated distance between locations
- Travel time between locations
- Recommended modes of transportation
- Estimated budget for each activity (in ${destination} Currency, for ${numOfPeople} people)
Generate a list of necessary preparations and helpful suggestions, including travel essentials and location-specific tips. Also, provide the total estimated budget for the entire trip. Assume the group will be staying at a hotel in the city center.

Ensure the itinerary is efficient by suggesting locations that are close to each other, minimizing travel time and preventing a rushed experience. Prioritize the group's enjoyment by incorporating attractive destinations, popular spots, famous landmarks, and trendy places in ${destination}. Limit the itinerary to a maximum of 5 activities per day to maintain a relaxed pace.
Consider activities that require advance booking or those that may take a full day to enjoy. Ensure the group arrives at the airport well in advance of their departure flight.
The itinerary should be in ${language} Language.
The response must be in JSON format, as follows:
{
  "table": [
    {
      "index": "..",
      "date": "Day 1 (Mar 7, 2025)",
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
    {
     "index": "..",
      "date": "Day 2 (Mar 8, 2025)",
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
    {
      "index": "..",
      "date": "Day 3 (Mar 9, 2025)",
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
    }
  ],
  "totalBudget": "...",
  "preparation": [
    "..."
  ],
  "suggestion": [
    "..."
  ]
}
The response should be raw JSON, without markdown  \`\`\`json and \`\`\.`;
```

