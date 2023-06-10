import Image from "next/image";
import React from "react";
import image from "../public/image.png";
import Link from "next/link";

export default function EventCard() {
  return (
    <Link href={""}>
      <div className="h-80 w-72 rounded-lg flex flex-col shadow-lg">
        {/* Image */}
        <div className="h-40 w-full bg-gray-400 rounded-t-lg">
          <Image src={image} alt="Event Image" className="rounded-t-lg"></Image>
        </div>
        {/* Event details */}
        <div className="w-full h-full p-3 flex flex-col justify-between">
          <div className="flex flex-col justify-start gap-4">
            {/* Title, Date, location */}
            <div>
              <div className="text-black font-inter font-semibold text-base">
                The Garden City
              </div>
              <div className="text-gray-400 font-inter font-semibold text-xs">
                The Silicon Valley of India · 2023-05-21{" "}
              </div>
            </div>
            {/* Brief description */}
            <div className="text-black font-inter text-xs font-normal line-clamp-3">
              Bengaluru (also called Bangalore) is the center of India&apos;s
              high-tech industry. The city is also known for its parks and
              nightlife. How come this keeps going?
            </div>
          </div>

          {/* Due date & Tickets */}
          <div className="flex flex-row justify-between">
            <p className=" font-inter text-green-500 text-xs">Due in 24 Days</p>
            <p className=" font-inter text-xs underline">50 Tickets left</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
