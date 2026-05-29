import Link from "next/link";

export default function FriendCard({ friend }) {
  const statusClass = {
    overdue: "bg-red-100 text-red-600",
    "almost due": "bg-yellow-100 text-yellow-700",
    "on-track": "bg-green-100 text-green-700",
  };

  return (
    <Link
      href={`/friend/${friend.id}`}
      className="bg-white rounded-lg shadow-sm border p-5 text-center hover:shadow-md transition"
    >
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-20 h-20 rounded-full mx-auto object-cover mb-4"
      />

      <h3 className="font-semibold">{friend.name}</h3>

      <p className="text-xs text-slate-500 my-2">
        {friend.days_since_contact} days ago
      </p>

      <div className="flex justify-center flex-wrap gap-1 mb-3">
        {friend.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <span
        className={`text-xs px-3 py-1 rounded-full ${statusClass[friend.status]}`}
      >
        {friend.status}
      </span>
    </Link>
  );
}