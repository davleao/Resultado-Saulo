import React from 'react';
import { 
  Target, 
  TrendingUp, 
  DollarSign, 
  Zap, 
  Award, 
  AlertTriangle, 
  ArrowUpRight, 
  BarChart3, 
  CheckCircle2, 
  HelpCircle,
  Percent
} from 'lucide-react';
import { 
  LAUNCH_CYCLES, 
  GRAND_TOTALS, 
  formatBRL, 
  formatPercent 
} from '../data/launchData';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  Cell, 
  LineChart, 
  Line, 
  CartesianGrid 
} from 'recharts';

export const RoasTab: React.FC = () => {
  const roasChartData = [
    {
      name: '1º Lançamento',
      shortName: 'L1 (Fev)',
      roasBruto: 5.29,
      roasLiquido: 4.69,
      trafego: 3046.33,
      faturamentoLiquido: 14310.56,
      lucro: 8499.77,
      lucroPorRealTrafego: 2.79,
    },
    {
      name: '2º Lançamento',
      shortName: 'L2 (Jun)',
      roasBruto: 4.45,
      roasLiquido: 3.73,
      trafego: 4148.44,
      faturamentoLiquido: 15466.92,
      lucro: 10297.48,
      lucroPorRealTrafego: 2.48,
    },
    {
      name: '3º Lançamento',
      shortName: 'L3 (Set)',
      roasBruto: 1.44,
      roasLiquido: 1.35,
      trafego: 7054.89,
      faturamentoLiquido: 9503.18,
      lucro: 1876.29,
      lucroPorRealTrafego: 0.27,
    },
    {
      name: 'Consolidado Geral',
      shortName: 'Média Geral',
      roasBruto: 3.14,
      roasLiquido: 2.83,
      trafego: 14249.66,
      faturamentoLiquido: 40272.10,
      lucro: 18626.02,
      lucroPorRealTrafego: 1.31,
    },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Header */}
      <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-[#121218] via-[#16141a] to-[#121218] border border-[#262638] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-orange-400" />
                Matriz de Eficiência de Mídia
              </span>
              <span className="text-xs text-neutral-400">
                Retorno sobre Investimento em Tráfego (ROAS)
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Análise Organizada de ROAS de Todos os Lançamentos
            </h2>
            <p className="text-xs text-neutral-400 max-w-2xl mt-1.5 leading-relaxed">
              O projeto investiu um total acumulado de <strong className="text-rose-400 font-semibold">R$ 14.249,66</strong> em tráfego pago nos 3 ciclos e gerou <strong className="text-emerald-400 font-semibold">R$ 40.272,10</strong> em receita líquida, alcançando um ROAS Líquido Médio consolidado de <strong className="text-orange-400 font-semibold">2.83x</strong>.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-3 rounded-xl bg-[#0e0e14] border border-[#242436] text-right">
              <span className="text-[11px] text-neutral-400 block font-medium">ROAS Líquido Geral</span>
              <span className="text-2xl font-bold font-mono-num text-orange-400">2.83x</span>
            </div>
            <div className="px-4 py-3 rounded-xl bg-[#0e0e14] border border-[#242436] text-right">
              <span className="text-[11px] text-neutral-400 block font-medium">Lucro Líquido Acumulado</span>
              <span className="text-2xl font-bold font-mono-num text-emerald-400">R$ 18.626,02</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Cards: L1, L2, L3 and Média Geral */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* 1º Lançamento */}
        <div className="p-6 rounded-2xl bg-[#111116] border border-[#222230] relative overflow-hidden hover:border-[#38384f] transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
              1º Lançamento (Fev)
            </span>
            <span className="text-[11px] text-emerald-400 font-semibold">Excelente</span>
          </div>

          <div className="mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-mono-num text-white">4.69x</span>
              <span className="text-xs text-neutral-400 font-medium">ROAS Líquido</span>
            </div>
            <span className="text-xs text-neutral-400 block mt-0.5">ROAS Bruto: <strong>5.29x</strong></span>
          </div>

          <div className="space-y-1.5 pt-3 border-t border-[#1e1e2b] text-xs text-neutral-300">
            <div className="flex justify-between">
              <span className="text-neutral-400">Tráfego:</span>
              <span className="font-mono-num text-rose-400">{formatBRL(3046.33)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-400">Faturamento Líquido:</span>
              <span className="font-mono-num text-emerald-400">{formatBRL(14310.56)}</span>
            </div>
            <div className="flex justify-between pt-1 border-t border-[#1a1a24] font-semibold">
              <span className="text-white">Lucro por R$ 1 de Tráfego:</span>
              <span className="font-mono-num text-emerald-400">+ R$ 2,79</span>
            </div>
          </div>
        </div>

        {/* 2º Lançamento */}
        <div className="p-6 rounded-2xl bg-[#111116] border border-orange-500/40 relative overflow-hidden shadow-[0_0_20px_-5px_rgba(249,115,22,0.15)]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-orange-500 text-black">
              2º Lançamento (Jun)
            </span>
            <span className="text-[11px] text-orange-400 font-bold flex items-center gap-1">
              <Award className="w-3.5 h-3.5" /> Campeão
            </span>
          </div>

          <div className="mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-mono-num text-orange-400">3.73x</span>
              <span className="text-xs text-neutral-400 font-medium">ROAS Líquido</span>
            </div>
            <span className="text-xs text-neutral-400 block mt-0.5">ROAS Bruto: <strong>4.45x</strong></span>
          </div>

          <div className="space-y-1.5 pt-3 border-t border-[#1e1e2b] text-xs text-neutral-300">
            <div className="flex justify-between">
              <span className="text-neutral-400">Tráfego:</span>
              <span className="font-mono-num text-rose-400">{formatBRL(4148.44)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-400">Faturamento Líquido:</span>
              <span className="font-mono-num text-emerald-400">{formatBRL(15466.92)}</span>
            </div>
            <div className="flex justify-between pt-1 border-t border-[#1a1a24] font-semibold">
              <span className="text-white">Lucro por R$ 1 de Tráfego:</span>
              <span className="font-mono-num text-emerald-400">+ R$ 2,48</span>
            </div>
          </div>
        </div>

        {/* 3º Lançamento */}
        <div className="p-6 rounded-2xl bg-[#111116] border border-[#222230] relative overflow-hidden hover:border-[#38384f] transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700">
              3º Lançamento (Set)
            </span>
            <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Lucrativo (+19,7%)
            </span>
          </div>

          <div className="mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-mono-num text-white">1.35x</span>
              <span className="text-xs text-neutral-400 font-medium">ROAS Líquido</span>
            </div>
            <span className="text-xs text-neutral-400 block mt-0.5">ROAS Bruto: <strong>1.44x</strong></span>
          </div>

          <div className="space-y-1.5 pt-3 border-t border-[#1e1e2b] text-xs text-neutral-300">
            <div className="flex justify-between">
              <span className="text-neutral-400">Tráfego:</span>
              <span className="font-mono-num text-rose-400">{formatBRL(7054.89)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-400">Faturamento Líquido:</span>
              <span className="font-mono-num text-emerald-400">{formatBRL(9503.18)}</span>
            </div>
            <div className="flex justify-between pt-1 border-t border-[#1a1a24] font-semibold">
              <span className="text-white">Lucro por R$ 1 de Tráfego:</span>
              <span className="font-mono-num text-emerald-400">+ R$ 0,27</span>
            </div>
          </div>
        </div>

        {/* Média Geral */}
        <div className="p-6 rounded-2xl bg-[#111116] border border-[#222230] relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Total Consolidado
            </span>
            <span className="text-[11px] text-emerald-400 font-semibold">Validado</span>
          </div>

          <div className="mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-mono-num text-emerald-400">2.83x</span>
              <span className="text-xs text-neutral-400 font-medium">ROAS Médio</span>
            </div>
            <span className="text-xs text-neutral-400 block mt-0.5">ROAS Bruto Geral: <strong>3.14x</strong></span>
          </div>

          <div className="space-y-1.5 pt-3 border-t border-[#1e1e2b] text-xs text-neutral-300">
            <div className="flex justify-between">
              <span className="text-neutral-400">Tráfego Total:</span>
              <span className="font-mono-num text-rose-400">{formatBRL(14249.66)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-400">Faturamento Líquido:</span>
              <span className="font-mono-num text-emerald-400">{formatBRL(40272.10)}</span>
            </div>
            <div className="flex justify-between pt-1 border-t border-[#1a1a24] font-semibold">
              <span className="text-white">Lucro por R$ 1 de Tráfego:</span>
              <span className="font-mono-num text-emerald-400">+ R$ 1,31</span>
            </div>
          </div>
        </div>
      </div>

      {/* DETAILED ORGANIZED TABLE */}
      <div className="p-6 rounded-2xl bg-[#111116] border border-[#22222f]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h4 className="text-base font-bold text-white">
              Tabela Comparativa de ROAS e Eficiência de Tráfego
            </h4>
            <p className="text-xs text-neutral-400">
              Métricas financeiras calculadas a partir dos valores exatos da planilha
            </p>
          </div>
          <span className="text-xs font-semibold text-neutral-400 bg-[#161622] px-3 py-1 rounded-lg border border-[#232332]">
            ROAS = Faturamento / Investimento em Tráfego
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#222230] text-neutral-400">
                <th className="pb-3 font-semibold">Ciclo / Lançamento</th>
                <th className="pb-3 font-semibold text-right text-rose-400">Verba de Tráfego</th>
                <th className="pb-3 font-semibold text-right">Faturamento Bruto</th>
                <th className="pb-3 font-semibold text-right text-emerald-400">Faturamento Líquido</th>
                <th className="pb-3 font-semibold text-right text-white">Lucro do Ciclo</th>
                <th className="pb-3 font-semibold text-right text-orange-400">ROAS Bruto</th>
                <th className="pb-3 font-semibold text-right text-orange-400">ROAS Líquido</th>
                <th className="pb-3 font-semibold text-right">Lucro Limpo / R$ 1 Tráfego</th>
                <th className="pb-3 font-semibold text-center">Status / Avaliação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1b1b26]">
              {LAUNCH_CYCLES.map((cycle) => {
                const lucroPorReal = cycle.lucroPeriodo / cycle.investimentoTrafego;
                return (
                  <tr key={cycle.id} className="hover:bg-[#161622] transition-colors">
                    <td className="py-3.5 pr-3">
                      <span className="font-bold text-white block">{cycle.name}</span>
                      <span className="text-[11px] text-neutral-400">{cycle.season}</span>
                    </td>
                    <td className="py-3.5 text-right font-mono-num font-bold text-rose-400">
                      - {formatBRL(cycle.investimentoTrafego)}
                    </td>
                    <td className="py-3.5 text-right font-mono-num text-neutral-300">
                      {formatBRL(cycle.faturamentoBruto)}
                    </td>
                    <td className="py-3.5 text-right font-mono-num font-bold text-emerald-400">
                      + {formatBRL(cycle.faturamentoLiquido)}
                    </td>
                    <td className="py-3.5 text-right font-mono-num font-bold">
                      <span className={cycle.lucroPeriodo >= 0 ? 'text-emerald-400' : 'text-rose-400'}>
                        {formatBRL(cycle.lucroPeriodo)}
                      </span>
                    </td>
                    <td className="py-3.5 text-right font-mono-num font-bold text-neutral-300">
                      {cycle.roasBruto}x
                    </td>
                    <td className="py-3.5 text-right font-mono-num font-extrabold text-orange-400 text-sm">
                      {cycle.roasLiquido}x
                    </td>
                    <td className="py-3.5 text-right font-mono-num font-bold">
                      <span className={lucroPorReal >= 0 ? 'text-emerald-400' : 'text-rose-400'}>
                        {lucroPorReal >= 0 ? `+ R$ ${lucroPorReal.toFixed(2)}` : `- R$ ${Math.abs(lucroPorReal).toFixed(2)}`}
                      </span>
                    </td>
                    <td className="py-3.5 text-center">
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                        cycle.roasLiquido >= 3.5 
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : cycle.roasLiquido >= 2.0
                          ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                          : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      }`}>
                        {cycle.roasLiquido >= 3.5 ? 'Altíssima Rentabilidade' : cycle.roasLiquido >= 2.0 ? 'Rentável' : 'Atenção na Escala'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="border-t border-[#262638] font-bold text-white bg-[#14141d]">
                <td className="py-3.5">Média Geral / Acumulado</td>
                <td className="py-3.5 text-right font-mono-num text-rose-400">- {formatBRL(GRAND_TOTALS.investimentoTrafego)}</td>
                <td className="py-3.5 text-right font-mono-num text-neutral-300">{formatBRL(GRAND_TOTALS.faturamentoBruto)}</td>
                <td className="py-3.5 text-right font-mono-num text-emerald-400">{formatBRL(GRAND_TOTALS.faturamentoLiquido)}</td>
                <td className="py-3.5 text-right font-mono-num text-emerald-400">{formatBRL(GRAND_TOTALS.lucroLiquido)}</td>
                <td className="py-3.5 text-right font-mono-num text-neutral-200">3.14x</td>
                <td className="py-3.5 text-right font-mono-num text-orange-400 text-sm">2.83x</td>
                <td className="py-3.5 text-right font-mono-num text-emerald-400">+ R$ 1,31</td>
                <td className="py-3.5 text-center text-emerald-400 font-semibold">Operação Validada</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Visual Chart: ROAS Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ROAS Bar Chart */}
        <div className="p-6 rounded-2xl bg-[#111116] border border-[#22222f]">
          <h4 className="text-base font-bold text-white mb-1">
            Comparativo Visual de ROAS (Bruto vs Líquido)
          </h4>
          <p className="text-xs text-neutral-400 mb-6">
            Multiplicador de faturamento sobre o valor investido em mídia paga
          </p>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={roasChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="shortName" stroke="#71717a" fontSize={11} tickLine={false} axisLine={{ stroke: '#272733' }} />
                <YAxis stroke="#71717a" fontSize={11} tickLine={false} axisLine={{ stroke: '#272733' }} tickFormatter={(val) => `${val}x`} />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const d = payload[0].payload;
                      return (
                        <div className="p-3 rounded-xl bg-[#181822] border border-[#2c2c3d] text-xs space-y-1">
                          <p className="font-bold text-white">{d.name}</p>
                          <p className="text-orange-400">ROAS Bruto: <strong>{d.roasBruto}x</strong></p>
                          <p className="text-emerald-400">ROAS Líquido: <strong>{d.roasLiquido}x</strong></p>
                          <p className="text-neutral-300">Tráfego: {formatBRL(d.trafego)}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="roasBruto" name="ROAS Bruto" fill="#a1a1aa" radius={[4, 4, 0, 0]} />
                <Bar dataKey="roasLiquido" name="ROAS Líquido" fill="#f97316" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-6 mt-3 text-xs text-neutral-400">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-[#a1a1aa]" />
              <span>ROAS Bruto</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-orange-500" />
              <span className="text-white font-semibold">ROAS Líquido (Real)</span>
            </div>
          </div>
        </div>

        {/* ROAS Insights & Technical Breakdown */}
        <div className="p-6 rounded-2xl bg-[#111116] border border-[#22222f] flex flex-col justify-between">
          <div>
            <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4 text-orange-400" />
              <span>Diagnóstico de Eficiência de Tráfego</span>
            </h4>
            <div className="space-y-3.5 text-xs text-neutral-300 mt-3 leading-relaxed">
              <div className="p-3 rounded-xl bg-[#161622] border border-[#222232]">
                <strong className="text-white block mb-1">Por que o 1º e o 2º Lançamentos tiveram ROAS de até 4.69x?</strong>
                <p className="text-neutral-400">
                  Na abertura de Fevereiro e Junho, a base de audiência orgânica do Saulo estava altamente aquecida e reprimida, convertendo com baixo custo por lead e altíssima taxa de fechamento.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#161622] border border-[#222232]">
                <strong className="text-white block mb-1">O que aconteceu no 3º Lançamento (ROAS 1.35x)?</strong>
                <p className="text-neutral-400">
                  O investimento em tráfego subiu para R$ 7.054,89 (+70% de verba). Mesmo com o CAC mais elevado, o lançamento gerou <strong>R$ 9.503,18</strong> de faturamento líquido e <strong>R$ 1.876,29 de lucro líquido real</strong> (+R$ 938,14 limpo para o Saulo e +R$ 469,07 para cada agência).
                </p>
              </div>

              <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-200">
                <strong className="text-orange-400 block mb-1">Ponto Ideal de Equilíbrio (Sweet Spot)</strong>
                <p className="text-xs text-orange-200/90">
                  Os dados mostram que a faixa de <strong>R$ 3.500 a R$ 4.500 de tráfego</strong> entrega a máxima rentabilidade e o melhor lucro no bolso para o Saulo e para as agências.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
