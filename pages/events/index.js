import { Inter } from "next/font/google";
import React from "react";
import Layout from "@/pages/layout";
import EventCard from "@/components/EventCard";

export default function Events() {
  return (
    <Layout>
      <div className="flex flex-col justify-start gap-4">
        {/* Title */}
        <h1 className="font-dmSans text-3xl text-black font-medium">Events</h1>

        <div className="flex flex-col gap-2">
          <h3 className="font-inter font-bold text-xl text-gray-600">Drafts</h3>
          <div className="flex flex-row gap-8">
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-inter font-bold text-xl text-gray-600">
            Published
          </h3>
          <div className="flex flex-row gap-8">
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-inter font-bold text-xl text-gray-600">
            Previous
          </h3>
          <div className="flex flex-row gap-8">
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </div>
    </Layout>
  );
}
