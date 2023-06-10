import { Inter } from "next/font/google";
import React from "react";
import Layout from "@/components/Layout";
import EventCard from "@/components/EventCard";
import EventCalendar from "@/components/Calendar";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col justify-start w-full h-full gap-4">
        <div className="flex flex-row w-full gap-4 justify-between">
          <div className="w-full flex flex-col gap-4 py-2">
            <h1 className="font-dmSans text-2xl text-gray-700 font-medium">
              Welcome back IEEE Concordia,
            </h1>
            <div className="bg-gray-300 w-full h-full rounded-2xl text-lg text-white">
              Quick stats
            </div>
          </div>
          <div className="">
            <EventCalendar />
          </div>
        </div>

        <div className="h-full flex flex-col justify-start gap-2 font-dmSans text-xl text-gray-500">
          Upcoming Events
          <div className="flex flex-row gap-8">
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </div>

      {/* Rest of the page content */}
    </Layout>
  );
}
