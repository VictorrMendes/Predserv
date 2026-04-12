"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { aboutData } from '@/data/content';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-predserv-teal rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
            <div className="relative w-full h-72 sm:h-96 lg:h-125 bg-gray-100 rounded-2xl overflow-hidden group">
              <Image
                src={aboutData.imageUrl}
                alt="Equipe Predserv em obra"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="object-contain transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-2xl border-l-4 border-predserv-yellow hidden sm:block hover:-translate-y-2 transition-transform cursor-default"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl font-extrabold text-predserv-teal">+03</div>
                <div className="text-sm text-gray-600 font-bold leading-tight">Anos de<br/>Experiência</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-predserv-teal font-bold uppercase tracking-wider text-sm mb-3">{aboutData.title}</h2>
            <h3 className="text-4xl font-extrabold text-predserv-dark mb-6 leading-tight">{aboutData.headline}</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {aboutData.description}
            </p>
            
            <ul className="space-y-4 mb-10">
              {aboutData.topics.map((topic, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (index * 0.15) }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-6 w-6 text-predserv-yellow shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{topic}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}