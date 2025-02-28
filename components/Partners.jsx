"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Nmcn, Nteb, P3, Yobe } from '@/assets';
import { motion } from 'framer-motion';

export default function Partners() {
  const partners = [
    { logo: Yobe, alt: 'Yobe State Government', href: 'https://yobestate.gov.ng/' },
    { logo: Nteb, alt: 'Nigerian Tertiary Education Board', href: 'https://web.nbte.gov.ng/' },
    { logo: P3, alt: 'P3 Organization', href: 'https://ysu.edu.ng/ysu/' },
    { logo: Nmcn, alt: 'Nigerian Medical Council of Nigeria', href: 'https://nmcn.gov.ng' },
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
          Our Partners
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8 text-gray-600"
        >
          We are proud to collaborate with leading organizations and institutions to provide our students with unparalleled opportunities and resources.
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <PartnerLogo key={index} partner={partner} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PartnerLogo({ partner, index }) {
  const { logo, alt, href } = partner;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.1 }}
      className="flex justify-center items-center h-full cursor-pointer"
    >
      <Link href={href} legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
          <Image
            src={logo}
            alt={alt}
            width={150}
            height={100}
            className="object-contain hover:opacity-80 transition-opacity duration-300"
          />
        </a>
      </Link>
    </motion.div>
  );
}