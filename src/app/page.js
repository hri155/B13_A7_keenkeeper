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

  return (
    <main className="bg-[#F5F7F6] min-h-screen">

      <Banner />

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