import { Inter } from "next/font/google";
import React from "react";
import Layout from "@/components/Layout";
import EventCard from "@/components/EventCard";
import tempimage from "@/public/Image.png";

export default function Events() {
  return (
    <Layout>
      <div className="px-16 py-8 flex flex-col justify-start gap-4">
        {/* Title */}
        <h1 className="font-dmSans text-3xl text-black font-medium">Events</h1>

        <div className="flex flex-col gap-2">
          <h3 className="font-inter font-bold text-xl text-gray-600">Drafts</h3>
          <div className="flex flex-row gap-8">
            <EventCard eventImage={tempimage} />
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
