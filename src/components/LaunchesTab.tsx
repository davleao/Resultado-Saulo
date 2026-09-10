import React, { useState } from 'react';
import { 
  Rocket, 
  ArrowUpRight, 
  ArrowDownRight, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Wallet, 
  Calendar, 
  Layers, 
  Percent, 
  Award, 
  AlertTriangle,
  Info,
  CheckCircle2,
  PieChart as PieIcon,
  Zap,
  Target
} from 'lucide-react';
import { 
  LAUNCH_CYCLES, 
  GRAND_TOTALS, 
  formatBRL, 
  formatPercent 
} from '../data/launchData';
import { LaunchCycleSummary } from '../types';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  Cell 
} from 'recharts';

export const LaunchesTab: React.FC = () => {
  const [selectedLaunchId, setSelectedLaunchId] = useState<'all' | 'launch1' | 'launch2' | 'launch3'>('all');

  const selectedLaunch = LAUNCH_CYCLES.find((l) => l.id === selectedLaunchId);

  // Data for comparative chart
  const comparativeChartData = LAUNCH_CYCLES.map((l) => ({
    name: l.shortName,
    fullName: l.name,
    faturamentoLiquido: l.faturamentoLiquido,
    custoTotal: l.custoTotal,
    lucroPeriodo: l.lucroPeriodo,
    trafego: l.investimentoTrafego,
    roas: l.roasLiquido,
  }));

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner with Launch Selector */}
      <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-[#121218] via-[#16141a] to-[#121218] border border-[#262638] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center gap-1.5">
                <Rocket className="w-3.5 h-3.5 text-orange-400" />
                3 Lançamentos Oficiais
              </span>
              <span className="text-xs text-neutral-400">
                Fevereiro, Junho e Setembro 2026
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Resultados Separados por Lançamento
            </h2>
            <p className="text-xs text-neutral-400 max-w-2xl mt-1.5 leading-relaxed">
              Analise detalhadamente quanto faturamos, quais foram exatamente os custos, quanto ficou para cada sócio e qual foi o ROAS de cada abertura de carrinho.
            </p>
          </div>

          {/* Selector Buttons */}
          <div className="flex items-center gap-1.5 bg-[#0a0a0e] p-1.5 rounded-xl border border-[#1f1f2d] shrink-0 overflow-x-auto">
            <button
              type="button"
              onClick={() => setSelectedLaunchId('all')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                selectedLaunchId === 'all'
                  ? 'bg-orange-500 text-black shadow-md shadow-orange-500/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Comparativo (Todos)
            </button>
            <button
              type="button"
              onClick={() => setSelectedLaunchId('launch1')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                selectedLaunchId === 'launch1'
                  ? 'bg-orange-500 text-black shadow-md shadow-orange-500/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              1º Lançamento (Fev)
            </button>
            <button
              type="button"
              onClick={() => setSelectedLaunchId('launch2')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                selectedLaunchId === 'launch2'
                  ? 'bg-orange-500 text-black shadow-md shadow-orange-500/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              2º Lançamento (Jun)
            </button>
            <button
              type="button"
              onClick={() => setSelectedLaunchId('launch3')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                selectedLaunchId === 'launch3'
                  ? 'bg-orange-500 text-black shadow-md shadow-orange-500/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              3º Lançamento (Set)
            </button>
          </div>
        </div>
      </div>

      {/* VIEW 1: COMPARATIVE VIEW (When 'all' is selected) */}
      {selectedLaunchId === 'all' && (
        <div className="space-y-8">
          {/* 3 Launches Side-by-Side Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {LAUNCH_CYCLES.map((launch) => (
              <div
                key={launch.id}
                className={`p-6 rounded-2xl bg-[#111116] border transition-all hover:border-[#38384f] flex flex-col justify-between ${
                  launch.id === 'launch2' 
                    ? 'border-orange-500/40 shadow-[0_0_25px_-5px_rgba(249,115,22,0.15)]' 
                    : 'border-[#222230]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-xl bg-orange-500/10 text-orange-400 font-bold text-xs flex items-center justify-center border border-orange-500/20">
                        {launch.shortName}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">{launch.name}</h3>
                        <span className="text-[11px] text-neutral-400">{launch.season} ({launch.period})</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-orange-500 text-black">
                      ROAS {launch.roasLiquido}x
                    </span>
                  </div>

                  <p className="text-xs text-neutral-300 mb-4 pb-3 border-b border-[#1f1f2c] leading-relaxed">
                    {launch.destaque}
                  </p>

                  {/* Financial Highlights */}
                  <div className="space-y-2.5 mb-5 text-xs">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#161622] border border-[#1f1f2e]">
                      <span className="text-neutral-400">Faturamento Líquido:</span>
                      <span className="font-mono-num font-bold text-emerald-400 text-sm">
                        + {formatBRL(launch.faturamentoLiquido)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#161622] border border-[#1f1f2e]">
                      <span className="text-neutral-400">Custos Totais:</span>
                      <span className="font-mono-num font-bold text-rose-400 text-sm">
                        - {formatBRL(launch.custoTotal)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#181826] border border-[#28283d]">
                      <span className="text-white font-semibold">Lucro Líquido Real:</span>
                      <span className={`font-mono-num font-bold text-base ${launch.lucroPeriodo >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {formatBRL(launch.lucroPeriodo)}
                      </span>
                    </div>
                  </div>

                  {/* Split Preview */}
                  <div className="p-3.5 rounded-xl bg-[#0c0c10] border border-[#1d1d28] space-y-2 text-xs">
                    <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">
                      Lucro Líquido no Bolso por Sócio:
                    </span>
                    <div className="flex items-center justify-between text-neutral-200">
                      <span className="text-orange-400 font-semibold">Saulo (50%):</span>
                      <span className={`font-mono-num font-bold ${launch.splitSocios.saulo.lucro >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {formatBRL(launch.splitSocios.saulo.lucro)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-neutral-200">
                      <span className="text-sky-400 font-semibold">ZYON (25%):</span>
                      <span className={`font-mono-num font-bold ${launch.splitSocios.zyon.lucro >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {formatBRL(launch.splitSocios.zyon.lucro)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-neutral-200">
                      <span className="text-purple-400 font-semibold">CAJO (25%):</span>
                      <span className={`font-mono-num font-bold ${launch.splitSocios.cajo.lucro >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {formatBRL(launch.splitSocios.cajo.lucro)}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedLaunchId(launch.id)}
                  className="mt-5 w-full py-2.5 rounded-xl bg-[#1c1c28] hover:bg-orange-500 hover:text-black text-neutral-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Ver Detalhes & Custos do {launch.shortName}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Comparative Chart */}
          <div className="p-6 rounded-2xl bg-[#111116] border border-[#22222f]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <h4 className="text-base font-bold text-white">
                  Comparativo Financeiro dos 3 Lançamentos
                </h4>
                <p className="text-xs text-neutral-400">
                  Faturamento Líquido vs Custos Totais vs Lucro Líquido Real em cada campanha
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <span className="w-3 h-3 rounded bg-emerald-500" /> Faturamento
                </span>
                <span className="flex items-center gap-1.5 text-rose-400 font-medium">
                  <span className="w-3 h-3 rounded bg-rose-500" /> Custos
                </span>
                <span className="flex items-center gap-1.5 text-orange-400 font-medium">
                  <span className="w-3 h-3 rounded bg-orange-500" /> Lucro Líquido
                </span>
              </div>
            </div>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparativeChartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <XAxis dataKey="fullName" stroke="#71717a" fontSize={11} tickLine={false} axisLine={{ stroke: '#272733' }} />
                  <YAxis stroke="#71717a" fontSize={11} tickLine={false} axisLine={{ stroke: '#272733' }} tickFormatter={(val) => `R$${(val/1000).toFixed(0)}k`} />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const d = payload[0].payload;
                        return (
                          <div className="p-3 rounded-xl bg-[#181822] border border-[#2c2c3d] text-xs space-y-1">
                            <p className="font-bold text-white">{d.fullName}</p>
                            <p className="text-emerald-400">Faturamento Líquido: {formatBRL(d.faturamentoLiquido)}</p>
                            <p className="text-rose-400">Custos Totais: - {formatBRL(d.custoTotal)}</p>
                            <p className="text-orange-400 font-bold">Lucro: {formatBRL(d.lucroPeriodo)}</p>
                            <p className="text-sky-400">ROAS Líquido: {d.roas}x</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="faturamentoLiquido" name="Faturamento Líquido" fill="#10b981" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="custoTotal" name="Custos Totais" fill="#ef4444" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="lucroPeriodo" name="Lucro Líquido" fill="#f97316" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: INDIVIDUAL LAUNCH DETAIL (When L1, L2 or L3 is selected) */}
      {selectedLaunch && selectedLaunchId !== 'all' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Header of selected launch */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#14141d] border border-[#242436]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-orange-500 text-black flex items-center justify-center font-extrabold text-xl shadow-lg shadow-orange-500/20">
                {selectedLaunch.shortName}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {selectedLaunch.name} ({selectedLaunch.season})
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30">
                    Pico em {selectedLaunch.peakMonth}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Período apurado: {selectedLaunch.period} • {selectedLaunch.destaque}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedLaunchId('all')}
              className="px-4 py-2 rounded-xl bg-[#1c1c28] hover:bg-[#252536] text-neutral-300 text-xs font-semibold transition-all shrink-0"
            >
              ← Voltar ao Comparativo
            </button>
          </div>

          {/* 4 Core Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#111116] border border-emerald-500/30">
              <span className="text-xs uppercase font-bold text-neutral-400 block mb-1">Faturamento Líquido</span>
              <div className="text-2xl font-bold font-mono-num text-emerald-400">
                {formatBRL(selectedLaunch.faturamentoLiquido)}
              </div>
              <p className="text-[11px] text-neutral-400 mt-1">
                Faturamento Bruto: {formatBRL(selectedLaunch.faturamentoBruto)}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#111116] border border-rose-500/30">
              <span className="text-xs uppercase font-bold text-neutral-400 block mb-1">Custos & Tráfego</span>
              <div className="text-2xl font-bold font-mono-num text-rose-400">
                - {formatBRL(selectedLaunch.custoTotal)}
              </div>
              <p className="text-[11px] text-neutral-400 mt-1">
                Tráfego: {formatBRL(selectedLaunch.investimentoTrafego)} • Ferramentas: {formatBRL(selectedLaunch.custosOperacionais)}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#111116] border border-orange-500/40">
              <span className="text-xs uppercase font-bold text-neutral-400 block mb-1">Lucro Líquido Real</span>
              <div className={`text-2xl font-bold font-mono-num ${selectedLaunch.lucroPeriodo >= 0 ? 'text-white' : 'text-rose-400'}`}>
                {formatBRL(selectedLaunch.lucroPeriodo)}
              </div>
              <p className="text-[11px] text-neutral-400 mt-1">
                Margem Líquida: <strong className="text-emerald-400">{formatPercent(selectedLaunch.margemLucro)}</strong>
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#111116] border border-sky-500/30">
              <span className="text-xs uppercase font-bold text-neutral-400 block mb-1">ROAS do Tráfego</span>
              <div className="text-2xl font-bold font-mono-num text-orange-400">
                {selectedLaunch.roasLiquido}x
              </div>
              <p className="text-[11px] text-neutral-400 mt-1">
                ROAS Bruto: {selectedLaunch.roasBruto}x • ROI: {selectedLaunch.roi > 0 ? `+${selectedLaunch.roi.toFixed(0)}%` : `${selectedLaunch.roi.toFixed(0)}%`}
              </p>
            </div>
          </div>

          {/* PARTNER SPLIT FOR THIS SPECIFIC LAUNCH */}
          <div className="p-6 rounded-2xl bg-[#111116] border border-[#22222f]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <PieIcon className="w-4 h-4 text-orange-400" />
                  <span>Divisão dos Sócios Deste Lançamento: Quanto Ficou para Cada Um?</span>
                </h4>
                <p className="text-xs text-neutral-400">
                  Rateio exato das receitas recebidas e despesas debitadas no {selectedLaunch.name}
                </p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#191924] text-neutral-300 border border-[#29293a]">
                50% Saulo • 25% ZYON • 25% CAJO
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Saulo Card */}
              <div className="p-5 rounded-xl bg-[#14141d] border border-orange-500/40 relative overflow-hidden">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-sm font-bold text-white block">Saulo (Expert)</span>
                    <span className="text-[11px] text-orange-400 font-semibold">Cota de 50%</span>
                  </div>
                  <span className="w-7 h-7 rounded-lg bg-orange-500 text-black flex items-center justify-center font-bold text-xs">
                    50%
                  </span>
                </div>

                <div className="space-y-2 text-xs mb-4">
                  <div className="flex justify-between text-neutral-400">
                    <span>Faturamento (50%):</span>
                    <span className="font-mono-num text-emerald-400 font-semibold">+ {formatBRL(selectedLaunch.splitSocios.saulo.receitas)}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Despesas (50%):</span>
                    <span className="font-mono-num text-rose-400 font-semibold">- {formatBRL(selectedLaunch.splitSocios.saulo.despesas)}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#222230] flex items-baseline justify-between">
                  <span className="text-xs font-bold text-white">Lucro Líquido no Bolso:</span>
                  <span className={`text-xl font-bold font-mono-num ${selectedLaunch.splitSocios.saulo.lucro >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {formatBRL(selectedLaunch.splitSocios.saulo.lucro)}
                  </span>
                </div>
              </div>

              {/* ZYON Card */}
              <div className="p-5 rounded-xl bg-[#14141d] border border-sky-500/30">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-sm font-bold text-white block">ZYON (Agência)</span>
                    <span className="text-[11px] text-sky-400 font-semibold">Cota de 25%</span>
                  </div>
                  <span className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs border border-sky-500/30">
                    25%
                  </span>
                </div>

                <div className="space-y-2 text-xs mb-4">
                  <div className="flex justify-between text-neutral-400">
                    <span>Faturamento (25%):</span>
                    <span className="font-mono-num text-emerald-400 font-semibold">+ {formatBRL(selectedLaunch.splitSocios.zyon.receitas)}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Despesas (25%):</span>
                    <span className="font-mono-num text-rose-400 font-semibold">- {formatBRL(selectedLaunch.splitSocios.zyon.despesas)}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#222230] flex items-baseline justify-between">
                  <span className="text-xs font-bold text-white">Lucro Líquido:</span>
                  <span className={`text-xl font-bold font-mono-num ${selectedLaunch.splitSocios.zyon.lucro >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {formatBRL(selectedLaunch.splitSocios.zyon.lucro)}
                  </span>
                </div>
              </div>

              {/* CAJO Card */}
              <div className="p-5 rounded-xl bg-[#14141d] border border-purple-500/30">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-sm font-bold text-white block">CAJO (Agência)</span>
                    <span className="text-[11px] text-purple-400 font-semibold">Cota de 25%</span>
                  </div>
                  <span className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs border border-purple-500/30">
                    25%
                  </span>
                </div>

                <div className="space-y-2 text-xs mb-4">
                  <div className="flex justify-between text-neutral-400">
                    <span>Faturamento (25%):</span>
                    <span className="font-mono-num text-emerald-400 font-semibold">+ {formatBRL(selectedLaunch.splitSocios.cajo.receitas)}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Despesas (25%):</span>
                    <span className="font-mono-num text-rose-400 font-semibold">- {formatBRL(selectedLaunch.splitSocios.cajo.despesas)}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#222230] flex items-baseline justify-between">
                  <span className="text-xs font-bold text-white">Lucro Líquido:</span>
                  <span className={`text-xl font-bold font-mono-num ${selectedLaunch.splitSocios.cajo.lucro >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {formatBRL(selectedLaunch.splitSocios.cajo.lucro)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ITEM-BY-ITEM EXPENSES TABLE FOR THIS SPECIFIC LAUNCH */}
          <div className="p-6 rounded-2xl bg-[#111116] border border-[#22222f]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-rose-400" />
                  <span>Detalhamento Completo dos Custos do {selectedLaunch.name}</span>
                </h4>
                <p className="text-xs text-neutral-400">
                  Veja exatamente quais foram os custos operacionais, ferramentas e tráfego deste ciclo
                </p>
              </div>
              <span className="text-xs font-mono-num font-bold text-rose-400 bg-rose-500/10 px-3 py-1 rounded-lg border border-rose-500/20">
                Total Custos: - {formatBRL(selectedLaunch.custoTotal)}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#222230] text-neutral-400">
                    <th className="pb-3 font-semibold">Item de Custo</th>
                    <th className="pb-3 font-semibold">Categoria</th>
                    <th className="pb-3 font-semibold text-right text-rose-400">Valor Total (100%)</th>
                    <th className="pb-3 font-semibold text-right text-orange-400">Parte Saulo (50%)</th>
                    <th className="pb-3 font-semibold text-right text-sky-400">Parte ZYON (25%)</th>
                    <th className="pb-3 font-semibold text-right text-purple-400">Parte CAJO (25%)</th>
                    <th className="pb-3 font-semibold pl-4">Observações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1b1b26]">
                  {selectedLaunch.custosDetalhados.map((custo, idx) => (
                    <tr key={idx} className="hover:bg-[#161622] transition-colors">
                      <td className="py-3.5 font-semibold text-white">
                        {custo.item}
                      </td>
                      <td className="py-3.5">
                        <span className="px-2 py-0.5 rounded text-[11px] bg-[#1a1a26] text-neutral-300 border border-[#272738]">
                          {custo.categoria}
                        </span>
                      </td>
                      <td className="py-3.5 text-right font-mono-num font-bold text-rose-400">
                        - {formatBRL(custo.valorTotal)}
                      </td>
                      <td className="py-3.5 text-right font-mono-num font-medium text-neutral-300">
                        - {formatBRL(custo.valorSaulo)}
                      </td>
                      <td className="py-3.5 text-right font-mono-num font-medium text-neutral-300">
                        - {formatBRL(custo.valorAgencias)}
                      </td>
                      <td className="py-3.5 text-right font-mono-num font-medium text-neutral-300">
                        - {formatBRL(custo.valorAgencias)}
                      </td>
                      <td className="py-3.5 pl-4 text-neutral-400 text-[11px]">
                        {custo.detalhe}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t border-[#262638] font-bold text-white bg-[#14141d]">
                    <td className="py-3.5 font-bold" colSpan={2}>
                      Total de Custos do {selectedLaunch.shortName}
                    </td>
                    <td className="py-3.5 text-right font-mono-num text-rose-400 font-bold text-sm">
                      - {formatBRL(selectedLaunch.custoTotal)}
                    </td>
                    <td className="py-3.5 text-right font-mono-num text-orange-400 font-bold">
                      - {formatBRL(selectedLaunch.splitSocios.saulo.despesas)}
                    </td>
                    <td className="py-3.5 text-right font-mono-num text-sky-400 font-bold">
                      - {formatBRL(selectedLaunch.splitSocios.zyon.despesas)}
                    </td>
                    <td className="py-3.5 text-right font-mono-num text-purple-400 font-bold">
                      - {formatBRL(selectedLaunch.splitSocios.cajo.despesas)}
                    </td>
                    <td className="py-3.5 pl-4 text-[11px] text-emerald-400">
                      Rateio 100% conciliado
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
