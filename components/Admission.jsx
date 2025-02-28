"use client";
import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, Award, UserPlus, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Admission() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Submit Application',
      step: '01',
    },
    {
      icon: FileText,
      title: 'Document Review',
      step: '02',
    },
    {
      icon: Users,
      title: 'Interview',
      step: '03',
    },
    {
      icon: Award,
      title: 'Decision',
      step: '04',
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-[#6b292a]"
        >
          Admissions Process
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <AdmissionStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function AdmissionStep({ step, index }) {
  const { icon: Icon, title, step: stepNumber } = step;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      className="relative cursor-pointer"
    >
      <div className="text-6xl font-bold text-gray-100 absolute -top-4 -left-4">
        {stepNumber}
      </div>
      <Card className="p-6 relative z-10 hover:shadow-xl transition-shadow duration-300">
        <Icon className="w-12 h-12 mb-4 text-primary" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </Card>
    </motion.div>
  );
}