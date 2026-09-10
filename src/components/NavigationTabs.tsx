import React from 'react';
import { TabType } from '../types';
import { 
  PieChart, 
  Rocket, 
  Target, 
  TrendingDown, 
  UserCheck, 
  Building2, 
  Cpu,
  Sparkles
} from 'lucide-react';

interface NavigationTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const NavigationTabs: React.FC<NavigationTabsProps> = ({
  activeTab,
  onTabChange,
}) => {
  const tabs = [
    {
      id: 'overview' as TabType,
      label: 'Visão Geral & Sócios',
      shortLabel: 'Geral',
      badge: '3 Sócios',
      icon: PieChart,
      description: 'Quem ficou com o quê e resultado macro consolidado',
    },
    {
      id: 'launches' as TabType,
      label: 'Separado por Lançamento',
      shortLabel: 'Lançamentos',
      badge: 'L1 • L2 • L3',
      icon: Rocket,
      description: 'Resultado detalhado de cada ciclo de lançamento',
    },
    {
      id: 'roas' as TabType,
      label: 'Matriz de ROAS',
      shortLabel: 'ROAS',
      badge: '2.83x Médio',
      icon: Target,
      description: 'Eficiência de tráfego de todos os lançamentos',
    },
    {
      id: 'saulo' as TabType,
      label: 'Resumo Saulo (50%)',
      shortLabel: 'Saulo',
      badge: 'R$ 9,3k Lucro',
      icon: UserCheck,
      description: 'Entradas, despesas e lucro do expert',
    },
    {
      id: 'agencies' as TabType,
      label: 'Resumo ZYON & CAJO',
      shortLabel: 'Agências',
      badge: '25% + 25%',
      icon: Building2,
      description: 'Divisão paritária das duas agências de marketing',
    },
    {
      id: 'expenses' as TabType,
      label: 'Custos & Ferramentas',
      shortLabel: 'Custos',
      badge: 'R$ 21,6k',
      icon: TrendingDown,
      description: 'Detalhamento de ferramentas, anúncios e rateios',
    },
    {
      id: 'platform' as TabType,
      label: 'Melhorias da Plataforma',
      shortLabel: 'Features',
      badge: 'Simulador 4º L',
      icon: Cpu,
      description: 'Novas features de software, simulador e automações',
    },
  ];

  return (
    <div className="w-full bg-[#0b0b0e] border-b border-[#1c1c26] px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 overflow-x-auto py-2.5 no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                type="button"
                onClick={() => onTabChange(tab.id)}
                className={`relative group flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-orange-500 text-black shadow-md shadow-orange-500/25 font-bold'
                    : 'bg-[#121217] text-neutral-400 hover:text-white hover:bg-[#181822] border border-[#1f1f2a]'
                }`}
              >
                <Icon
                  className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                    isActive ? 'text-black stroke-[2.4]' : 'text-neutral-400 group-hover:text-orange-400'
                  }`}
                />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                      isActive
                        ? 'bg-black/20 text-black'
                        : 'bg-[#1c1c28] text-neutral-400 group-hover:text-orange-300'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
