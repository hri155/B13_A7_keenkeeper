"use client";

import { useEffect, useState } from "react";

import Banner from "@/components/Banner";
import FriendCard from "@/components/FriendCard";
import LoadingSpinner from "@/components/LoadingSpinner";

import friendsData from "@/data/friends.json";

export default function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 1000);
  }, []);

  const stats = [
    {
      label: "Total Friends",
      value: friendsData.length,
    },
    {
      label: "On Track",
      value: 12,
    },
    {
      label: "Need Attention",
      value: 4,
    },
    {
      label: "Interactions This Month",
      value: 18,
    },
  ];

  return (
    <main className="bg-[#F5F7F6] min-h-screen">

      <Banner />

      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white px-6 py-5 shadow-sm ring-1 ring-slate-200 flex h-40 flex-col items-center justify-center text-center"
            >
              <p className="text-4xl font-bold text-slate-900">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold mb-10 text-[#1F2937]">
          Your Friends
        </h2>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {friends.map((friend) => (
              <FriendCard
                key={friend.id}
                friend={friend}
              />
            ))}
          </div>
        )}

      </section>

    </main>
  );
}