import React, { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  CreditCard, 
  Receipt, 
  HelpCircle,
  Calendar,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { MetricCard } from './MetricCard';
import { 
  MONTHS, 
  CONSOLIDATED_MONTHLY_DATA, 
  SAULO_DATA, 
  ZYON_DATA, 
  CAJO_DATA, 
  formatBRL, 
  formatPercent 
} from '../data/launchData';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip 
} from 'recharts';

export const RevenuesTab: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  const totalBruto = 44727.45;
  const totalLiquido = 40272.10;
  const taxasPlataforma = totalBruto - totalLiquido;
  const percentRetencao = (taxasPlataforma / totalBruto) * 100;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-[#111116] border border-[#22222f] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <h2 className="text-xl font-bold text-white tracking-tight">
              Aba 2: Entradas & Faturamento
            </h2>
          </div>
          <p className="text-xs text-neutral-400 max-w-2xl leading-relaxed">
            Mapeamento completo de todos os recebimentos dos 3 lançamentos do curso, demonstrando o faturamento bruto das vendas, as deduções de taxas das plataformas de checkout e as parcelas líquidas recebidas mês a mês.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs bg-[#171722] px-4 py-2.5 rounded-xl border border-[#272738] shrink-0">
          <div className="text-right">
            <span className="text-neutral-400 block text-[10px]">Total Líquido Efetivo</span>
            <span className="text-base font-bold font-mono-num text-emerald-400">
              {formatBRL(totalLiquido)}
            </span>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          label="Faturamento Bruto Total"
          value={formatBRL(totalBruto)}
          subValue="Vendas brutas em cartão + boletos"
          trend={{ text: 'Soma dos 3 lançamentos', isPositive: true }}
          icon={Receipt}
          variant="default"
        />

        <MetricCard
          label="Faturamento Líquido Recebido"
          value={formatBRL(totalLiquido)}
          subValue="Entrado em conta limpo de taxas"
          trend={{ text: 'Base real de rateio entre sócios', isPositive: true }}
          icon={DollarSign}
          variant="green"
        />

        <MetricCard
          label="Taxas de Plataforma & Gateway"
          value={`- ${formatBRL(taxasPlataforma)}`}
          subValue={`Retenção média de ${formatPercent(percentRetencao)}`}
          trend={{ text: 'Hotmart / Gateway de pagamento', isNeutral: true }}
          icon={CreditCard}
          variant="red"
        />

        <MetricCard
          label="Melhor Mês de Vendas"
          value="Junho / 2026"
          subValue="Faturamento bruto de R$ 18.479,71"
          trend={{ text: '+14,6% vs 1º lançamento', isPositive: true }}
          icon={TrendingUp}
          variant="orange"
        />
      </div>

      {/* 3 Waves of Launch Visualizer */}
      <div>
        <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
          <span>Os 3 Picos de Lançamento (Ciclos de Venda)</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
            Abertura de Carrinho
          </span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Wave 1 */}
          <div className="p-5 rounded-2xl bg-[#121217] border border-[#22222f] hover:border-orange-500/40 transition-all">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-500/15 text-orange-400 border border-orange-500/30">
                1º Lançamento (Fev/26)
              </span>
              <span className="text-xs text-neutral-400">Verão</span>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-xs">
                <span className="text-neutral-400">Bruto + Boleto:</span>
                <span className="font-mono-num font-bold text-white">R$ 16.116,32</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-neutral-400">Bruto Cartão:</span>
                <span className="font-mono-num text-neutral-300">R$ 15.743,57</span>
              </div>
              <div className="flex justify-between text-xs pt-2 border-t border-[#1e1e28]">
                <span className="text-neutral-300 font-semibold">Líquido no mês (Fev):</span>
                <span className="font-mono-num font-bold text-emerald-400">R$ 13.985,24</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-neutral-400">Parcelas Mar/Abr/Mai:</span>
                <span className="font-mono-num text-emerald-300">+ R$ 325,32</span>
              </div>
            </div>
            <div className="p-2.5 rounded-xl bg-[#0b0b0e] border border-[#1d1d28] text-[11px] text-neutral-400">
              Divisão imediata: <strong className="text-orange-400">Saulo R$ 6.992,62</strong> e <strong className="text-sky-400">Zyon/Cajo R$ 6.992,62</strong>.
            </div>
          </div>

          {/* Wave 2 */}
          <div className="p-5 rounded-2xl bg-[#121217] border border-orange-500/40 shadow-[0_0_20px_-6px_rgba(249,115,22,0.2)]">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-500 text-black">
                2º Lançamento (Jun/26) • Recorde
              </span>
              <span className="text-xs text-neutral-400">Inverno</span>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-xs">
                <span className="text-neutral-400">Faturamento Bruto:</span>
                <span className="font-mono-num font-bold text-white">R$ 18.479,71</span>
              </div>
              <div className="flex justify-between text-xs pt-2 border-t border-[#1e1e28]">
                <span className="text-neutral-300 font-semibold">Líquido no mês (Jun):</span>
                <span className="font-mono-num font-bold text-emerald-400">R$ 14.599,08</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-neutral-400">Parcelas Julho/Agosto:</span>
                <span className="font-mono-num text-emerald-300">+ R$ 867,84</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-neutral-400">Crescimento vs Ciclo 1:</span>
                <span className="font-semibold text-emerald-400">+14,6% em vendas</span>
              </div>
            </div>
            <div className="p-2.5 rounded-xl bg-[#0b0b0e] border border-[#1d1d28] text-[11px] text-neutral-400">
              Divisão no pico: <strong className="text-orange-400">Saulo R$ 7.299,54</strong> e <strong className="text-sky-400">Zyon/Cajo R$ 7.299,54</strong>.
            </div>
          </div>

          {/* Wave 3 */}
          <div className="p-5 rounded-2xl bg-[#121217] border border-[#22222f] hover:border-orange-500/40 transition-all">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-500/15 text-orange-400 border border-orange-500/30">
                3º Lançamento (Set/26)
              </span>
              <span className="text-xs text-neutral-400">Primavera</span>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-xs">
                <span className="text-neutral-400">Faturamento Bruto:</span>
                <span className="font-mono-num font-bold text-white">R$ 10.131,42</span>
              </div>
              <div className="flex justify-between text-xs pt-2 border-t border-[#1e1e28]">
                <span className="text-neutral-300 font-semibold">Líquido no mês (Set):</span>
                <span className="font-mono-num font-bold text-emerald-400">R$ 9.503,18</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-neutral-400">Parcelas Out/Nov/Dez:</span>
                <span className="font-mono-num text-emerald-300">+ R$ 991,44</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-neutral-400">Conversão de carrinhos:</span>
                <span className="font-semibold text-neutral-300">93,8% taxa liquidez</span>
              </div>
            </div>
            <div className="p-2.5 rounded-xl bg-[#0b0b0e] border border-[#1d1d28] text-[11px] text-neutral-400">
              Divisão no pico: <strong className="text-orange-400">Saulo R$ 4.751,59</strong> e <strong className="text-sky-400">Zyon/Cajo R$ 4.751,59</strong>.
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Inflow Area Chart */}
      <div className="p-6 rounded-2xl bg-[#111116] border border-[#22222f]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h4 className="text-base font-bold text-white">
              Curva de Entrada Financeira (Fevereiro a Dezembro)
            </h4>
            <p className="text-xs text-neutral-400">
              Visualização da concentração das entradas líquidas nos meses de lançamento e o fluxo residual de parcelamento
            </p>
          </div>
          <span className="text-xs font-mono-num font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
            Total Líquido: {formatBRL(totalLiquido)}
          </span>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={CONSOLIDATED_MONTHLY_DATA}>
              <defs>
                <linearGradient id="colorRevenues" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                </linearGradient>
              </defs>
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
                tickFormatter={(val) => `R$ ${(val / 1000).toFixed(0)}k`}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="p-3 rounded-xl bg-[#181822] border border-[#2c2c3d] shadow-xl text-xs space-y-1">
                        <p className="font-bold text-white">{data.fullMonth}</p>
                        <p className="text-emerald-400 font-bold font-mono-num">
                          Total Líquido: {formatBRL(data.receitas)}
                        </p>
                        <div className="text-[11px] text-neutral-400 pt-1 border-t border-[#2a2a3a]">
                          <span>Saulo (50%): {formatBRL(data.receitas / 2)}</span>
                          <br />
                          <span>Zyon (25%): {formatBRL(data.receitas / 4)}</span>
                          <br />
                          <span>CAJO (25%): {formatBRL(data.receitas / 4)}</span>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area 
                type="monotone" 
                dataKey="receitas" 
                stroke="#10b981" 
                strokeWidth={3} 
                fillOpacity={1} 
                fill="url(#colorRevenues)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Itemized Inflow Table by Month */}
      <div className="p-6 rounded-2xl bg-[#111116] border border-[#22222f]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h4 className="text-base font-bold text-white">
              Cronograma Mensal de Entradas e Divisão Societária
            </h4>
            <p className="text-xs text-neutral-400">
              Dados exatos extraídos da planilha de entradas, com valores líquidos já creditados
            </p>
          </div>
          <span className="text-xs text-neutral-400">
            Valores em R$ (Reais)
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#222230] text-neutral-400">
                <th className="pb-3 font-semibold">Mês de Competência</th>
                <th className="pb-3 font-semibold">Tipo de Entrada</th>
                <th className="pb-3 font-semibold text-right">Entrada Líquida Total</th>
                <th className="pb-3 font-semibold text-right text-orange-400">Saulo (50%)</th>
                <th className="pb-3 font-semibold text-right text-sky-400">ZYON (25%)</th>
                <th className="pb-3 font-semibold text-right text-purple-400">CAJO (25%)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1b1b26]">
              {MONTHS.map((m) => {
                const sauloVal = SAULO_DATA.monthlyData[m.key].receitas;
                const zyonVal = ZYON_DATA.monthlyData[m.key].receitas;
                const cajoVal = CAJO_DATA.monthlyData[m.key].receitas;
                const totalMonth = sauloVal + zyonVal + cajoVal;

                return (
                  <tr 
                    key={m.key} 
                    className={`hover:bg-[#161622] transition-colors ${
                      m.isPeakMonth ? 'bg-orange-500/5' : ''
                    }`}
                  >
                    <td className="py-3 font-medium text-white flex items-center gap-2">
                      <span>{m.label}</span>
                      {m.isPeakMonth && (
                        <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30">
                          Pico Vendas
                        </span>
                      )}
                    </td>
                    <td className="py-3 text-neutral-400">
                      {m.isPeakMonth ? 'Abertura de Carrinho' : 'Parcelas de Cartão'}
                    </td>
                    <td className="py-3 text-right font-mono-num font-bold text-emerald-400">
                      + {formatBRL(totalMonth)}
                    </td>
                    <td className="py-3 text-right font-mono-num font-semibold text-orange-400">
                      {formatBRL(sauloVal)}
                    </td>
                    <td className="py-3 text-right font-mono-num text-neutral-300">
                      {formatBRL(zyonVal)}
                    </td>
                    <td className="py-3 text-right font-mono-num text-neutral-300">
                      {formatBRL(cajoVal)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="border-t border-[#262638] font-bold text-white bg-[#14141d]">
                <td className="py-3 font-semibold">Total Consolidado (11 Meses)</td>
                <td className="py-3 text-neutral-400">3 Lançamentos</td>
                <td className="py-3 text-right font-mono-num text-emerald-400">{formatBRL(totalLiquido)}</td>
                <td className="py-3 text-right font-mono-num text-orange-400">{formatBRL(SAULO_DATA.totalReceitas)}</td>
                <td className="py-3 text-right font-mono-num text-sky-400">{formatBRL(ZYON_DATA.totalReceitas)}</td>
                <td className="py-3 text-right font-mono-num text-purple-400">{formatBRL(CAJO_DATA.totalReceitas)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};
