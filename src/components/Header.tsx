import React from 'react';
import { Sparkles, Printer, Eye, SlidersHorizontal, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeaderProps {
  executiveMode: boolean;
  onToggleExecutiveMode: () => void;
  onTriggerCelebration: () => void;
  selectedCycleFilter: string;
  onCycleFilterChange: (cycle: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  executiveMode,
  onToggleExecutiveMode,
  onTriggerCelebration,
  selectedCycleFilter,
  onCycleFilterChange,
}) => {
  const handlePrint = () => {
    window.print();
  };

  const handleConfetti = () => {
    onTriggerCelebration();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f97316', '#ffedd5', '#10b981', '#38bdf8'],
    });
  };

  return (
    <header className="sticky top-0 z-30 bg-[#0b0b0e]/90 backdrop-blur-md border-b border-[#1c1c26] px-4 lg:px-8 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Brand & Title */}
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-black font-extrabold shadow-lg shadow-orange-500/20">
            <span className="text-xl">▲</span>
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-lg lg:text-xl font-extrabold text-white tracking-tight">
                Dashboard Financeiro do Lançamento
              </h1>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-orange-500/15 text-orange-400 border border-orange-500/30">
                Curso Online • 2026
              </span>
            </div>
            <p className="text-xs text-neutral-400 mt-0.5">
              Prestação de contas e divisão de resultados: <strong className="text-neutral-200">Saulo (50%)</strong> • <strong className="text-neutral-200">ZYON (25%)</strong> • <strong className="text-neutral-200">CAJO (25%)</strong>
            </p>
          </div>
        </div>

        {/* Action Controls & Filters */}
        <div className="flex items-center gap-2.5 flex-wrap">
          {/* Cycle filter dropdown */}
          <div className="flex items-center gap-1.5 bg-[#14141c] p-1 rounded-xl border border-[#22222f] text-xs">
            <span className="text-neutral-500 pl-2 pr-1 font-medium hidden sm:inline">Período:</span>
            <select
              value={selectedCycleFilter}
              onChange={(e) => onCycleFilterChange(e.target.value)}
              className="bg-transparent text-neutral-200 font-medium px-2 py-1 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 cursor-pointer text-xs"
            >
              <option value="all" className="bg-[#14141c] text-white">Ano Completo (Fev a Dez)</option>
              <option value="Ciclo 1 (Fev-Mai)" className="bg-[#14141c] text-white">1º Lançamento (Fev a Mai)</option>
              <option value="Ciclo 2 (Jun-Ago)" className="bg-[#14141c] text-white">2º Lançamento (Jun a Ago)</option>
              <option value="Ciclo 3 (Set-Dez)" className="bg-[#14141c] text-white">3º Lançamento (Set a Dez)</option>
            </select>
          </div>

          {/* Toggle Executive Mode */}
          <button
            type="button"
            onClick={onToggleExecutiveMode}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
              executiveMode
                ? 'bg-orange-500 text-black border-orange-400 shadow-md shadow-orange-500/20'
                : 'bg-[#14141c] text-neutral-300 border-[#22222f] hover:border-orange-500/40 hover:text-white'
            }`}
            title="Alterna entre modo apresentação executiva para cliente ou auditoria completa"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{executiveMode ? 'Modo Apresentação' : 'Modo Auditoria'}</span>
          </button>

          {/* Celebrate Confetti */}
          <button
            type="button"
            onClick={handleConfetti}
            className="p-2 rounded-xl bg-[#14141c] text-neutral-300 border border-[#22222f] hover:text-orange-400 hover:border-orange-500/40 transition-colors"
            title="Comemorar resultados do lançamento!"
          >
            <Sparkles className="w-4 h-4 text-orange-400" />
          </button>

          {/* Export / Print Button */}
          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#14141c] text-neutral-300 border border-[#22222f] hover:text-white hover:border-neutral-500 transition-colors"
            title="Exportar ou Imprimir relatório em PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Exportar / Imprimir</span>
          </button>
        </div>
      </div>
    </header>
  );
};
