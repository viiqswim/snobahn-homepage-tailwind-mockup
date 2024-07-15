import { Progress } from "flowbite-react";
import React from "react";

const SkillLevel = ({ skiing, snowboarding, skateboarding }) => {
  return (
    <div className="mt-2 text-sm text-gray-900 truncate dark:text-white">
      <span className="font-medium truncate">Ability Levels</span>
      <li className="flex items-center">
        <span className="text-gray-500 dark:text-gray-400">
          Snowboard: {snowboarding}
        </span>
      </li>
      <li className="flex items-center">
        <span className="text-gray-500 dark:text-gray-400">Skii: {skiing}</span>
      </li>
      <li className="flex items-center">
        <span className="text-gray-500 dark:text-gray-400">
          Skateboarding: {skateboarding}
        </span>
      </li>
    </div>
  );
};

export default SkillLevel;
