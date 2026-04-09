import React from 'react';
import { featuresList } from '@/data/content';

export default function Features() {
  return (
    <section className="relative z-20 border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {featuresList.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="animate-fade-up hover-lift p-6" style={{ animationDelay: `${index * 0.12}s` }}>
                <div className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 ${index === 1 ? 'bg-teal-50 text-predserv-teal' : 'bg-yellow-50 text-predserv-yellow'}`}>
                  <Icon className="h-8 w-8 transition-transform duration-300 hover:scale-110" />
                </div>
                <h3 className="mb-3 text-2xl font-extrabold tracking-tight text-predserv-dark">{feature.title}</h3>
                <p className="text-md leading-relaxed text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}