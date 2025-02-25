"use client";
import React, { useState, useEffect } from 'react';
import { Newspaper } from 'lucide-react';

export default function News() {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  const newsItems = [
    {
      title: "2025 Admissions Now Open",
      date: "March 15, 2025",
    },
    {
      title: "National Science Fair Winners Announced",
      date: "March 10, 2025",
    },
    {
      title: "New STEM Lab Opening Ceremony",
      date: "March 5, 2025",
    },
  ];

  // Auto-rotate news items
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length);
    }, 5000); // Rotate every 5 seconds
    return () => clearInterval(interval);
  }, [newsItems.length]);

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white py-4">
      <div className="container mx-auto px-4 flex items-center">
        <Newspaper className="h-6 w-6 mr-4" />
        <div className="overflow-hidden">
          <div
            key={currentNewsIndex}
            className="animate-fade-in-up transition-transform duration-500"
          >
            <p className="font-semibold">{newsItems[currentNewsIndex].title}</p>
            <p className="text-sm text-gray-300">{newsItems[currentNewsIndex].date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}