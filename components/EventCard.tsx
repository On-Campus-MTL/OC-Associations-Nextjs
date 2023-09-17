import Image from "next/image";
import React from "react";
import image from "../public/Image.png";
import Link from "next/link";
import { useState } from "react";

export default function EventCard({
  eventImage,
  eventName,
  eventDetails,
  location,
  price,
  numberOfTickets,
  date,
  timeStart,
  timeEnd,
  tags,
  faculty,
  audiance,
}) {
  const [cardImage, setCardImage] = useState(image);

  // if (eventImage) {
  //   setCardImage(eventImage);
  // }
  return (
    <Link href={""} className="hover:no-underline">
      <div className="h-80 w-72 rounded-lg flex flex-col shadow-lg bg-white">
        {/* Image */}
        <div className="h-40 w-full bg-gray-400 rounded-t-lg">
          <Image
            src={eventImage}
            alt="Event Image"
            className="rounded-t-lg"
          ></Image>
        </div>
        {/* Event details */}
        <div className="w-full h-full p-3 flex flex-col justify-between">
          <div className="flex flex-col justify-start gap-4">
            {/* Title, Date, location */}
            <div>
              <div className="text-black font-inter font-semibold text-base">
                {eventName}
              </div>
              <div className="text-gray-400 font-inter font-semibold text-xs">
                {location} · {date}
              </div>
            </div>
            {/* Brief description */}
            <div className="text-black font-inter text-xs font-normal line-clamp-3">
              {eventDetails}
            </div>
          </div>

          {/* Due date & Tickets */}
          <div className="flex flex-row justify-between items-baseline">
            <p className=" font-inter text-green-500 text-xs">Due in 24 Days</p>
            <p className=" font-inter text-xs underline text-black">
              {numberOfTickets} tickets left
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
