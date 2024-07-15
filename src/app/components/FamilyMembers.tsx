import React from "react";
import { Progress } from "flowbite-react";
import SkillLevel from "./SkillLevel";

export const FamilyMembers = ({ familyMembers }) => {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Family Members
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
          {familyMembers.map((member) => (
            <li key={member.id} className="py-3 sm:py-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300">
                      {member.name.charAt(0)}
                      {member.name.charAt(1)}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {member.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {member.email}
                  </p>
                  <div className="mt-2">
                    <SkillLevel
                      skateboarding={member.snowboarding}
                      skiing={member.skiing}
                      snowboarding={member.snowboarding}
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <button
          type="button"
          className="w-full px-4 py-2 text-sm font-medium text-orange-700 border border-orange-700 rounded-lg hover:bg-orange-50 dark:text-orange-500 dark:border-orange-500 dark:hover:bg-gray-700"
        >
          Add Family Member
        </button>
      </div>
    </div>
  );
};
