"use client";
import React from 'react';
import { Card } from '@/components/ui/card';
import { BookOpen, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Depart() {
  const departments = [
    {
      icon: Users,
      title: 'Department of Nursing Sciences',
      description:
        'The Department of Nursing Sciences offers programmes leading to the award of certificate in Registered Nursing (RN) and Registered Midwifery (RM).',
    },
    {
      icon: BookOpen,
      title: 'Department of Health Sciences',
      description:
        'The Department of Health Sciences offers programmes leading to the award of certificate in Pharmacy Technician, Medical Laboratory Technician, Health Information Management, and more.',
    },
  ];

  return (
    <div className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Departments
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {departments.map((department, index) => (
            <DepartmentCard key={index} department={department} />
          ))}
        </div>
      </div>
    </div>
  );
}

function DepartmentCard({ department }) {
  const { icon: Icon, title, description } = department;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      className="cursor-pointer"
    >
      <Card className="p-8 text-center bg-white hover:shadow-xl transition-shadow duration-300">
        <div className="flex flex-col items-center">
          <Icon className="w-12 h-12 mb-6 text-primary" />
          <h3 className="text-2xl font-semibold mb-4">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
          <button className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors duration-300">
            Read More
          </button>
        </div>
      </Card>
    </motion.div>
  );
}