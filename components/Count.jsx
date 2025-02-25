"use client";
import React, { useEffect, useRef } from "react";
import { BookOpen, GraduationCap, Users, Trophy } from "lucide-react";
import { motion, useAnimation, useMotionValue, animate } from "framer-motion";

export default function Count() {
  const stats = [
    { icon: Users, label: "Students", value: 2500 },
    { icon: GraduationCap, label: "Graduates", value: 15000 },
    { icon: Trophy, label: "Awards", value: 100 },
    { icon: BookOpen, label: "Courses", value: 50 },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ stat }) {
  const ref = useRef(null);
  const count = useMotionValue(0);
  const rounded = useMotionValue(0);
  const formattedValue = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    rounded.onChange((latest) => {
      formattedValue.set(new Intl.NumberFormat().format(Math.round(latest)));
    });
  }, [rounded, formattedValue]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1, y: 0 });
            animate(count, stat.value, { duration: 2, ease: "easeOut" });
            animate(rounded, stat.value, { duration: 2, ease: "easeOut" });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [stat.value, controls, count, rounded]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-100 hover:shadow-xl transition-shadow duration-300"
    >
      <stat.icon className="w-12 h-12 mb-4 text-yellow-400" />
      <motion.h3 className="text-4xl font-bold mb-2" aria-label={stat.label}>
        {formattedValue}
      </motion.h3>
      <p className="text-gray-600">{stat.label}</p>
    </motion.div>
  );
}
