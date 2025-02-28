"use client";
import React from 'react';
import { Stethoscope, Baby, Pill } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function Best() {
  const features = [
    {
      icon: Stethoscope,
      title: 'Nursing Programs',
      description: 'Our rigorous academic programs are designed to challenge and inspire students to achieve their highest potential.',
    },
    {
      icon: Baby,
      title: 'Midwifery Programs',
      description: 'Join a vibrant community of students from diverse backgrounds, fostering a rich cultural exchange.',
    },
    {
      icon: Pill,
      title: 'Pharmacy Programs',
      description: 'Gain access to international programs, exchange opportunities, and global networks.',
    },
  ];

  return (
    <div className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#6b292a] text-center mb-12"
        >
          Best of Studies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8 text-gray-600"
        >
          Discover why Al-Ma’arif College is the preferred choice for students seeking excellence in education and holistic development.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="p-10 text-center hover:shadow-xl transition-shadow duration-300">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}