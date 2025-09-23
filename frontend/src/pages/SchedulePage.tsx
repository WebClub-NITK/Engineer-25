"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface Event {
  id: number
  day: string
  name: string
  time: string
  venue: string
}

const EventsList: Event[] = [
  // Day 0
  {
    id: 1,
    day: "Day 0",
    name: "StockWarz",
    time: "9:00 AM - 4:00 PM",
    venue: "LHC C",
  },
  {
    id: 2,
    day: "Day 0",
    name: "Inauguration",
    time: "4:30 PM - 6:30 PM",
    venue: "SJA",
  },
  {
    id: 3,
    day: "Day 0",
    name: "Genesis Dance",
    time: "6:30 PM - 7:00 PM",
    venue: "SJA",
  },
  {
    id: 4,
    day: "Day 0",
    name: "Laser Show",
    time: "7:00 PM - 7:30 PM",
    venue: "SJA",
  },
  {
    id: 5,
    day: "Day 0",
    name: "Movie Screening",
    time: "TBD",
    venue: "TBD",
  },

  // Day 1
  {
    id: 6,
    day: "Day 1",
    name: "Wright Flight",
    time: "10:00 AM - 5:00 PM",
    venue: "Behind New Sports Complex",
  },
  {
    id: 7,
    day: "Day 1",
    name: "Sim2Real",
    time: "24 Hours",
    venue: "CIDS",
  },
  {
    id: 8,
    day: "Day 1",
    name: "Robowars",
    time: "9:00 AM - 10:00 PM",
    venue: "SAC",
  },
  {
    id: 9,
    day: "Day 1",
    name: "Software Hackathon",
    time: "24 Hours (starting 10:30 AM)",
    venue: "LHC C / CIDS",
  },
  {
    id: 10,
    day: "Day 1",
    name: "APD",
    time: "10:00 AM - 6:00 PM",
    venue: "LHC D",
  },
  {
    id: 11,
    day: "Day 1",
    name: "Avishkar",
    time: "9:00 AM - 5:00 PM",
    venue: "LHC C",
  },
  {
    id: 12,
    day: "Day 1",
    name: "Techgyan Workshop",
    time: "10:00 AM - 5:00 PM",
    venue: "LHC A",
  },
  {
    id: 13,
    day: "Day 1",
    name: "Line Follower Bot",
    time: "9:00 AM - 2:00 PM",
    venue: "Behind New Sports Complex",
  },
  {
    id: 14,
    day: "Day 1",
    name: "Drone Racing",
    time: "9:00 AM - 2:00 PM",
    venue: "Behind New Sports Complex",
  },
  {
    id: 15,
    day: "Day 1",
    name: "Mechanical Modelling",
    time: "1:00 PM - 4:00 PM",
    venue: "CIDS",
  },
  {
    id: 16,
    day: "Day 1",
    name: "MC Night",
    time: "4:00 PM - 8:00 PM",
    venue: "SJA",
  },
  {
    id: 17,
    day: "Day 1",
    name: "Astro Quiz",
    time: "5:00 PM - 6:30 PM",
    venue: "TBD",
  },
  {
    id: 18,
    day: "Day 1",
    name: "Retro Night",
    time: "8:00 PM - 10:00 PM",
    venue: "Old Sports Complex",
  },
  {
    id: 19,
    day: "Day 1",
    name: "IPL Auction",
    time: "10:00 AM - 1:00 PM",
    venue: "ISTE Seminar Hall",
  },
  {
    id: 20,
    day: "Day 1",
    name: "Civil Saga",
    time: "2:00 PM - 5:00 PM",
    venue: "CIDS",
  },
  {
    id: 21,
    day: "Day 1",
    name: "Bot`n`Seek",
    time: "2:00 PM - 5:00 PM",
    venue: "Chemical Department",
  },

  // Day 2
  {
    id: 22,
    day: "Day 2",
    name: "APD",
    time: "10:00 AM - 6:00 PM",
    venue: "LHC D",
  },
  {
    id: 23,
    day: "Day 2",
    name: "Auto Expo",
    time: "10:00 AM - 12:00 PM",
    venue: "MB",
  },
  {
    id: 24,
    day: "Day 2",
    name: "Techgyan Workshop",
    time: "10:00 AM - 5:00 PM",
    venue: "LHC A",
  },
  {
    id: 25,
    day: "Day 2",
    name: "Egg Drop Challenge",
    time: "10:00 AM - 1:00 PM",
    venue: "CIDS",
  },
  {
    id: 26,
    day: "Day 2",
    name: "Robowars (Knock out rounds)",
    time: "Full Day",
    venue: "SAC",
  },
  {
    id: 27,
    day: "Day 2",
    name: "VR Event",
    time: "10:00 AM - 4:00 PM",
    venue: "---",
  },
  {
    id: 28,
    day: "Day 2",
    name: "Wright Flight",
    time: "10:00 AM - 5:00 PM",
    venue: "Behind New Sports Complex",
  },
  {
    id: 29,
    day: "Day 2",
    name: "Sim2Real",
    time: "Ends at 12:00 PM",
    venue: "CIDS",
  },
  {
    id: 30,
    day: "Day 2",
    name: "TrdeOff",
    time: "1:30 PM - 4:00 PM",
    venue: "Analog Lab",
  },
  {
    id: 31,
    day: "Day 2",
    name: "Project Expo",
    time: "11:00 AM - 1:00 PM",
    venue: "Pav and MB",
  },
  {
    id: 32,
    day: "Day 2",
    name: "Engi Talks",
    time: "1:00 PM - 4:00 PM",
    venue: "LHC C Seminar Hall",
  },
  {
    id: 33,
    day: "Day 2",
    name: "Beach Event",
    time: "4:00 PM - 6:00 PM",
    venue: "",
  },
  {
    id: 34,
    day: "Day 2",
    name: "Pro Show",
    time: "7:30 PM - 10:30 PM",
    venue: "Main Ground",
  },
  {
    id: 35,
    day: "Day 2",
    name: "IPL Auction",
    time: "9:00 AM - 12:00 PM",
    venue: "ISTE Seminar Hall",
  },
  {
    id: 36,
    day: "Day 2",
    name: "Tech it Easy Quiz",
    time: "10:00 AM - 2:00 PM",
    venue: "Seminar Hall",
  },
  {
    id: 37,
    day: "Day 2",
    name: "Bot 'n' Seek",
    time: "11:00 AM - 1:00 PM",
    venue: "Chemical Department",
  },


]



export default function EventSchedule() {
  const [selectedDay, setSelectedDay] = useState("Day 0");

  const days = ["Day 0", "Day 1", "Day 2"];

  const filteredEvents = EventsList.filter((event) => event.day === selectedDay);

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative">

      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/main_bg.png')", opacity: 0.45 }}
      />

      <div className="relative z-10 flex">
        <div className="hidden md:flex flex-col w-60 p-6 border-r border-white/20 bg-white/5 backdrop-blur-sm">
          <h2 className="text-lg font-bold text-white mb-4">Filter by Day</h2>
          <div className="flex flex-col gap-3">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 text-left ${selectedDay === day
                    ? "bg-white/30 border-white text-white font-semibold"
                    : "bg-white/10 border-white/30 text-white/70 hover:bg-white/20 hover:text-white"
                  }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>


        <div className="flex-1 px-6 py-12">

          <div className="flex md:hidden justify-center mb-6 gap-3">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 ${selectedDay === day
                    ? "bg-white/30 border-white text-white font-semibold"
                    : "bg-white/10 border-white/30 text-white/70 hover:bg-white/20 hover:text-white"
                  }`}
              >
                {day}
              </button>
            ))}
          </div>


          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-white mb-4 text-balance">
              Event Schedule
            </h1>
            <p className="text-xl text-white/90 text-pretty">
              Join us and participate in some amazing events of Engineer' 25!
            </p>
          </motion.div>

          <div className="space-y-6 px-15 ">

            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1 flex-wrap">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {event.name}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-white/90">
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>{event.venue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>


          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-white/80 text-lg">
              For registrations, head on to Events Page
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );


}
