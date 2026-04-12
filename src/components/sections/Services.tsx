"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { servicesList } from '@/data/content';

export default function Services() {
  return (
    <section id="servicos" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-predserv-teal font-bold uppercase tracking-wider text-sm mb-3">Nossas Especialidades</h2>
          <h3 className="text-5xl font-extrabold text-predserv-dark mb-6 tracking-tighter">Engenharia e Acabamento de Alto Padrão</h3>
          <p className="text-gray-600 text-xl leading-relaxed">
            Combinamos técnicas construtivas modernas com materiais de qualidade para entregar obras seguras e duráveis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-5 md:p-10 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 group relative overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-gray-50 rounded-bl-full group-hover:bg-predserv-teal transition-colors duration-500 ease-out"></div>
                
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-4 md:mb-8 relative z-10 group-hover:bg-predserv-teal transition-colors duration-500 ease-out shrink-0">
                  <Icon className="h-6 w-6 md:h-8 md:w-8 text-predserv-teal group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h4 className="text-lg md:text-2xl font-extrabold mb-2 md:mb-4 text-predserv-dark tracking-tight relative z-10">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base relative z-10">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}