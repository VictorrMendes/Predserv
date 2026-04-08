import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { companyInfo } from '@/data/content';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Informações de Contato */}
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

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-predserv-teal" />
                </div>
                <div>
                  <h4 className="font-bold text-predserv-dark text-lg mb-1">Endereço</h4>
                  <p className="text-gray-600 max-w-xs">{companyInfo.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <form className="bg-gray-50 p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                  <input type="text" className="w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-predserv-teal outline-none transition-all" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone/WhatsApp *</label>
                  <input type="tel" className="w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-predserv-teal outline-none transition-all" required />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Serviço de Interesse</label>
                <select className="w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-predserv-teal outline-none transition-all text-gray-600">
                  <option>Drywall e Rebaixamento</option>
                  <option>Pintura Profissional</option>
                  <option>Estruturas Metálicas</option>
                  <option>Reforma Completa</option>
                  <option>Outros</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea rows={4} className="w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-predserv-teal outline-none transition-all resize-none" placeholder="Conte-nos um pouco sobre a sua necessidade..."></textarea>
              </div>

              <button type="submit" className="w-full bg-predserv-dark hover:bg-gray-800 text-white px-6 py-4 rounded-lg font-bold text-lg shadow-md transition-colors">
                Enviar Mensagem
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}