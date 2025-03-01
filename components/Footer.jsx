"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import {Logo2} from '@/public/index'
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: 'https://facebook.com' },
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com' },
    { icon: Instagram, name: 'Instagram', url: 'https://instagram.com' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com' },
  ];

  return (
    <div className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/">
            <Image
              src={Logo2}
              alt="Al-Ma’arif College"
              width={60}
              className="rounded-full"
            />
            </Link>
            <h3 className="text-xl font-semibold mb-4">Al-Ma’arif College</h3>
            <p className="text-sm text-primary-foreground/80">
            Welcome to Al-Ma’arif College. The institution was established as a College of Nursing, Midwifery & Health Sciences on 8th November 2021.
            </p>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Admissions', 'Programs', 'Campus Life'].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="cursor-pointer hover:text-primary-foreground/80 transition-colors duration-300"
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {['Student Portal', 'Parent Portal', 'Calendar', 'News & Events'].map((resource, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="cursor-pointer hover:text-primary-foreground/80 transition-colors duration-300"
                >
                  {resource}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 hover:text-primary-foreground/80 transition-colors duration-300"
                  aria-label={`Visit our ${social.name} page`}
                >
                  <social.icon className="w-5 h-5" />
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80"
        >
          <p>&copy; {currentYear} &mdash; Al-Ma’arif College. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  );
}