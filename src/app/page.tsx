"use client";

import React from "react";
import { Notifications } from "@/app/components/Notifications";
import { MainContentArea } from "@/app/components/MainContentArea";
import {
  mockFamilyMembers,
  mockNotifications,
  mockPastReservations,
  mockReservations,
} from "./consts/mockData";

const Home = () => {
  return (
    <div className="max-w-screen-lg mx-auto min-h-screen flex flex-col">
      <Notifications notifications={mockNotifications} />
      <div className="flex-grow">
        <MainContentArea
          reservations={mockReservations}
          pastReservations={mockPastReservations}
          familyMembers={mockFamilyMembers}
        />
      </div>
    </div>
  );
};

export default Home;
