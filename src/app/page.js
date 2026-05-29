import Banner from "@/components/Banner";
import FriendCard from "@/components/FriendCard";
import friends from "@/data/friends.json";

export default function HomePage() {
  const onTrack = friends.filter((f) => f.status === "on-track").length;
  const needAttention = friends.filter((f) => f.status !== "on-track").length;

  return (
    <div className="max-w-6xl mx-auto px-6">
      <Banner />

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-white border rounded-lg p-5 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-emerald-900">
            {friends.length}
          </h2>
          <p className="text-sm text-slate-500">Total Friends</p>
        </div>

        <div className="bg-white border rounded-lg p-5 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-emerald-900">{onTrack}</h2>
          <p className="text-sm text-slate-500">On Track</p>
        </div>

        <div className="bg-white border rounded-lg p-5 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-emerald-900">
            {needAttention}
          </h2>
          <p className="text-sm text-slate-500">Need Attention</p>
        </div>

        <div className="bg-white border rounded-lg p-5 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-emerald-900">12</h2>
          <p className="text-sm text-slate-500">Interactions This Month</p>
        </div>
      </section>

      <section className="pb-10">
        <h2 className="text-xl font-bold mb-5">Your Friends</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </section>
    </div>
  );
}