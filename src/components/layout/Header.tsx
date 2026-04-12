"use client";

import React, { useState } from 'react';
import { ChevronRight, Menu, X, Home, Hammer } from 'lucide-react';
import { companyInfo } from '@/data/content';

export default function Header() {
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="animate-fade-in sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm md:bg-white/95 md:backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-2 hover-lift">
            <Home className="h-7 w-7 text-predserv-teal transition-transform duration-300 group-hover:-rotate-6" />
            <div className="flex items-center gap-1 font-bold text-2xl tracking-tighter">
              <span className="text-predserv-teal">Pred</span>
              <span className="text-predserv-yellow">serv</span>
              <span className="animate-hammer-hit origin-bottom-left inline-flex">
                <Hammer className="h-5 w-5 text-predserv-yellow" />
              </span>
            </div>
          </a>

          {/* Nav Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="relative font-medium text-gray-600 transition-colors hover:text-predserv-teal group">
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-predserv-teal transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex flex-col items-end mr-4">
              <span className="text-xs text-gray-500">Solicite via WhatsApp</span>
              <a href={companyInfo.whatsappLink} target="_blank" rel="noreferrer" className="font-bold text-predserv-dark transition-colors hover:text-predserv-teal">
                {companyInfo.phone}
              </a>
            </div>
            <a href="#contato" className="hover-glow-strong inline-flex items-center gap-2 rounded-md bg-predserv-teal px-6 py-2 font-bold text-white transition-colors hover:bg-teal-700">
              Orçamento <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          {/* Botão Hambúrguer Mobile */}
          <button 
            className="md:hidden p-2 text-predserv-dark focus:outline-none"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu className="h-6 w-6" />
          </button>

        </div>
      </div>

      {/* OVERLAY E MENU MOBILE */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex justify-end">
          
          {/* Fundo escuro - Se clicar nele, fecha o menu */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Gaveta branca lateral */}
          <div className="relative h-full w-72 bg-white p-6 shadow-2xl animate-slide-in-right flex flex-col">
            
            {/* Cabeçalho do menu mobile com botão Fechar */}
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-1 font-bold text-xl tracking-tighter">
                <span className="text-predserv-teal">Pred</span>
                <span className="text-predserv-yellow">serv</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 text-gray-400 hover:text-predserv-teal transition-colors focus:outline-none"
                aria-label="Fechar menu"
              >
                <X className="h-7 w-7" />
              </button>
            </div>
            
            {/* Links do Menu */}
            <nav className="flex flex-col gap-5 flex-1">
              {navItems.map((item, index) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  // MÁGICA AQUI: Ao clicar no link, o menu fecha sozinho!
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="animate-fade-up border-b border-gray-100 pb-3 text-lg font-medium text-gray-700 transition-colors hover:text-predserv-teal" 
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Mobile no rodapé do menu */}
            <div className="mt-auto pt-6 border-t border-gray-100">
              <a 
                href={companyInfo.whatsappLink} 
                target="_blank" 
                rel="noreferrer" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-predserv-teal text-white py-4 rounded-lg font-bold text-center flex items-center justify-center gap-2 hover:bg-teal-700 transition-colors"
              >
                Falar no WhatsApp
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}