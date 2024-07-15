import React from "react";

export const ReferralSection = () => {
  const referralLink = "https://booking.snobahn.com/register/?ref=vi3vhresrB";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied to clipboard!");
  };

  return (
    <div className="w-full p-6 mt-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="mb-2">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Refer a Friend
        </h5>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Share this link with your friends to invite them to SNÖBAHN. They will
          earn a discount as soon as they sign up, and after they book their
          first lesson <i>you</i> will earn a discount as well!
        </p>
      </div>
      <div className="relative w-full">
        <input
          type="text"
          id="affiliate_id"
          value={referralLink}
          readOnly
          className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Referral Link"
          onClick={copyToClipboard}
        />
        <button
          type="button"
          className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={copyToClipboard}
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 16h8M8 12h8m-6 8h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-4l-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
