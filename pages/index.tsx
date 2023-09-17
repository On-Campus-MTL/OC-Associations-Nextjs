import { Inter } from "next/font/google";
import React from "react";
import Layout from "../components/Layout";
import EventCard from "../components/EventCard";
import EventCalendar from "../components/calendars/Calendar";
import tempimage from "../public/Image.png";

export default function Home({ data }) {
  return (
    <Layout>
      <div className="px-16 py-8 flex flex-col justify-start w-full h-full gap-4">
        {/* <div className="flex flex-row w-full gap-4 justify-between">
          <div className="w-full flex flex-col gap-4 py-2">
            <h1 className="font-dmSans text-2xl text-gray-700 font-medium">
              Welcome back IEEE Concordia,
            </h1>
            <div className="bg-gray-300 w-full h-full rounded-2xl text-lg text-white">
              Quick stats
            </div>
          </div>
          <div className="">
            <EventCalendar width={500} />
          </div>
        </div> */}

        <div className="h-full flex flex-col justify-start gap-2 font-dmSans text-xl text-gray-500">
          Upcoming Events
          <div className="flex flex-row gap-8">
            <EventCard eventImage={tempimage} />
            <EventCard eventImage={tempimage} />
            <EventCard eventImage={tempimage} />
          </div>
        </div>
      </div>

      {/* Rest of the page content */}
    </Layout>
  );
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://.../data`);
//   const data = await res.json();
 
//   // Pass data to the page via props
//   return { props: { data } }
// }
