"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import friendsData from "@/data/friends.json";
import { useTimeline } from "@/context/TimelineContext";
import { toast } from "sonner";

import Image from "next/image";

import callIcon from "@/assets/call.png";
import textIcon from "@/assets/text.png";
import videoIcon from "@/assets/video.png";

import snoozeIcon from "@/assets/bellsimplez.svg";
import archiveIcon from "@/assets/archive.svg";
import deleteIcon from "@/assets/trash.svg";

export default function FriendDetails() {
  const params = useParams();

  const friend = friendsData.find(
    (f) => f.id === Number(params.id)
  );

  if (!friend) {
    return (
      <div className="text-center py-20 text-3xl">
        Friend Not Found
      </div>
    );
  }

  const statusColors = {
    overdue: "bg-red-100 text-red-600",
    "almost due": "bg-yellow-100 text-yellow-700",
    "on-track": "bg-green-100 text-green-700",
  };

  const { addTimelineEntry } = useTimeline();
  const [activeAction, setActiveAction] = useState(null);

  const handleQuickAction = (type) => {
    const label =
      type === "call"
        ? "Call"
        : type === "text"
        ? "Text"
        : "Video Call";
    const time = new Date().toLocaleString();

    setActiveAction(type);

    addTimelineEntry({
      id: `${friend.id}-${type}-${Date.now()}`,
      friendId: friend.id,
      friendName: friend.name,
      type,
      label,
      time,
      message: `${label} with ${friend.name}`,
    });

    toast.success(`${label} logged to timeline`);
  };

  return (
    <main className="bg-[#F5F7F6] min-h-screen px-6 py-10">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="bg-white rounded-2xl shadow-sm p-8">

          <Image
            src={friend.picture}
            alt={friend.name}
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />

          <h1 className="text-2xl font-bold text-center mt-4">
            {friend.name}
          </h1>

          <div className="text-center mt-3">
            <span
              className={`px-3 py-1 rounded-full text-sm ${statusColors[friend.status]}`}
            >
              {friend.status}
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {friend.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-500 mt-6 text-center">
            {friend.bio}
          </p>

          <p className="text-center mt-4 font-medium">
            {friend.email}
          </p>

          <div className="mt-8 space-y-3">

            <button className="w-full border rounded-lg py-3 hover:bg-gray-50 transition duration-300 flex items-center justify-center gap-3">

              <Image
                src={snoozeIcon}
                alt="snooze"
                width={20}
                height={20}
              />

              <span>Snooze 2 Weeks</span>

            </button>

            <button className="w-full border rounded-lg py-3 hover:bg-gray-50 transition duration-300 flex items-center justify-center gap-3">

              <Image
                src={archiveIcon}
                alt="archive"
                width={20}
                height={20}
              />

              <span>Archive</span>

            </button>

            <button className="w-full border rounded-lg py-3 text-red-500 hover:bg-red-50 transition duration-300 flex items-center justify-center gap-3">

              <Image
                src={deleteIcon}
                alt="delete"
                width={20}
                height={20}
              />

              <span>Delete</span>

            </button>

          </div>

        </div>

        <div className="lg:col-span-2 space-y-6">


          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <h2 className="text-3xl font-bold">
                {friend.days_since_contact}
              </h2>

              <p className="text-gray-500 mt-2">
                Days Since Contact
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <h2 className="text-3xl font-bold">
                {friend.goal}
              </h2>

              <p className="text-gray-500 mt-2">
                Goal (Days)
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <h2 className="text-2xl font-bold">
                {friend.next_due_date}
              </h2>

              <p className="text-gray-500 mt-2">
                Next Due
              </p>
            </div>

          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm flex justify-between items-center">

            <div>
              <h2 className="text-xl font-semibold">
                Relationship Goal
              </h2>

              <p className="text-gray-500 mt-2">
                Connect every {friend.goal} days
              </p>
            </div>

            <button className="border px-4 py-2 rounded-lg hover:bg-gray-50 transition duration-300">
              Edit
            </button>

          </div>


          <div className="bg-white rounded-xl p-6 shadow-sm">

            <h2 className="text-xl font-semibold mb-6">
              Quick Check-In
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">


              <button
                type="button"
                onClick={() => handleQuickAction("call")}
                className={`border rounded-lg py-6 transition duration-300 flex flex-col items-center gap-3 ${
                  activeAction === "call"
                    ? "bg-emerald-100 border-emerald-300 text-emerald-900"
                    : "hover:bg-gray-50 hover:shadow-md"
                }`}
              >

                <Image
                  src={callIcon}
                  alt="call"
                  width={30}
                  height={30}
                />

                <span className="font-medium">
                  Call
                </span>

              </button>

              <button
                type="button"
                onClick={() => handleQuickAction("text")}
                className={`border rounded-lg py-6 transition duration-300 flex flex-col items-center gap-3 ${
                  activeAction === "text"
                    ? "bg-emerald-100 border-emerald-300 text-emerald-900"
                    : "hover:bg-gray-50 hover:shadow-md"
                }`}
              >

                <Image
                  src={textIcon}
                  alt="text"
                  width={30}
                  height={30}
                />

                <span className="font-medium">
                  Text
                </span>

              </button>

              <button
                type="button"
                onClick={() => handleQuickAction("video")}
                className={`border rounded-lg py-6 transition duration-300 flex flex-col items-center gap-3 ${
                  activeAction === "video"
                    ? "bg-emerald-100 border-emerald-300 text-emerald-900"
                    : "hover:bg-gray-50 hover:shadow-md"
                }`}
              >

                <Image
                  src={videoIcon}
                  alt="video"
                  width={30}
                  height={30}
                />

                <span className="font-medium">
                  Video
                </span>

              </button>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}