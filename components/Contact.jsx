"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div id="contact" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-[#6b292a]"
        >
          Contact Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <ContactItem
                icon={Phone}
                text="+234 080-34511049, 080-34069271"
              />
              <ContactItem
                icon={Mail}
                text="info@almaarifcnm.edu.ng"
              />
              <ContactItem
                icon={MapPin}
                text="KM 5, Dumbulwa, Kano Road Potiskum – Yobe State, Nigeria"
              />
              <ContactItem
                icon={Clock}
                text="Monday - Friday: 8:00 AM - 4:00 PM"
              />
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            id="apply"
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="w-full hover:bg-primary-dark transition-colors duration-300">
              Send Message
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon: Icon, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <Icon className="w-6 h-6 mr-4 text-primary" />
      <span className="text-gray-700">{text}</span>
    </motion.div>
  );
}