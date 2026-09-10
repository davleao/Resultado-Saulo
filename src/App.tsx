/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { NavigationTabs } from './components/NavigationTabs';
import { OverviewTab } from './components/OverviewTab';
import { LaunchesTab } from './components/LaunchesTab';
import { RoasTab } from './components/RoasTab';
import { ExpensesTab } from './components/ExpensesTab';
import { SauloTab } from './components/SauloTab';
import { AgenciesTab } from './components/AgenciesTab';
import { PlatformFeaturesTab } from './components/PlatformFeaturesTab';
import { TabType } from './types';
import { formatBRL, formatPercent, SAULO_DATA, ZYON_DATA, CAJO_DATA } from './data/launchData';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [executiveMode, setExecutiveMode] = useState<boolean>(false);
  const [selectedCycleFilter, setSelectedCycleFilter] = useState<string>('all');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <OverviewTab
            onNavigateToTab={(tab: TabType) => setActiveTab(tab)}
            executiveMode={executiveMode}
          />
        );
      case 'launches':
        return <LaunchesTab />;
      case 'roas':
        return <RoasTab />;
      case 'saulo':
        return <SauloTab />;
      case 'agencies':
        return <AgenciesTab />;
      case 'expenses':
        return <ExpensesTab />;
      case 'platform':
        return <PlatformFeaturesTab />;
      default:
        return (
          <OverviewTab
            onNavigateToTab={(tab: TabType) => setActiveTab(tab)}
            executiveMode={executiveMode}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#08080b] text-[#f3f4f6] font-sans flex flex-col selection:bg-orange-500 selection:text-black">
      {/* Top Header */}
      <Header
        executiveMode={executiveMode}
        onToggleExecutiveMode={() => setExecutiveMode((prev) => !prev)}
        onTriggerCelebration={() => {}}
        selectedCycleFilter={selectedCycleFilter}
        onCycleFilterChange={(cycle) => setSelectedCycleFilter(cycle)}
      />

      {/* Navigation Tabs Bar */}
      <NavigationTabs activeTab={activeTab} onTabChange={(tab) => setActiveTab(tab)} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 lg:px-8 py-6 lg:py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            {renderActiveTab()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1c1c26] bg-[#07070a] py-6 px-4 lg:px-8 mt-12 text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-neutral-300 font-semibold">
              Lançamento Digital • Divisão Financeira 2026
            </span>
            <span className="text-neutral-600">|</span>
            <span>Saulo (50%) • ZYON (25%) • CAJO (25%)</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Faturamento Líquido: <strong className="text-emerald-400 font-mono-num">R$ 40.272,10</strong></span>
            <span>Despesas: <strong className="text-rose-400 font-mono-num">R$ 21.646,08</strong></span>
            <span>Lucro Líquido: <strong className="text-white font-mono-num">R$ 18.626,02</strong></span>
          </div>
        </div>
      </footer>

      {/* Print-only View: When user clicks Print/Export, render a clean executive PDF layout */}
      <div className="hidden print:block fixed inset-0 bg-white text-black p-8 z-50 overflow-auto">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="border-b-2 border-black pb-4 flex justify-between items-end">
            <div>
              <h1 className="text-2xl font-black uppercase">Relatório Executivo de Lançamento</h1>
              <p className="text-sm text-gray-600">Prestação de Contas e Rateio Financeiro Oficial 2026</p>
            </div>
            <div className="text-right text-xs">
              <p className="font-bold">Expert: Saulo (50%)</p>
              <p>Agências: ZYON (25%) & CAJO (25%)</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 border p-4 rounded bg-gray-50">
            <div>
              <span className="text-xs text-gray-500 block">Faturamento Líquido</span>
              <span className="text-xl font-bold text-green-700">{formatBRL(40272.10)}</span>
            </div>
            <div>
              <span className="text-xs text-gray-500 block">Custos e Tráfego</span>
              <span className="text-xl font-bold text-red-700">{formatBRL(21646.08)}</span>
            </div>
            <div>
              <span className="text-xs text-gray-500 block">Lucro Líquido Real</span>
              <span className="text-xl font-bold text-black">{formatBRL(18626.02)}</span>
            </div>
          </div>

          <table className="w-full text-left text-sm border-collapse border">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="p-2 border">Participante</th>
                <th className="p-2 border">Papel</th>
                <th className="p-2 border">Cota</th>
                <th className="p-2 border text-right">Entradas (R$)</th>
                <th className="p-2 border text-right">Despesas (R$)</th>
                <th className="p-2 border text-right font-bold">Lucro Líquido (R$)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border font-bold">Saulo</td>
                <td className="p-2 border">Expert</td>
                <td className="p-2 border">50%</td>
                <td className="p-2 border text-right text-green-700">{formatBRL(SAULO_DATA.totalReceitas)}</td>
                <td className="p-2 border text-right text-red-700">{formatBRL(SAULO_DATA.totalDespesas)}</td>
                <td className="p-2 border text-right font-bold">{formatBRL(SAULO_DATA.lucroLiquido)}</td>
              </tr>
              <tr>
                <td className="p-2 border font-bold">ZYON</td>
                <td className="p-2 border">Agência Marketing</td>
                <td className="p-2 border">25%</td>
                <td className="p-2 border text-right text-green-700">{formatBRL(ZYON_DATA.totalReceitas)}</td>
                <td className="p-2 border text-right text-red-700">{formatBRL(ZYON_DATA.totalDespesas)}</td>
                <td className="p-2 border text-right font-bold">{formatBRL(ZYON_DATA.lucroLiquido)}</td>
              </tr>
              <tr>
                <td className="p-2 border font-bold">CAJO</td>
                <td className="p-2 border">Agência Infra & Páginas</td>
                <td className="p-2 border">25%</td>
                <td className="p-2 border text-right text-green-700">{formatBRL(CAJO_DATA.totalReceitas)}</td>
                <td className="p-2 border text-right text-red-700">{formatBRL(CAJO_DATA.totalDespesas)}</td>
                <td className="p-2 border text-right font-bold">{formatBRL(CAJO_DATA.lucroLiquido)}</td>
              </tr>
            </tbody>
          </table>

          <div className="border-t pt-4 text-xs text-gray-500">
            Documento consolidado a partir da planilha oficial de lançamentos.
          </div>
        </div>
      </div>
    </div>
  );
}
