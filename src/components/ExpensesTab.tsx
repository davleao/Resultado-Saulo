import React, { useState } from 'react';
import { 
  TrendingDown, 
  Target, 
  Layers, 
  Tag, 
  Info, 
  CreditCard,
  CheckCircle2,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { MetricCard } from './MetricCard';
import { 
  EXPENSE_ITEMS, 
  EXPENSES_BY_CATEGORY, 
  MONTHS, 
  TOTAL_MONTHLY_EXPENSES, 
  formatBRL, 
  formatPercent 
} from '../data/launchData';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip 
} from 'recharts';

export const ExpensesTab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const totalCustos = 21646.08;
  const totalTrafego = 14249.66;
  const totalFerramentas = totalCustos - totalTrafego;
  const percentTrafego = (totalTrafego / totalCustos) * 100;
  const percentFerramentas = (totalFerramentas / totalCustos) * 100;

  const filteredItems = selectedCategory === 'all'
    ? EXPENSE_ITEMS
    : EXPENSE_ITEMS.filter((item) => item.categoria.includes(selectedCategory));

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-[#111116] border border-[#22222f] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <h2 className="text-xl font-bold text-white tracking-tight">
              Aba 1: Custos & Despesas Operacionais
            </h2>
          </div>
          <p className="text-xs text-neutral-400 max-w-2xl leading-relaxed">
            Detalhamento de todos os investimentos realizados para viabilizar os lançamentos. Os custos foram divididos rigorosamente em <strong className="text-white">50% para Saulo</strong> e <strong className="text-white">50% para as Agências (25% ZYON e 25% CAJO)</strong>.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs bg-[#171722] px-4 py-2.5 rounded-xl border border-[#272738] shrink-0">
          <div className="text-right">
            <span className="text-neutral-400 block text-[10px]">Custo Total Acumulado</span>
            <span className="text-base font-bold font-mono-num text-rose-400">
              - {formatBRL(totalCustos)}
            </span>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          label="Total de Custos & Despesas"
          value={`- ${formatBRL(totalCustos)}`}
          subValue="100% rateado entre os 3 sócios"
          trend={{ text: 'Base de rateio 50% / 25% / 25%', isNeutral: true }}
          icon={TrendingDown}
          variant="red"
        />

        <MetricCard
          label="Investimento em Tráfego Pago"
          value={`- ${formatBRL(totalTrafego)}`}
          subValue={`${formatPercent(percentTrafego)} de todos os custos`}
          trend={{ text: 'Meta Ads & Google Ads nos 3 picos', isNeutral: true }}
          icon={Target}
          variant="orange"
        />

        <MetricCard
          label="Ferramentas & Infraestrutura"
          value={`- ${formatBRL(totalFerramentas)}`}
          subValue={`${formatPercent(percentFerramentas)} dos custos operacionais`}
          trend={{ text: 'E-mail, automações e páginas', isNeutral: true }}
          icon={Layers}
          variant="default"
        />

        <MetricCard
          label="Custo por Participante"
          value={formatBRL(10823.04)}
          subValue="Saulo (50%) • Agências Zyon/Cajo (50%)"
          trend={{ text: 'R$ 5.411,52 para cada agência', isNeutral: true }}
          icon={CreditCard}
          variant="default"
        />
      </div>

      {/* Category Breakdown & Dominance Visualizer */}
      <div className="p-6 rounded-2xl bg-[#111116] border border-[#22222f]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h4 className="text-base font-bold text-white">
              Composição dos Custos por Categoria
            </h4>
            <p className="text-xs text-neutral-400">
              Veja para onde foi cada real investido no projeto
            </p>
          </div>
          <span className="text-xs text-neutral-400">
            Tráfego representa a maior fatia ({formatPercent(percentTrafego)})
          </span>
        </div>

        {/* Stacked bar visualization */}
        <div className="w-full h-3 rounded-full overflow-hidden flex bg-[#1e1e28] mb-6">
          {EXPENSES_BY_CATEGORY.map((cat, i) => (
            <div
              key={i}
              title={`${cat.name}: ${formatBRL(cat.value)} (${cat.percentage}%)`}
              style={{ width: `${cat.percentage}%`, backgroundColor: cat.color }}
              className="h-full transition-all hover:opacity-80 cursor-pointer"
            />
          ))}
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {EXPENSES_BY_CATEGORY.map((cat, i) => (
            <div 
              key={i} 
              className="p-3.5 rounded-xl bg-[#14141d] border border-[#20202d] hover:border-neutral-600 transition-all"
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                  <span className="text-xs font-semibold text-white truncate">{cat.name}</span>
                </div>
                <span className="text-[11px] font-bold font-mono-num text-neutral-400">{cat.percentage}%</span>
              </div>
              <div className="text-sm font-bold font-mono-num text-rose-400 mb-1">
                - {formatBRL(cat.value)}
              </div>
              <p className="text-[10px] text-neutral-400 leading-tight">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Itemized Spreadsheet Expenses Table */}
      <div className="p-6 rounded-2xl bg-[#111116] border border-[#22222f]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h4 className="text-base font-bold text-white">
              Planilha Completa de Ferramentas e Despesas
            </h4>
            <p className="text-xs text-neutral-400">
              Todos os 8 itens contratados com notas de contratação, descontos obtidos e rateio
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1 rounded-lg font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-orange-500 text-black font-bold'
                  : 'bg-[#181824] text-neutral-400 hover:text-white'
              }`}
            >
              Todos (8)
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('Tráfego')}
              className={`px-3 py-1 rounded-lg font-medium transition-all ${
                selectedCategory === 'Tráfego'
                  ? 'bg-orange-500 text-black font-bold'
                  : 'bg-[#181824] text-neutral-400 hover:text-white'
              }`}
            >
              Tráfego
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('WhatsApp')}
              className={`px-3 py-1 rounded-lg font-medium transition-all ${
                selectedCategory === 'WhatsApp'
                  ? 'bg-orange-500 text-black font-bold'
                  : 'bg-[#181824] text-neutral-400 hover:text-white'
              }`}
            >
              WhatsApp
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('E-mail')}
              className={`px-3 py-1 rounded-lg font-medium transition-all ${
                selectedCategory === 'E-mail'
                  ? 'bg-orange-500 text-black font-bold'
                  : 'bg-[#181824] text-neutral-400 hover:text-white'
              }`}
            >
              E-mail
            </button>
          </div>
        </div>

        {/* Expenses List */}
        <div className="space-y-3">
          {filteredItems.map((item) => {
            const itemTotal = Object.values(item.monthlyValues).reduce((acc, curr) => acc + curr, 0);

            return (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-[#14141d] border border-[#1f1f2c] hover:border-[#2d2d40] transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2.5 flex-wrap mb-1">
                    <h5 className="text-sm font-bold text-white">{item.descricao}</h5>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#1e1e2b] text-neutral-300 border border-[#2b2b3d]">
                      {item.categoria}
                    </span>
                    {item.descontoOuCashback > 0 && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Economia/Desconto: {formatBRL(item.descontoOuCashback)}
                      </span>
                    )}
                  </div>
                  {item.observacoes && (
                    <p className="text-xs text-neutral-400 flex items-center gap-1.5 mt-1">
                      <Info className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                      <span>{item.observacoes}</span>
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-6 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-[#1c1c28]">
                  <div className="text-right">
                    <span className="text-[10px] text-neutral-500 block">Total Gasto</span>
                    <span className="text-sm font-bold font-mono-num text-rose-400">
                      - {formatBRL(itemTotal)}
                    </span>
                  </div>

                  <div className="text-right pl-4 border-l border-[#222230]">
                    <span className="text-[10px] text-neutral-500 block">Parte Saulo (50%)</span>
                    <span className="text-xs font-mono-num font-semibold text-orange-400">
                      - {formatBRL(itemTotal * 0.5)}
                    </span>
                  </div>

                  <div className="text-right pl-4 border-l border-[#222230]">
                    <span className="text-[10px] text-neutral-500 block">Cada Agência (25%)</span>
                    <span className="text-xs font-mono-num text-neutral-300">
                      - {formatBRL(itemTotal * 0.25)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Monthly Expenses Table */}
      <div className="p-6 rounded-2xl bg-[#111116] border border-[#22222f]">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div>
            <h4 className="text-base font-bold text-white">
              Evolução Mensal de Custos e Rateio Entre Sócios
            </h4>
            <p className="text-xs text-neutral-400">
              Valores apurados mês a mês e rateados entre Saulo e Agências ZYON / CAJO
            </p>
          </div>
          <span className="text-xs font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-lg border border-rose-500/20">
            Rateio 50% / 25% / 25%
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#222230] text-neutral-400">
                <th className="pb-3 font-semibold">Mês</th>
                <th className="pb-3 font-semibold text-right">Despesa Total Mês</th>
                <th className="pb-3 font-semibold text-right text-orange-400">Custo Saulo (50%)</th>
                <th className="pb-3 font-semibold text-right text-sky-400">Custo ZYON (25%)</th>
                <th className="pb-3 font-semibold text-right text-purple-400">Custo CAJO (25%)</th>
                <th className="pb-3 font-semibold text-right">Destaque Operacional</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1b1b26]">
              {MONTHS.map((m) => {
                const totalMonth = TOTAL_MONTHLY_EXPENSES[m.key];
                const sauloCost = totalMonth * 0.5;
                const agencyCost = totalMonth * 0.25;

                return (
                  <tr key={m.key} className="hover:bg-[#161622] transition-colors">
                    <td className="py-3 font-medium text-white">
                      {m.label}
                    </td>
                    <td className="py-3 text-right font-mono-num font-bold text-rose-400">
                      - {formatBRL(totalMonth)}
                    </td>
                    <td className="py-3 text-right font-mono-num font-semibold text-orange-400">
                      - {formatBRL(sauloCost)}
                    </td>
                    <td className="py-3 text-right font-mono-num text-neutral-300">
                      - {formatBRL(agencyCost)}
                    </td>
                    <td className="py-3 text-right font-mono-num text-neutral-300">
                      - {formatBRL(agencyCost)}
                    </td>
                    <td className="py-3 text-right text-[11px] text-neutral-400">
                      {m.key === 'fevereiro/26' && 'Tráfego 1 + Edição + Ferramentas'}
                      {m.key === 'junho/26' && 'Tráfego 2 (R$ 4.148) + Manychat'}
                      {m.key === 'setembro/26' && 'Tráfego 3 (R$ 7.054) + Manychat'}
                      {m.key === 'outubro/26' && 'Hotmart Pages Anual (R$ 2.268)'}
                      {['março/26', 'abril/26', 'maio/26', 'julho/26', 'agosto/26', 'novembro/26', 'dezembro/26'].includes(m.key) && 'Manutenção de Ferramentas'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="border-t border-[#262638] font-bold text-white bg-[#14141d]">
                <td className="py-3 font-semibold">Total Geral de Despesas</td>
                <td className="py-3 text-right font-mono-num text-rose-400">- {formatBRL(totalCustos)}</td>
                <td className="py-3 text-right font-mono-num text-orange-400">- {formatBRL(totalCustos * 0.5)}</td>
                <td className="py-3 text-right font-mono-num text-sky-400">- {formatBRL(totalCustos * 0.25)}</td>
                <td className="py-3 text-right font-mono-num text-purple-400">- {formatBRL(totalCustos * 0.25)}</td>
                <td className="py-3 text-right text-neutral-400">100% Rateado</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};
