import { UserPlus } from "lucide-react";

export default function Banner() {
  return (
    <section className="text-center py-14">
      <h1 className="text-4xl md:text-5xl font-bold mb-3">
        Friends to keep close in your life
      </h1>

      <p className="text-slate-500 mb-6">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      <button className="inline-flex items-center gap-2 bg-emerald-900 text-white px-5 py-2 rounded-md text-sm">
        <UserPlus size={16} />
        Add a Friend
      </button>
    </section>
  );
}