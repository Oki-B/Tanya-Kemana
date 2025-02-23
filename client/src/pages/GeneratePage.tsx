import {
  useState,
  useEffect,
} from "react";
import SideBar from "../components/SideBar";

export default function GeneratePage() {
  // Get today's date and set the minimum date to tomorrow
  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 1); // Set to tomorrow
  const maxDate = new Date(today);
  maxDate.setFullYear(today.getFullYear() + 1); // Set to one year from now

  const [numOfPeople, setNumOfPeople] = useState(3);
  const [destination, setDestination] = useState("Tokyo");
  const [arrivalDate, setArrivalDate] = useState(
    minDate.toISOString().split("T")[0]
  );
  const [arrivalTime, setArrivalTime] = useState("08:00");
  const [departureDate, setDepartureDate] = useState("");
  const [departureTime, setDepartureTime] = useState("20:00");
  const [language, setLanguage] = useState("Indonesia");
  const [maxDepatureDate, setMaxDepatureDate] = useState(
    maxDate.toISOString().split("T")[0]
  );

  useEffect(() => {
    const date = new Date(arrivalDate);
    date.setDate(date.getDate() + 7); // Set to 14 days from arrival date
    setDepartureDate(date.toISOString().split("T")[0]);
    setMaxDepatureDate(date.toISOString().split("T")[0]);
  }, [arrivalDate]);

  return (
    <>
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
          <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Travel Itinerary Generator</h2>
            <p className="mb-4">Powered by GEMINI AI</p>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Number of People
              </label>
              <input
                type="number"
                value={numOfPeople}
                onChange={(e) => setNumOfPeople(parseInt(e.target.value))}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Destination
              </label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Arrival Date
              </label>
              <input
                type="date"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                min={minDate.toISOString().split("T")[0]} // Set min date to tomorrow
                max={maxDate.toISOString().split("T")[0]} // Set max date to one year from now
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Arrival Time
              </label>
              <input
                type="time"
                value={arrivalTime}
                onChange={(e) => setArrivalTime(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Departure Date
              </label>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                min={arrivalDate} // Set min date to tomorrow
                max={maxDepatureDate} // Set max date to one year from now
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Departure Time
              </label>
              <input
                type="time"
                value={departureTime}
                onChange={(e) => setDepartureTime(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Language
              </label>
              <input
                type="text"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <button className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600">
              Generate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
