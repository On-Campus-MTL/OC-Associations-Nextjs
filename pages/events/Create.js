import React, { useRef } from "react";
import Layout from "@/components/Layout";
import EventCard from "@/components/EventCard";
import tempimage from "@/public/Image.png";

import { useState } from "react";
import {
  DateCalendar,
  LocalizationProvider,
  TimeField,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MdAttachMoney, MdPeople } from "react-icons/md";
import { Button } from "@mui/material";

export default function CreateEvent() {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [eventName, setEventName] = useState("Event Title");
  const [eventDetails, setEventDetails] = useState(
    "This is used for the event details. Shows 3 lines."
  );
  const [location, setLocation] = useState("Location");
  const [price, setPrice] = useState(0);
  const [numberOfTickets, setNumberOfTickets] = useState(0);
  const [date, setDate] = useState("Date");
  const [timeStart, setTimeStart] = useState("0");
  const [timeEnd, setTimeEnd] = useState("");
  const [faculty, setFaculty] = useState("");
  const [Audiance, setAudiance] = useState("");

  // const [selectedImage, setSelectedImage] = useState(null);

  // const fileInputRef = useRef(null);

  // const handleFileChange = (event) => {
  //   const image = event.target.files[0];
  //   console.log(image);
  //   setSelectedImage(image);
  // };

  // const handleButtonClick = () => {
  //   fileInputRef.current.click();
  // };

  const handleDateChange = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Add leading zero if necessary
    const day = String(date.getDate()).padStart(2, "0"); // Add leading zero if necessary

    const dateString = `${year}-${month}-${day}`;
    setDate(dateString);
  };

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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // You can access the form field values using the state variables
    console.log(eventName, eventDetails, location, price, numberOfTickets);
  };

  return (
    <Layout>
      <from>
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
                      <b>Drag &amp; drop</b> file or <b>browse</b> your
                      computer. You can add more than one.
                    </p>
                    <input
                      type="file"
                      id="imageUpload"
                      accept="image/*"
                      className="invisible"
                    />
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
                    onChange={(e) => setEventName(e.target.value)}
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
                    onChange={(e) => setEventDetails(e.target.value)}
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
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>

                {/* Price input box */}
                <div className="flex flex-row gap-6">
                  <div className="flex flex-col">
                    <label className="text-gray-700 font-semibold mb-2">
                      Price
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-2">
                      <MdAttachMoney size={15} />
                      <input
                        type="number"
                        className="w-24 ml-2 py-2 focus:outline-none"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-gray-700 font-semibold mb-2">
                      Number of Tickets
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-2">
                      <MdPeople size={15} />
                      <input
                        type="number"
                        className="w-24 ml-2 py-2 focus:outline-none"
                        value={numberOfTickets}
                        onChange={(e) => setNumberOfTickets(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="flex flex-col w-full h-full gap-4">
                {/* Calendar Date Picker */}
                <div className="flex flex-col">
                  <label className="text-gray-700 font-semibold mb-2">
                    Date
                  </label>
                  <div className="w-fit border border-slate-200 rounded-md">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateCalendar
                        showDaysOutsideCurrentMonth
                        fixedWeekNumber={5}
                        onChange={(e) => handleDateChange(e.$d)}
                      />
                    </LocalizationProvider>
                  </div>
                </div>

                {/* Time Picker */}
                <div className="flex flex-col">
                  <label className="text-gray-700 font-semibold mb-2">
                    Time
                  </label>
                  <div className="flex flex-row gap-4 w-fit">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimeField
                        label="Start"
                        size="small"
                        onChange={(e) => setTimeStart(e.target.value)}
                      />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimeField
                        label="End"
                        size="small"
                        onChange={(e) => setTimeEnd(e.target.value)}
                      />
                    </LocalizationProvider>
                  </div>
                </div>

                {/* Tag Input Box */}

                <div className="flex flex-col w-full mx-auto">
                  <label className="text-gray-700 font-semibold mb-2">
                    Tags
                  </label>
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
                    <select
                      className="bg-white border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                      onChange={(e) => setFaculty(e.target.value)}
                    >
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
                    <select
                      className="bg-white border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                      onChange={(e) => setAudiance(e.target.value)}
                    >
                      <option value="">Faculty</option>
                      <option value="option1">University</option>
                      <option value="option2">Public</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-96 h-full bg-gray-700 px-16 justify-center items-center gap-16">
            <EventCard
              eventImage={tempimage}
              eventName={eventName}
              eventDetails={eventDetails}
              date={date}
              location={location}
              numberOfTickets={numberOfTickets}
            />
            <Button
              className="w-fit px-12 py-4 bg-secondary hover:bg-white duration-200 text-white font-dmSans font-bold rounded-full hover:no-underline hover:text-secondary focus"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </from>
    </Layout>
  );
}
