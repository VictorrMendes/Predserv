import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonialsList } from '@/data/content';

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="animate-fade-up text-center max-w-3xl mx-auto mb-20" style={{ animationDelay: '0.05s' }}>
          <h2 className="text-predserv-teal font-bold uppercase tracking-wider text-sm mb-3">Prova Social</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-predserv-dark mb-6 tracking-tighter">O Que Dizem Nossos Clientes</h3>
          <p className="text-gray-600 text-lg">A maior prova da nossa qualidade é a satisfação de quem já confiou na Predserv.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsList.map((testimonial, index) => (
            <div 
              key={index}
              className="animate-fade-up hover-lift hover-glow bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <Quote className="absolute top-8 right-8 h-12 w-12 text-gray-100" />
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-predserv-yellow text-predserv-yellow" />
                ))}
              </div>
              
              <p className="text-gray-600 text-lg italic mb-8 relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="relative z-10">
                <h4 className="font-bold text-predserv-dark text-lg">{testimonial.name}</h4>
                <p className="text-predserv-teal font-medium text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}