import React from "react";
import { ProfileSection } from "@/app/components/ProfileSection";
import { FamilyMembers } from "@/app/components/FamilyMembers";
import { ReservationsList } from "@/app/components/ReservationsList";
import { ReferralSection } from "@/app/components/ReferralSection";

export const MainContentArea = ({
  reservations,
  pastReservations,
  familyMembers,
}) => {
  return (
    <div className="flex flex-col lg:flex-row flex-grow">
      <div className="w-full lg:w-1/3 p-4">
        <ProfileSection />
        <div className="mt-4">
          <FamilyMembers familyMembers={familyMembers} />
        </div>
      </div>
      <div className="flex-grow p-4">
        <ReservationsList
          title="Upcoming Reservations"
          reservations={reservations}
        />
        <ReservationsList
          title="Past Reservations"
          reservations={pastReservations}
        />
        <ReferralSection />
      </div>
    </div>
  );
};
