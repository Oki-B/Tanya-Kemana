import { ItineraryCardType } from "../types/ItineraryTypes";

export default function ItineraryCard({
  itinerary,
}: {
  itinerary: ItineraryCardType;
}) {
  return (
    <>
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-24 h-full rounded-t-lg md:h-full md:w-36 md:rounded-none md:rounded-s-lg"
          src={itinerary.image}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {itinerary.title.split(",")[0]}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {itinerary.description}
          </p>
        </div>
      </a>
    </>
  );
}
