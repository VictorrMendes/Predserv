'use client';

import React from 'react';
import { useState } from 'react';
import { HardHat, ChevronRight, Menu, X, Home, Hammer } from 'lucide-react';
import { companyInfo } from '@/data/content';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ["Início", "Sobre", "Serviços", "Projetos", "Contato"];

  return (
    <>
    <header className="animate-fade-in sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#topo" className="flex items-center gap-2">
            <Home className="h-7 w-7 text-predserv-teal" />
            <div className="flex items-center gap-1 font-bold text-2xl tracking-tighter">
              <span className="text-predserv-teal">Pred</span>
              <span className="text-predserv-yellow">serv</span>
              <Hammer className="h-5 w-5 text-predserv-yellow" />
            </div>
          </a>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="relative font-medium text-gray-600 transition-colors hover:text-predserv-teal group">
                {item}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-predserv-teal transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex flex-col items-end mr-4">
              <span className="text-xs text-gray-500">Solicite via WhatsApp</span>
              <a href={companyInfo.whatsappLink} target="_blank" rel="noreferrer" className="font-bold text-predserv-dark transition-colors hover:text-predserv-teal">
                {companyInfo.phone}
              </a>
            </div>
            <a href="#contato" className="inline-flex items-center gap-2 rounded-md bg-predserv-teal px-6 py-2 font-bold text-white transition-colors hover:bg-teal-700">
              Orçamento <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          <button type="button" className="p-2 text-predserv-dark md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>

    {isMobileMenuOpen ? (
      <div className="fixed inset-0 z-50 bg-black/40 md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
        <div className="absolute right-0 top-0 h-full w-72 bg-white p-6 shadow-xl animate-slide-in-right" onClick={(event) => event.stopPropagation()}>
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-xl text-predserv-teal">
              <Home className="h-5 w-5 text-predserv-teal" />
              <span className="text-predserv-teal">Pred</span>
              <span className="text-predserv-yellow">serv</span>
              <Hammer className="h-5 w-5 text-predserv-yellow" />
            </div>
            <button type="button" onClick={() => setIsMobileMenuOpen(false)} className="p-1 text-gray-500">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="border-b border-gray-100 pb-2 text-lg font-medium text-gray-700 transition-colors hover:text-predserv-teal">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    ) : null}
    </>
  );
}