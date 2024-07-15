import React from "react";

export const ReservationsList = ({ title, reservations }) => {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-2">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          {title}
        </h5>
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          View all
        </a>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {reservations.map((reservation) => (
            <li key={reservation.id} className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png"
                    alt="Reservation image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {reservation.name} - {reservation.title}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {reservation.date} at {reservation.time}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {reservation.location}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {/* Additional information */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {title === "Upcoming Reservations" && (
        <div className="mt-4">
          <button
            type="button"
            className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800"
          >
            Book a lesson
          </button>
        </div>
      )}
    </div>
  );
};
