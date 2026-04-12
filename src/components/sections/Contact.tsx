"use client";

import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import { companyInfo } from '@/data/content';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Drywall e Rebaixamento',
    message: '',
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const whatsappMessage = [
      `Olá, meu nome é ${formData.name}.`,
      `Estou com interesse no serviço de ${formData.service}.`,
      '',
      `E-mail: ${formData.email}`,
      `Telefone: ${formData.phone}`,
      '',
      `Detalhes: ${formData.message || 'Não informado.'}`,
    ].join('\n');

    const whatsappUrl = `${companyInfo.whatsappLink}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Drywall e Rebaixamento',
      message: '',
    });
  };

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-16">
          
          <div className="animate-fade-up" style={{ animationDelay: '0.05s' }}>
            <h2 className="text-predserv-teal font-bold uppercase tracking-wider text-sm mb-3">Fale Conosco</h2>
            <h3 className="text-4xl font-extrabold text-predserv-dark mb-6 tracking-tighter">Vamos Planejar Sua Próxima Obra?</h3>
            <p className="text-gray-600 text-lg mb-10">
              Preencha o formulário ao lado ou utilize nossos canais diretos. Nossa equipe está pronta para tirar suas dúvidas e agendar uma visita técnica.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-predserv-teal" />
                </div>
                <div>
                  <h4 className="font-bold text-predserv-dark text-lg mb-1">Telefone / WhatsApp</h4>
                  <p className="text-gray-600">{companyInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-predserv-teal" />
                </div>
                <div>
                  <h4 className="font-bold text-predserv-dark text-lg mb-1">E-mail</h4>
                  <p className="text-gray-600">{companyInfo.email}</p>
                </div>
              </div>

              
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <form onSubmit={handleSubmit} className="hover-glow bg-gray-50 p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 space-y-6 transition-shadow duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-predserv-teal outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-mail *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-predserv-teal outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone/WhatsApp *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-predserv-teal outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Serviço de Interesse</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-predserv-teal outline-none transition-all text-gray-600"
                  >
                    <option>Drywall e Rebaixamento</option>
                    <option>Pintura Profissional</option>
                    <option>Estruturas Metálicas</option>
                    <option>Reforma Completa</option>
                    <option>Outros</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-predserv-teal outline-none transition-all resize-none"
                  placeholder="Conte-nos um pouco sobre a sua necessidade..."
                ></textarea>
              </div>

              <button type="submit" className="hover-lift w-full bg-predserv-dark hover:bg-gray-800 text-white px-6 py-4 rounded-lg font-bold text-lg shadow-md transition-colors">
                Enviar no WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}