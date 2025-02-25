"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Provost, Hod_him, Hod_nursing, Registrars } from "../assets/index";
import { motion } from "framer-motion";

export default function Principal() {
  const officers = [
    {
      title: "Provost",
      description: "Mal. Musa Mamman",
      image: Provost,
    },
    {
      title: "Registrar",
      description: "Mal. Usman Alh. Saleh",
      image: Registrars,
    },
    {
      title: "HOD Nursing",
      description: "Muhammad Aliyu",
      image: Hod_nursing,
    },
    {
      title: "HOD Health Information Management",
      description: "Ayeni Christiana",
      image: Hod_him,
    },
  ];

  return (
    <div id="programs" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-6 text-gray-900"
        >
          Principal Officers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12 text-gray-600 max-w-3xl mx-auto text-lg"
        >
          Meet our top management officers at Al-Ma’arif College of Nursing,
          Midwifery & Health Sciences. The Provost is responsible for
          administrating academic and non-academic activities, while the Council
          manages the overall affairs of the college.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {officers.map((officer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex"
            >
              <Card className="flex flex-col overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-200 rounded-lg bg-white flex-grow">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-64 group"
                >
                  <Image
                    src={officer.image}
                    alt={officer.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-90" />
                </motion.div>
                <div className="p-6 text-center flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {officer.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{officer.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}