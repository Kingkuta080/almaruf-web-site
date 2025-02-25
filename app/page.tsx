'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Users,
  Trophy,
  Mail,
  Phone,
  MapPin,
  Globe,
  Clock,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import Hero from '@/components/hero';
import About from '@/components/About'
import Principal from '@/components/Principal'
import Depart from '@/components/Depart'
import Count from '@/components/Count'
import Admission from '@/components/Admission'
import Elearn from '@/components/Elearn'
import Partners from '@/components/Partners'
import Best from '@/components/Best'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen py-[5rem]">
      <Hero />
      <Best />
      <About />
      <Principal />
      <Count />
      <Depart />
      <Admission />
      <Elearn />
      <Partners />
      <Contact />
    </main>
  );
}