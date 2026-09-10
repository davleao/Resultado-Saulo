import React from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Percent, 
  ArrowUpRight, 
  Users, 
  HelpCircle,
  ShieldAlert,
  Calendar
} from 'lucide-react';
import { MetricCard } from './MetricCard';
import { PartnerCard } from './PartnerCard';
import { 
  SAULO_DATA, 
  ZYON_DATA, 
  CAJO_DATA, 
  CONSOLIDATED_MONTHLY_DATA, 
  LAUNCH_CYCLES,
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
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';

interface OverviewTabProps {
  onNavigateToTab: (tab: any) => void;
  executiveMode: boolean;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({
  onNavigateToTab,
  executiveMode,
}) => {
  const totalReceitas = 40272.10;
  const totalDespesas = 21646.08;
  const lucroLiquido = 18626.02;
  const roi = (lucroLiquido / totalDespesas) * 100;
  const margem = (lucroLiquido / totalReceitas) * 100;

  // Pie chart data for partner distribution
  const partnersPieData = [
    { name: 'Saulo (Expert)', value: 20136.05, percent: 50, color: '#f97316' },
    { name: 'ZYON (Agência)', value: 10068.03, percent: 25, color: '#38bdf8' },
    { name: 'CAJO (Agência)', value: 10068.03, percent: 25, color: '#a855f7' },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Executive Summary Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#14141c] via-[#161622] to-[#121218] border border-[#222230] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30">
                Resultado Consolidado 2026
              </span>
              <span className="text-xs text-neutral-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                11 meses apurados (Fev a Dez)
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Divisão Executiva do Lançamento
            </h2>
            <p className="text-sm text-neutral-400 max-w-2xl mt-1.5 leading-relaxed">
              O projeto gerou um faturamento bruto de <strong className="text-white">R$ 44.727,45</strong> e faturamento líquido recebido de <strong className="text-emerald-400">R$ 40.272,10</strong>. 
              Após todos os custos e tráfego de <strong className="text-rose-400">R$ 21.646,08</strong>, o lucro líquido real partilhado entre os 3 sócios foi de <strong className="text-white">R$ 18.626,02</strong> (ROI de +86%).
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onNavigateToTab('saulo')}
              className="px-4 py-2.5 rounded-xl bg-orange-500/15 text-orange-400 border border-orange-500/30 hover:bg-orange-500 hover:text-black font-semibold text-xs transition-all flex items-center gap-1.5"
            >
              <span>Ver Parte do Saulo (50%)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onNavigateToTab('agencies')}
              className="px-4 py-2.5 rounded-xl bg-[#1a1a24] text-neutral-300 border border-[#272736] hover:text-white font-semibold text-xs transition-all flex items-center gap-1.5"
            >
              <span>Ver Agências (25% + 25%)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          id="metric-faturamento-liquido"
          label="Faturamento Líquido Total"
          value={formatBRL(totalReceitas)}
          subValue="Bruto acumulado: R$ 44.727,45"
          trend={{ text: '3 picos de lançamento apurados', isPositive: true }}
          icon={DollarSign}
          variant="green"
        />

        <MetricCard
          id="metric-custos-totais"
          label="Custos & Despesas Totais"
          value={formatBRL(totalDespesas)}
          subValue="65,8% investido diretamente em tráfego"
          trend={{ text: 'Rateado 50% Saulo / 50% Agências', isNeutral: true }}
          icon={TrendingDown}
          variant="red"
        />

        <MetricCard
          id="metric-lucro-liquido"
          label="Lucro Líquido Real"
          value={formatBRL(lucroLiquido)}
          subValue={`Margem Líquida Global: ${formatPercent(margem)}`}
          trend={{ text: 'Resultado limpo em caixa', isPositive: true }}
          icon={TrendingUp}
          variant="orange"
        />

        <MetricCard
          id="metric-roi-global"
          label="Retorno s/ Investimento (ROI)"
          value={`+${formatPercent(roi)}`}
          subValue="Para cada R$ 1 investido, voltou R$ 1,86"
          trend={{ text: 'Operação rentável e validada', isPositive: true }}
          icon={Percent}
          variant="default"
        />
      </div>

      {/* SECTION: WHO GOT WHAT (Quem Ficou com o Quê?) */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
              <h3 className="text-xl font-bold text-white tracking-tight">
                Divisão Exata por Sócio: Quem Ficou com o Quê?
              </h3>
            </div>
            <p className="text-xs text-neutral-400 mt-0.5">
              Transparência completa: faturamento líquido rateado, despesas assumidas e o lucro no bolso de cada participante.
            </p>
          </div>
          <span className="text-xs text-neutral-400 bg-[#14141c] px-3 py-1 rounded-lg border border-[#222230]">
            Regra: 50% Saulo (Expert) • 25% ZYON • 25% CAJO
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <PartnerCard
            id="card-saulo"
            partner={SAULO_DATA}
            totalProjectRevenue={totalReceitas}
            totalProjectProfit={lucroLiquido}
            onSelect={() => onNavigateToTab('saulo')}
            isHighlighted={true}
          />
          <PartnerCard
            id="card-zyon"
            partner={ZYON_DATA}
            totalProjectRevenue={totalReceitas}
            totalProjectProfit={lucroLiquido}
            onSelect={() => onNavigateToTab('agencies')}
          />
          <PartnerCard
            id="card-cajo"
            partner={CAJO_DATA}
            totalProjectRevenue={totalReceitas}
            totalProjectProfit={lucroLiquido}
            onSelect={() => onNavigateToTab('agencies')}
          />
        </div>
      </div>

      {/* Visual Charts: Monthly Flow and Partner Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monthly Cashflow Bar Chart */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-[#111116] border border-[#22222f]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h4 className="text-base font-bold text-white">
                Fluxo Mensal: Entradas vs Despesas
              </h4>
              <p className="text-xs text-neutral-400">
                Comparativo mês a mês com destaque verde (receitas) e vermelho (custos)
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-emerald-500" />
                <span className="text-neutral-300">Entradas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-rose-500" />
                <span className="text-neutral-300">Despesas</span>
              </div>
            </div>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={CONSOLIDATED_MONTHLY_DATA}
                margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
              >
                <XAxis 
                  dataKey="month" 
                  stroke="#71717a" 
                  fontSize={11} 
                  tickLine={false} 
                  axisLine={{ stroke: '#272733' }}
                />
                <YAxis 
                  stroke="#71717a" 
                  fontSize={11} 
                  tickLine={false} 
                  axisLine={{ stroke: '#272733' }}
                  tickFormatter={(val) => `R$${(val/1000).toFixed(0)}k`}
                />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="p-3 rounded-xl bg-[#181822] border border-[#2c2c3d] shadow-xl text-xs space-y-1.5">
                          <p className="font-bold text-white border-b border-[#2c2c3d] pb-1">
                            {data.fullMonth} ({data.cycle})
                          </p>
                          <div className="flex justify-between gap-4 text-emerald-400">
                            <span>Entradas:</span>
                            <span className="font-mono-num font-bold">{formatBRL(data.receitas)}</span>
                          </div>
                          <div className="flex justify-between gap-4 text-rose-400">
                            <span>Despesas:</span>
                            <span className="font-mono-num font-bold">- {formatBRL(data.despesas)}</span>
                          </div>
                          <div className="flex justify-between gap-4 text-neutral-200 pt-1 border-t border-[#2c2c3d]">
                            <span>Saldo Líquido:</span>
                            <span className={`font-mono-num font-bold ${data.lucro >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                              {formatBRL(data.lucro)}
                            </span>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="receitas" name="Entradas" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="despesas" name="Despesas" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 pt-3 border-t border-[#1d1d28] flex items-center justify-between text-xs text-neutral-400">
            <span>Nota: Picos de receita em <strong>Fev</strong>, <strong>Jun</strong> e <strong>Set</strong> refletem as 3 aberturas de carrinho.</span>
            <span className="text-orange-400 font-medium">3 Ciclos</span>
          </div>
        </div>

        {/* Partner Share Donut Chart */}
        <div className="p-6 rounded-2xl bg-[#111116] border border-[#22222f] flex flex-col justify-between">
          <div>
            <h4 className="text-base font-bold text-white mb-1">
              Participação no Faturamento
            </h4>
            <p className="text-xs text-neutral-400 mb-4">
              Divisão societária das receitas líquidas
            </p>

            <div className="h-48 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={partnersPieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {partnersPieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const item = payload[0].payload;
                        return (
                          <div className="p-2.5 rounded-lg bg-[#181822] border border-[#2e2e3f] text-xs">
                            <p className="font-bold text-white">{item.name}</p>
                            <p className="text-neutral-300 font-mono-num">{formatBRL(item.value)} ({item.percent}%)</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-2.5 mt-2 pt-3 border-t border-[#1d1d28]">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                <span className="text-neutral-300">Saulo (Expert)</span>
              </div>
              <span className="font-mono-num font-bold text-white">50% ({formatBRL(20136.05)})</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                <span className="text-neutral-300">ZYON (Agência)</span>
              </div>
              <span className="font-mono-num font-bold text-white">25% ({formatBRL(10068.03)})</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                <span className="text-neutral-300">CAJO (Agência)</span>
              </div>
              <span className="font-mono-num font-bold text-white">25% ({formatBRL(10068.03)})</span>
            </div>
          </div>
        </div>
      </div>

      {/* Launch Waves Performance Table */}
      <div className="p-6 rounded-2xl bg-[#111116] border border-[#22222f]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h4 className="text-base font-bold text-white">
              Desempenho por Ciclo de Lançamento
            </h4>
            <p className="text-xs text-neutral-400">
              Análise financeira dos 3 momentos de abertura de carrinho com custos e tráfego associados
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onNavigateToTab('launches')}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-orange-500/10 text-orange-400 hover:bg-orange-500 hover:text-black border border-orange-500/20 transition-all flex items-center gap-1"
            >
              <span>Ver Lançamentos Detalhados</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onNavigateToTab('roas')}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#1a1a24] text-neutral-300 hover:text-white border border-[#272738] transition-all flex items-center gap-1"
            >
              <span>Matriz de ROAS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#222230] text-neutral-400">
                <th className="pb-3 font-semibold">Ciclo de Lançamento</th>
                <th className="pb-3 font-semibold text-right">Faturamento Bruto</th>
                <th className="pb-3 font-semibold text-right">Faturamento Líquido</th>
                <th className="pb-3 font-semibold text-right">Investimento em Tráfego</th>
                <th className="pb-3 font-semibold text-right">Custo Total Ciclo</th>
                <th className="pb-3 font-semibold text-right">Lucro Gerado</th>
                <th className="pb-3 font-semibold text-right">ROAS Tráfego</th>
                <th className="pb-3 font-semibold text-right">ROI Ciclo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1b1b26]">
              {LAUNCH_CYCLES.map((cycle, idx) => (
                <tr key={idx} className="hover:bg-[#161622] transition-colors cursor-pointer" onClick={() => onNavigateToTab('launches')}>
                  <td className="py-3.5 pr-4">
                    <span className="font-bold text-white block">{cycle.name}</span>
                    <span className="text-[11px] text-neutral-400">{cycle.period}</span>
                  </td>
                  <td className="py-3.5 text-right font-mono-num text-neutral-300">
                    {formatBRL(cycle.faturamentoBruto)}
                  </td>
                  <td className="py-3.5 text-right font-mono-num font-bold text-emerald-400">
                    {formatBRL(cycle.faturamentoLiquido)}
                  </td>
                  <td className="py-3.5 text-right font-mono-num text-rose-400">
                    - {formatBRL(cycle.investimentoTrafego)}
                  </td>
                  <td className="py-3.5 text-right font-mono-num text-rose-300">
                    - {formatBRL(cycle.custoTotal)}
                  </td>
                  <td className="py-3.5 text-right font-mono-num font-bold text-white">
                    <span className={`px-2 py-0.5 rounded ${cycle.lucroPeriodo >= 0 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                      {formatBRL(cycle.lucroPeriodo)}
                    </span>
                  </td>
                  <td className="py-3.5 text-right font-mono-num font-bold text-orange-400">
                    {cycle.roasLiquido}x
                  </td>
                  <td className="py-3.5 text-right font-mono-num font-bold text-neutral-200">
                    {cycle.roi >= 0 ? `+${cycle.roi.toFixed(1)}%` : `${cycle.roi.toFixed(1)}%`}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-[#262638] font-bold text-white bg-[#14141d]">
                <td className="py-3 font-semibold">Total Geral Consolidado</td>
                <td className="py-3 text-right font-mono-num text-neutral-200">R$ 44.727,45</td>
                <td className="py-3 text-right font-mono-num text-emerald-400">{formatBRL(totalReceitas)}</td>
                <td className="py-3 text-right font-mono-num text-rose-400">- R$ 14.249,66</td>
                <td className="py-3 text-right font-mono-num text-rose-400">- {formatBRL(totalDespesas)}</td>
                <td className="py-3 text-right font-mono-num text-emerald-400">{formatBRL(lucroLiquido)}</td>
                <td className="py-3 text-right font-mono-num text-orange-400">2.83x</td>
                <td className="py-3 text-right font-mono-num text-emerald-400">+{formatPercent(roi)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};
