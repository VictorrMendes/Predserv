import React from 'react';
import { HardHat } from 'lucide-react';
import { companyInfo, footerLinks } from '@/data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-predserv-dark text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Logo e Sobre */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <HardHat className="h-8 w-8 text-predserv-teal" />
              <div className="font-bold text-2xl tracking-tighter">
                <span className="text-white">PRED</span>
                <span className="text-predserv-yellow">SERV</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Soluções completas em engenharia e reformas civis. Qualidade, prazo e segurança para o seu projeto comercial ou residencial.
            </p>
            {/* Redes Sociais */}
            <div className="flex gap-4">
              {footerLinks.social.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a key={index} href={social.href} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-predserv-teal hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Institucional</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-predserv-teal transition-colors text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-predserv-teal transition-colors text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato Direto */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li><span className="text-gray-500 block">WhatsApp:</span> <a href={companyInfo.whatsappLink} className="hover:text-predserv-yellow transition-colors font-medium text-white">{companyInfo.phone}</a></li>
              <li><span className="text-gray-500 block">E-mail:</span> <a href={`mailto:${companyInfo.email}`} className="hover:text-predserv-yellow transition-colors">{companyInfo.email}</a></li>
              <li><span className="text-gray-500 block">Endereço:</span> {companyInfo.address}</li>
            </ul>
          </div>

        </div>

        {/* Direitos Autorais */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} {companyInfo.name}. Todos os direitos reservados.</p>
          <p>CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
}