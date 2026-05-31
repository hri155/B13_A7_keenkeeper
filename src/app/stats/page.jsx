"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useTimeline } from "@/context/TimelineContext";

export default function StatsPage() {
  const { timeline } = useTimeline();

  const callCount = timeline.filter(
    (item) => item.type === "call"
  ).length;

  const textCount = timeline.filter(
    (item) => item.type === "text"
  ).length;

  const videoCount = timeline.filter(
    (item) => item.type === "video"
  ).length;

  const data = [
    { name: "Call", value: callCount },
    { name: "Text", value: textCount },
    { name: "Video", value: videoCount },
  ];

  const COLORS = [
    "#8B5CF6",
    "#10B981",
    "#1F5B47",
  ];

  return (
    <main className="bg-[#F5F7F6] min-h-screen px-6 py-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl md:text-5xl font-bold mb-8">
          Friendship Analytics
        </h1>

        <div className="bg-white rounded-2xl p-8 shadow-sm">

          <h2 className="font-semibold mb-6">
            By Interaction Type
          </h2>

          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>

                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius={70}
                  outerRadius={110}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>

                <Tooltip />
                <Legend />

              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>

      </div>
    </main>
  );
}