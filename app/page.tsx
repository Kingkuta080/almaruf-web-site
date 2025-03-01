'use client';

import Hero from '@/components/Hero';
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