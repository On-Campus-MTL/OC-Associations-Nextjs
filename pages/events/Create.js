import React from "react";
import Layout from "@/components/Layout";
import EventCard from "@/components/EventCard";
import EventCalendar from "@/components/calendars/Calendar";
import CompactCalendar from "@/components/calendars/CompactCalendar";
import TimePicker from "@/components/TimePicker";
import { useState } from "react";

export default function CreateEvent() {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventDetails, setEventDetails] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [numberOfTickets, setNumberOfTickets] = useState(0);
  const [date, setDate] = useState("");
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");

  const handleInputChange = (event) => {
    setTagInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && tagInput.trim() !== "") {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (index) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };

  return (
    <Layout>
      <div className="w-full h-full flex flex-row">
        <div className="px-16 pt-8 pb-6 w-full h-full">
          <h1 className="font-dmSans text-2xl text-gray-700 font-medium">
            &gt; Create Event
          </h1>
          {/* Form container */}
          <div className="flex flex-row justify-stretch py-5 gap-8">
            {/* Left column */}
            <div className="flex flex-col w-full h-full gap-4">
              {/* Image input box */}
              <div>
                <div className="flex flex-row items-center">
                  <p className="font-inter text-gray-500">
                    <span className="text-black font-semibold">Image</span>{" "}
                    Support .jpg, .png
                  </p>
                </div>

                <div className=" bg-amber-100 flex flex-col items-center justify-center w-full mx-auto mt-2 p-6 border-2 border-dashed border-gray-300 rounded-lg">
                  <p className="text-black text-sm mb-4">
                    <b>Drag &amp; drop</b> file or <b>browse</b> your computer.
                    You can add more than one.
                  </p>

                  <button className="mt-4 px-8 py-4 bg-white text-black font-inter font-semibold rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 shadow-md">
                    Add Image
                  </button>
                </div>
              </div>

              {/* Event Name input box */}
              <div className="flex flex-col">
                <label className="text-gray-700 font-semibold mb-2">
                  Event Name
                </label>
                <input
                  type="text"
                  className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                  value={eventName}
                  onChange={setEventName}
                />
              </div>

              {/* Event Details input box */}
              <div className="flex flex-col">
                <label className="text-gray-700 font-semibold mb-2">
                  Event Details
                </label>
                <textarea
                  className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                  rows={4}
                  value={eventDetails}
                  onChange={setEventDetails}
                />
              </div>

              {/* Location input box */}
              <div className="flex flex-col">
                <label className="text-gray-700 font-semibold mb-2">
                  Location
                </label>
                <input
                  type="text"
                  className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                  value={location}
                  onChange={setLocation}
                />
              </div>

              {/* Price input box */}
              <div className="flex flex-row gap-6">
                <div className="flex flex-col">
                  <label className="text-gray-700 font-semibold mb-2">
                    Price
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg px-4">
                    <span className="text-gray-500">$</span>
                    <input
                      type="number"
                      className="w-32 ml-2 py-2 focus:outline-none"
                      value={price}
                      onChange={setPrice}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-700 font-semibold mb-2">
                    Number of Tickets
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg px-4">
                    <span className="text-gray-500">$</span>
                    <input
                      type="number"
                      className="w-32 ml-2 py-2 focus:outline-none"
                      value={numberOfTickets}
                      onChange={setNumberOfTickets}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col w-full h-full gap-4">
              {/* Calendar Date Picker */}
              <div className="flex flex-col">
                <label className="text-gray-700 font-semibold mb-2">Date</label>
                <div className="w-fit border border-slate-200 rounded-md">
                  <CompactCalendar />
                </div>
              </div>

              {/* Time Picker */}
              <div className="flex flex-col">
                <label className="text-gray-700 font-semibold mb-2">Time</label>
                <div className="flex flex-row gap-4 w-fit">
                  <TimePicker label={"Start"} />
                  <TimePicker label={"End"} />
                </div>
              </div>

              {/* Tag Input Box */}

              <div className="flex flex-col w-full mx-auto">
                <label className="text-gray-700 font-semibold mb-2">Tags</label>
                <div className="flex flex-wrap justify-center border border-gray-300 rounded-lg px-2">
                  {tags.map((tag, index) => (
                    <div
                      key={index}
                      className="bg-primary text-white rounded-full px-2 py-1 text-sm mr-2 my-1 cursor-pointer"
                      onClick={() => handleRemoveTag(index)}
                    >
                      {tag}
                    </div>
                  ))}
                  <input
                    type="text"
                    className="flex-1 ml-2 py-2 focus:outline-none"
                    placeholder="Add tags..."
                    value={tagInput}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                  />
                </div>
              </div>

              {/* Faculty Input Box */}
              <div className="flex flex-row gap-6">
                <div className="flex flex-col w-32">
                  <label className="text-gray-700 font-semibold mb-2">
                    Faculty
                  </label>
                  <select className="bg-white border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500">
                    <option value="">CASA</option>
                    <option value="option1">JMSB</option>
                    <option value="option2">Gina Cody</option>
                    <option value="option3">Other</option>
                  </select>
                </div>
                <div className="flex flex-col w-32">
                  <label className="text-gray-700 font-semibold mb-2">
                    Audience
                  </label>
                  <select className="bg-white border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500">
                    <option value="">Faculty</option>
                    <option value="option1">University</option>
                    <option value="option2">Public</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky top-0 right-0 w-96 h-full bg-gray-700 px-16 flex justify-center items-center">
          <EventCard />
        </div>
      </div>
    </Layout>
  );
}
