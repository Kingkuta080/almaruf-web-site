"use client";
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { bg2, bg3, bg4 } from '../assets/index';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: bg3,
      title: "Welcome to Al-Ma’arif College...",
      description: "Welcome to Al-Ma’arif College. The institution was established as a College of Nursing, Midwifery & Health Sciences on 8th November 2021. The College is owned by a group of public spirited committed to bridge the gap in manpower in the state.",
    },
    {
      image: bg2,
      title: "Our Students Are Trained Using Modern Science Equipment",
      description: "Our Students Are Trained Using Modern Science Equipment. Join us to explore cutting-edge programs designed to prepare you for the challenges of the future.",
    },
    {
      image: bg4,
      title: "Choose the Right College for Your Health Education",
      description: "Choose the Right College for Your Health Education. Discover a vibrant community dedicated to your academic and personal growth.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover brightness-50"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-white"
          >
            <h1 className="text-5xl font-bold mb-6">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl mb-8">
              {slides[currentSlide].description}
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection('apply')}
                className="hover:bg-primary-dark transition-colors duration-300"
              >
                Apply Now
              </Button>
              <Button
                variant="ghost"
                size="lg"
                style={{ borderColor: 'white' }}
                onClick={() => scrollToSection('programs')}
                className="hover:bg-white hover:text-black transition-colors duration-300"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === index ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}