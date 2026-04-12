import { 
  Layers3, 
  Paintbrush, 
  Ruler, 
  Wrench, 
  Building2, 
  Droplets,
  HardHat,
  CalendarDays,
  CheckCircle,
  LucideIcon,
  PhoneCall,
  ClipboardSignature,
  Calculator,
  Trophy,
  Camera,
  Users,
  Briefcase
} from 'lucide-react';

export interface ServiceData { title: string; description: string; icon: LucideIcon; }
export interface FeatureData { title: string; description: string; icon: LucideIcon; }
export interface ProjectData { title: string; category: string; imageUrl: string; }

export const companyInfo = {
  name: "Predserv Engenharia & Reformas Civis",
  phone: "(31) 9 9492-4044",
  whatsappLink: "https://wa.me/553194924044",
  email: "Comercial@predserv.com.br",

};

export const featuresList: FeatureData[] = [
  { title: "Profissionais Qualificados", description: "Nossa equipe é formada por especialistas experientes, treinados para entregar precisão técnica em cada etapa da sua obra.", icon: HardHat, },
  { title: "Entrega no Prazo", description: "Levamos seu cronograma a sério. Utilizamos planejamento rigoroso para garantir que sua reforma seja concluída na data combinada, sem surpresas.", icon: CalendarDays, },
  { title: "Qualidade Garantida", description: "Utilizamos materiais de primeira linha e técnicas modernas para assegurar um acabamento impecável e a durabilidade que sua estrutura merece.", icon: CheckCircle, }
];

export const servicesList: ServiceData[] = [
  { title: "Drywall e Rebaixamento", description: "Transforme ambientes com agilidade. Executamos divisórias e forros de gesso com precisão milimétrica e acabamento pronto para pintura.", icon: Layers3, },
  { title: "Pintura Profissional", description: "Aplicação técnica de tintas e texturas com preparo completo da superfície, garantindo uniformidade e vivacidade das cores.", icon: Paintbrush, },
  { title: "Instalação de Pisos e Revestimentos", description: "Assentamento especializado de porcelanato, cerâmica, piso vinílico e laminado com nivelamento perfeito e alinhamento preciso.", icon: Ruler, },
  { title: "Estruturas Metálicas", description: "Serralheria industrial e comercial. Fabricação e montagem de estruturas reforçadas para coberturas, suportes e mezaninos.", icon: Wrench, },
  { title: "Alvenaria e Reboco Liso", description: "Construção de paredes e reparos estruturais com alinhamento rigoroso e aplicação de reboco liso, pronto para o acabamento final.", icon: Building2, },
  { title: "Instalações Hidráulicas", description: "Soluções completas para redes de água e esgoto, prevenindo vazamentos e garantindo a funcionalidade de louças e metais.", icon: Droplets, }
];

export const projectsList: ProjectData[] = [
  { title: "Reforma Corporativa Premium", category: "Drywall e Acabamento", imageUrl: "/imagens/quarto.png" },
  { title: "Modernização de Fachada", category: "Estruturas Modernas", imageUrl: "/imagens/varanda.png" },
  { title: "Apartamento Alto Padrão", category: "Pisos e Revestimentos", imageUrl: "/imagens/banheiro.jpg" },
  { title: "Instalação Residencial", category: "Hidráulica e Alvenaria", imageUrl: "/imagens/pia.png" },
  { title: "Projeto Cozinha Planejada", category: "Reforma Completa", imageUrl: "/imagens/cozinha.png" },
  { title: "Reforma em Geral", category: "Pintura e Acabamentos", imageUrl: "/imagens/reforma.png" }
];

export const aboutData = {
  title: "Sobre a Predserv",
  headline: "Transformamos projetos em resultados com precisão e excelência.",
  description: "Com anos de experiência no mercado de engenharia e reformas civil, a Predserv nasceu da necessidade de entregar obras que respeitam o prazo, o orçamento e a paz de espírito do cliente. Atendemos desde revitalizações comerciais até reformas residenciais de alto padrão.",
  topics: [ "Experiência comprovada em obras de todos os portes.", "Foco em segurança e normas técnicas.", "Transparência total do início ao fim do projeto." ],
  imageUrl: "/imagens/logo.png"
};

export const workflowList = [
  { step: "01", title: "Contato Inicial", description: "Você nos conta sua necessidade e agendamos uma visita técnica sem compromisso.", icon: PhoneCall, },
  { step: "02", title: "Análise Técnica", description: "Nossos especialistas avaliam o local e definem as melhores soluções estruturais.", icon: ClipboardSignature, },
  { step: "03", title: "Orçamento Transparente", description: "Apresentamos uma proposta detalhada, sem custos ocultos e com cronograma real.", icon: Calculator, },
  { step: "04", title: "Execução Rigorosa", description: "Mão na massa com supervisão constante, limpeza diária e respeito aos prazos.", icon: HardHat, },
  { step: "05", title: "Entrega e Garantia", description: "Revisão final com o cliente, entrega das chaves e garantia de qualidade Predserv.", icon: Trophy, }
];

export const testimonialsList = [
  { name: "Carlos Eduardo", role: "Síndico Profissional", content: "A Predserv cuidou da reforma da fachada do nosso condomínio. A equipe foi extremamente pontual, limpa e o resultado valorizou o prédio instantaneamente.", },
  { name: "Mariana Silva", role: "Proprietária de Clínica", content: "Fizemos a readequação completa do nosso espaço com drywall e pintura. O nível de detalhe e o respeito ao prazo nos impressionaram muito.", },
  { name: "Roberto Mendes", role: "Empresário", content: "O que mais gostei foi a transparência no orçamento. Sem surpresas no final da obra. A estrutura metálica ficou perfeita.", }
];

export const footerLinks = {
  company: [ 
    { label: "Sobre Nós", href: "#sobre" }, 
    { label: "Nossos Serviços", href: "#servicos" }, 
    { label: "Portfólio", href: "#projetos" } 
  ],
  services: [ 
    { label: "Drywall e Gesso", href: "#servicos" }, 
    { label: "Pintura Profissional", href: "#servicos" }, 
    { label: "Estruturas Metálicas", href: "#servicos" } 
  ],
  social: [ 
    { icon: Camera, href: "#" },   
    { icon: Users, href: "#" },     
    { icon: Briefcase, href: "#" } 
  ]
}; 