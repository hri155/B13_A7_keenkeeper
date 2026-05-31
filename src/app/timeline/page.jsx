"use client";

import { useState } from "react";
import Image from "next/image";

import { useTimeline } from "@/context/TimelineContext";

import callIcon from "@/assets/call.png";
import textIcon from "@/assets/text.png";
import videoIcon from "@/assets/video.png";

export default function TimelinePage() {
  const { timeline } = useTimeline();

  const [filter, setFilter] = useState("all");

  const filteredTimeline =
    filter === "all"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  const getIcon = (type) => {
    if (type === "call") return callIcon;
    if (type === "text") return textIcon;
    return videoIcon;
  };

  return (
    <main className="bg-[#F5F7F6] min-h-screen px-6 py-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-slate-900 mb-8">
          Timeline
        </h1>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full max-w-xs border border-slate-200 rounded-lg px-4 py-3 mb-8 bg-white"
        >
          <option value="all">Filter timeline</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>

        {filteredTimeline.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-slate-700">
              No timeline entries yet
            </h2>

            <p className="text-slate-500 mt-2">
              Go to a friend profile and log a Call, Text, or Video interaction.
            </p>
          </div>
        ) : (
          <div className="space-y-4">

            {filteredTimeline.map((entry) => (
              <div
                key={entry.id}
                className="bg-white rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition duration-300 flex items-center gap-4"
              >

                <Image
                  src={getIcon(entry.type)}
                  alt={entry.type}
                  width={38}
                  height={38}
                />


                <div>
                  <h3 className="font-medium text-slate-900">
                    {entry.message}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    {entry.time}
                  </p>
                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}