"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const TimelineContext = createContext(null);

export function TimelineProvider({ children }) {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const savedTimeline =
      localStorage.getItem("timeline");

    if (savedTimeline) {
      setTimeline(JSON.parse(savedTimeline));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "timeline",
      JSON.stringify(timeline)
    );
  }, [timeline]);

  const addTimelineEntry = (entry) => {
    setTimeline((prev) => [entry, ...prev]);
  };

  return (
    <TimelineContext.Provider
      value={{
        timeline,
        addTimelineEntry,
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
}

export const useTimeline = () =>
  useContext(TimelineContext);