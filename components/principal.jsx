"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Bursar,Chairman,College,Dap,Provo,Reg } from "@/public/index";
import { motion } from "framer-motion";

export default function Principal() {
  const officers = [
    {
      title: "Provost",
      description: "Mal. Musa Mamman",
      image: Provo,
    },
    {
      title: "Registrar/Secretary",
      description: "Mal. Usman Alh. Saleh",
      image: Reg,
    },
    {
      title: "Chairman/Founder",
      description: "Prof. Ibrahim Abdullahi Sani",
      image: Chairman,
    },
    {
      title: "Bursar ",
      description: "Mal. Ya`u Alhaji Ahmed",
      image: Bursar,
    },
    {
      title: "College Librarian",
      description: "Adamu Musa Yusuf",
      image: College,
    },
    {
      title: "Director Academic Planning",
      description: "Abdulrahman Muktar",
      image: Dap,
    },
  ];

  return (
    <div id="programs" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-6 text-gray-900 text-[#6b292a]"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="relative h-80 group"
                >
                  <Image
                    src={officer.image}
                    alt={officer.title}
                    fill
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"

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