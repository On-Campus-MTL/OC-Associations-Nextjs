import { Inter } from "next/font/google";
import React from "react";
import Layout from "@/pages/layout";
import EventCard from "@/components/EventCard";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col justify-start w-full h-full gap-4">
        <div className="flex flex-row w-full gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="font-dmSans text-xl text-gray-500 font-medium">
              Welcome back IEEE Concordia,
            </h1>
            <div className="bg-gray-300 w-96 h-80 rounded-2xl text-lg text-white">
              Quick stats
            </div>
          </div>
          <div className="bg-green-400 w-full rounded-2xl"></div>
        </div>

        <div className="h-full flex flex-col justify-start gap-2 font-dmSans text-xl text-gray-500">
          Upcoming Events
          <div className="flex flex-row gap-4">
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
