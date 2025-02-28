"use client";
import React from 'react';
import { Award, School, Globe } from 'lucide-react';
import Image from 'next/image';
import { bg } from '../assets/index';
import { motion } from 'framer-motion';

export default function About() {
  const aboutUsContent = `
  The institution was established as a College of Nursing, Midwifery & Health Sciences on 8th November 2021. The College is owned by a group of public spirited committed to bridge the gap in manpower in the state.
    It is a well-established fact that in Nigeria today, there is an acute shortage of trained and professionally medical and health personnel to meet the basic health needs of the ever increasing population; thus the reason behind my personal conviction on the necessity of contributing my quota towards bridging those gaps by establishing Alma’arif College of Health Sciences & Technology.`;

  const aimContent = "To promote medical excellence in health sciences at the National and International levels.";

  const missionContent = "To enhance the health care and social services, structures and processes that will cater for the needs of individuals, families and communities towards effective and sustainable human development.";

  const visionContent = "To position the school as a regional center of excellence for the production of health and social services and manpower through training, service and research.";

  return (
    <div id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-[#6b292a] mb-12"
        >
          About Al-Ma’arif College
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8 text-gray-600"
        >
          {aboutUsContent}
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <School className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Aim</h3>
                <p className="text-gray-600">{aimContent}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Globe className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">{missionContent}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Award className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-600">{visionContent}</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[100%] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <Image
              src={bg}
              alt="School Values"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}