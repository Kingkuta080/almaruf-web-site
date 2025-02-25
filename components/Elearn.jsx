"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Library, Laptop, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Elearn() {
  const resources = [
    {
      icon: Laptop,
      title: 'Student Portal',
      description: 'Access assignments, grades, and learning materials online.',
    },
    {
      icon: Library,
      title: 'Digital Library',
      description: 'Extensive collection of e-books and research materials.',
    },
    {
      icon: FileText,
      title: 'Online Courses',
      description: 'Supplementary online courses and learning resources.',
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
          Digital Learning Resources
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard key={index} resource={resource} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ResourceCard({ resource, index }) {
  const { icon: Icon, title, description } = resource;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      className="cursor-pointer"
    >
      <Card className="p-6 text-center hover:shadow-xl transition-shadow duration-300">
        <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <Button variant="outline" className="mt-4">
          Access Now
        </Button>
      </Card>
    </motion.div>
  );
}