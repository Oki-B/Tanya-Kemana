import { useEffect, useState } from "react";
import ItineraryCard from "../components/ItineraryCard";
import SideBar from "../components/SideBar";
import axios from "../config/axiosInstance";
import { ItineraryCardType } from "../types/ItineraryTypes";

export default function HomePage() {

  const [itineraries, setItineraries] = useState<ItineraryCardType[]>([]);

  async function fetchItineraries() {
    try {
      const { data } = await axios ({
        method: 'GET',
        url: '/itinerary'
      })
      setItineraries(data)

    } catch (err) {
      console.log(err)
    }
  }

    useEffect(() => {
      fetchItineraries()
    }, [])

  return (
    <>
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
          <div className="mb-4 grid grid-cols-3 gap-4">
            {itineraries.map((itinerary) => (
              <ItineraryCard key={itinerary._id} itinerary={itinerary} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
