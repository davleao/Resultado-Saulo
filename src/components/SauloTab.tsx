import React, { useState } from 'react';
import { 
  UserCheck, 
  ArrowUpRight, 
  ArrowDownRight, 
  Wallet, 
  TrendingUp, 
  CheckCircle2, 
  Copy, 
  Check,
  Calendar,
  AlertCircle,
  Award
} from 'lucide-react';
import { MetricCard } from './MetricCard';
import { 
  SAULO_DATA, 
  MONTHS, 
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
  ReferenceLine,
  Cell 
} from 'recharts';

export const SauloTab: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Saulo's chart data
  const monthlyChartData = MONTHS.map((m) => {
    const data = SAULO_DATA.monthlyData[m.key];
    return {
      month: m.shortLabel,
      fullMonth: m.label,
      receitas: data.receitas,
      despesas: data.despesas,
      lucro: data.lucro,
      isPositive: data.lucro >= 0,
    };
  });

  const handleCopySummary = () => {
    const text = `📊 RESUMO FINANCEIRO DO LANÇAMENTO - SAULO (EXPERT)
---------------------------------------------
• Participação: 50% dos Resultados Líquidos
• Faturamento Líquido Recebido: ${formatBRL(SAULO_DATA.totalReceitas)}
• Custos Operacionais e Tráfego (50%): -${formatBRL(SAULO_DATA.totalDespesas)}
=============================================
💰 LUCRO LÍQUIDO FINAL: ${formatBRL(SAULO_DATA.lucroLiquido)}
📈 Margem de Lucro: ${formatPercent(SAULO_DATA.margemLucro)}
🚀 ROI sobre Custos: +${formatPercent((SAULO_DATA.lucroLiquido / SAULO_DATA.totalDespesas) * 100)}
---------------------------------------------
Principais picos de lucro:
- Junho/2026: +${formatBRL(5034.32)}
- Fevereiro/2026: +${formatBRL(4897.79)}
- Setembro/2026: +${formatBRL(938.15)}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Saulo Profile Hero Banner */}
      <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-[#171413] via-[#1a1614] to-[#121217] border border-orange-500/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-black font-extrabold text-2xl shadow-xl shadow-orange-500/30 shrink-0">
              <Award className="w-8 h-8 text-black" />
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                  Resumo Financeiro: Saulo (Expert)
                </h2>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500 text-black shadow-md shadow-orange-500/20">
                  50% da Operação
                </span>
              </div>
              <p className="text-xs text-neutral-300 mt-1.5 max-w-2xl leading-relaxed">
                Demonstrativo exato e consolidado da parte pertencente ao expert do curso nos 11 meses de apuração.
                Saulo é responsável por <strong className="text-white">50% dos custos e tráfego</strong> e recebe <strong className="text-emerald-400">50% de todas as entradas líquidas</strong>.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleCopySummary}
              className="px-4 py-2.5 rounded-xl bg-orange-500 text-black font-bold text-xs hover:bg-orange-400 transition-all flex items-center gap-2 shadow-lg shadow-orange-500/20"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copiado para WhatsApp!' : 'Copiar Resumo p/ Saulo'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Saulo P&L Highlights (Green and Red) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {/* Receitas Saulo */}
        <div className="p-6 rounded-2xl bg-[#111116] border border-emerald-500/30 hover:border-emerald-500/60 transition-all">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Entradas Líquidas (50%)
            </span>
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-bold font-mono-num text-emerald-400">
            {formatBRL(SAULO_DATA.totalReceitas)}
          </div>
          <p className="text-xs text-neutral-400 mt-2">
            50% de todo o faturamento líquido recebido das turmas
          </p>
        </div>

        {/* Despesas Saulo */}
        <div className="p-6 rounded-2xl bg-[#111116] border border-rose-500/30 hover:border-rose-500/60 transition-all">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Custos & Tráfego (50%)
            </span>
            <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400">
              <ArrowDownRight className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-bold font-mono-num text-rose-400">
            - {formatBRL(SAULO_DATA.totalDespesas)}
          </div>
          <p className="text-xs text-neutral-400 mt-2">
            50% de rateio de tráfego pago, e-mail mkt e ferramentas
          </p>
        </div>

        {/* Lucro Líquido Saulo */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1c1410] to-[#121217] border border-orange-500/50 shadow-[0_0_30px_-8px_rgba(249,115,22,0.3)]">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
              Lucro Líquido Real no Bolso
            </span>
            <div className="p-2.5 rounded-xl bg-orange-500 text-black">
              <Wallet className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-bold font-mono-num text-white">
            {formatBRL(SAULO_DATA.lucroLiquido)}
          </div>
          <div className="mt-2 flex items-center justify-between text-xs">
            <span className="text-neutral-400">Margem Líquida:</span>
            <span className="font-bold text-emerald-400">{formatPercent(SAULO_DATA.margemLucro)}</span>
          </div>
        </div>
      </div>

      {/* Monthly Profit Bar Chart */}
      <div className="p-6 rounded-2xl bg-[#111116] border border-[#22222f]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h4 className="text-base font-bold text-white">
              Evolução do Resultado Líquido Mensal do Saulo
            </h4>
            <p className="text-xs text-neutral-400">
              Meses verdes = superávit de abertura de carrinho; Meses vermelhos = manutenção de ferramentas
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-3 h-3 rounded bg-emerald-500" /> Lucro Positivo
            </span>
            <span className="flex items-center gap-1.5 text-rose-400 font-medium">
              <span className="w-3 h-3 rounded bg-rose-500" /> Manutenção / Ferramentas
            </span>
          </div>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyChartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <ReferenceLine y={0} stroke="#4b5563" strokeDasharray="3 3" />
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
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="p-3 rounded-xl bg-[#181822] border border-[#2c2c3d] shadow-xl text-xs space-y-1">
                        <p className="font-bold text-white">{data.fullMonth}</p>
                        <p className="text-emerald-400">Receitas Saulo (50%): {formatBRL(data.receitas)}</p>
                        <p className="text-rose-400">Despesas Saulo (50%): -{formatBRL(data.despesas)}</p>
                        <p className={`font-bold font-mono-num pt-1 border-t border-[#2a2a3a] ${data.lucro >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                          Saldo Final: {formatBRL(data.lucro)}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="lucro" radius={[4, 4, 4, 4]}>
                {monthlyChartData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.lucro >= 0 ? '#10b981' : '#ef4444'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Monthly Statement Table (DRE Saulo) */}
      <div className="p-6 rounded-2xl bg-[#111116] border border-[#22222f]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h4 className="text-base font-bold text-white">
              DRE Mensal de Saulo (Aba Resumo Saulo)
            </h4>
            <p className="text-xs text-neutral-400">
              Espelho fiel da 3ª aba da planilha original com receitas, despesas e resultado
            </p>
          </div>
          <span className="text-xs font-mono-num font-bold text-orange-400 bg-orange-500/10 px-3 py-1 rounded-lg border border-orange-500/20">
            50% da Operação
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#222230] text-neutral-400">
                <th className="pb-3 font-semibold">Mês de Competência</th>
                <th className="pb-3 font-semibold text-right text-emerald-400">Total de Receitas</th>
                <th className="pb-3 font-semibold text-right text-rose-400">Total de Despesas</th>
                <th className="pb-3 font-semibold text-right">Lucro / Resultado</th>
                <th className="pb-3 font-semibold text-right">Situação / Contexto</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1b1b26]">
              {MONTHS.map((m) => {
                const data = SAULO_DATA.monthlyData[m.key];
                const isPositive = data.lucro >= 0;

                return (
                  <tr key={m.key} className="hover:bg-[#161622] transition-colors">
                    <td className="py-3.5 font-medium text-white">
                      {m.label}
                    </td>
                    <td className="py-3.5 text-right font-mono-num text-emerald-400 font-semibold">
                      + {formatBRL(data.receitas)}
                    </td>
                    <td className="py-3.5 text-right font-mono-num text-rose-400 font-semibold">
                      - {formatBRL(data.despesas)}
                    </td>
                    <td className="py-3.5 text-right font-mono-num font-bold">
                      <span className={`inline-block px-2.5 py-1 rounded-md text-xs ${
                        isPositive 
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' 
                          : 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                      }`}>
                        {formatBRL(data.lucro)}
                      </span>
                    </td>
                    <td className="py-3.5 text-right text-[11px] text-neutral-400">
                      {m.key === 'fevereiro/26' && 'Grande lucro do 1º Lançamento (+R$ 4.897)'}
                      {m.key === 'junho/26' && 'Maior lucro do ano no 2º Lançamento (+R$ 5.034)'}
                      {m.key === 'setembro/26' && 'Superávit no 3º Lançamento (+R$ 938)'}
                      {m.key === 'outubro/26' && 'Rateio do Hotmart Pages anual'}
                      {['março/26', 'abril/26', 'maio/26'].includes(m.key) && 'Manutenção de listas e automações'}
                      {['julho/26', 'agosto/26'].includes(m.key) && 'Recebimento de parcelas do 2º lote'}
                      {['novembro/26', 'dezembro/26'].includes(m.key) && 'Manutenção básica de final de ano'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="border-t border-[#262638] font-bold text-white bg-[#14141d]">
                <td className="py-3.5 font-semibold">Total Acumulado Saulo</td>
                <td className="py-3.5 text-right font-mono-num text-emerald-400 font-bold">
                  + {formatBRL(SAULO_DATA.totalReceitas)}
                </td>
                <td className="py-3.5 text-right font-mono-num text-rose-400 font-bold">
                  - {formatBRL(SAULO_DATA.totalDespesas)}
                </td>
                <td className="py-3.5 text-right font-mono-num text-emerald-400 font-bold text-sm">
                  {formatBRL(SAULO_DATA.lucroLiquido)}
                </td>
                <td className="py-3.5 text-right text-orange-400 font-semibold">
                  ROI: +{formatPercent((SAULO_DATA.lucroLiquido / SAULO_DATA.totalDespesas) * 100)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};
