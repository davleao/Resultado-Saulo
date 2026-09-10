import React, { useState } from 'react';
import { 
  Building2, 
  ArrowUpRight, 
  ArrowDownRight, 
  Wallet, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Info,
  CheckCircle2,
  FileSpreadsheet
} from 'lucide-react';
import { MetricCard } from './MetricCard';
import { 
  ZYON_DATA, 
  CAJO_DATA, 
  MONTHS, 
  formatBRL, 
  formatPercent 
} from '../data/launchData';

export const AgenciesTab: React.FC = () => {
  const [activeAgency, setActiveAgency] = useState<'both' | 'zyon' | 'cajo'>('both');

  const totalAgenciasReceitas = ZYON_DATA.totalReceitas + CAJO_DATA.totalReceitas; // 20.136,05
  const totalAgenciasDespesas = ZYON_DATA.totalDespesas + CAJO_DATA.totalDespesas; // 10.823,04
  const totalAgenciasLucro = ZYON_DATA.lucroLiquido + CAJO_DATA.lucroLiquido;       // 9.313,02

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-[#12161f] via-[#141824] to-[#121218] border border-sky-500/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-extrabold text-2xl shadow-xl shadow-sky-500/20 shrink-0">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                  Resumo Agências: ZYON & CAJO
                </h2>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-400 border border-sky-500/30">
                  25% ZYON + 25% CAJO = 50% Agências
                </span>
              </div>
              <p className="text-xs text-neutral-300 mt-1.5 max-w-2xl leading-relaxed">
                As duas agências parceiras operaram com rateio paritário de 50% do lucro destinado ao marketing (25% cada).
                Cada agência lucrou limpo <strong className="text-white">{formatBRL(ZYON_DATA.lucroLiquido)}</strong> com margem de <strong className="text-emerald-400">{formatPercent(ZYON_DATA.margemLucro)}</strong>.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#10131a] p-1.5 rounded-xl border border-[#222938]">
            <button
              type="button"
              onClick={() => setActiveAgency('both')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeAgency === 'both' ? 'bg-sky-500 text-black font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Ambas Lado a Lado
            </button>
            <button
              type="button"
              onClick={() => setActiveAgency('zyon')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeAgency === 'zyon' ? 'bg-sky-500 text-black font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Só ZYON (25%)
            </button>
            <button
              type="button"
              onClick={() => setActiveAgency('cajo')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeAgency === 'cajo' ? 'bg-purple-500 text-white font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Só CAJO (25%)
            </button>
          </div>
        </div>
      </div>

      {/* Side by side comparison cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ZYON Card */}
        <div className="p-6 rounded-2xl bg-[#111116] border border-sky-500/30 hover:border-sky-500/60 transition-all">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center font-bold text-white text-lg">
                ZY
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>ZYON</span>
                  <Zap className="w-4 h-4 text-sky-400" />
                </h3>
                <span className="text-xs text-neutral-400">Agência de Marketing & Estratégia</span>
              </div>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-500/15 text-sky-400 border border-sky-500/30">
              25% do Projeto
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#0b0b0e] border border-[#1e1e28] mb-4">
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
              Lucro Líquido Final da ZYON
            </span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl lg:text-3xl font-bold font-mono-num text-emerald-400">
                {formatBRL(ZYON_DATA.lucroLiquido)}
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
                Margem {formatPercent(ZYON_DATA.margemLucro)}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="p-3 rounded-xl bg-[#161622] border border-emerald-500/20">
              <span className="text-[11px] text-neutral-400 block mb-0.5">Receitas (25%)</span>
              <span className="text-base font-bold font-mono-num text-emerald-400">
                + {formatBRL(ZYON_DATA.totalReceitas)}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-[#161622] border border-rose-500/20">
              <span className="text-[11px] text-neutral-400 block mb-0.5">Despesas (25%)</span>
              <span className="text-base font-bold font-mono-num text-rose-400">
                - {formatBRL(ZYON_DATA.totalDespesas)}
              </span>
            </div>
          </div>

          <p className="text-xs text-neutral-400 leading-relaxed border-t border-[#1d1d28] pt-3">
            Atuação na inteligência de dados, esteira de copy, disparos de mensagens e gestão operacional das campanhas.
          </p>
        </div>

        {/* CAJO Card */}
        <div className="p-6 rounded-2xl bg-[#111116] border border-purple-500/30 hover:border-purple-500/60 transition-all">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center font-bold text-white text-lg">
                CJ
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>CAJO</span>
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                </h3>
                <span className="text-xs text-neutral-400">Agência de Marketing & Infraestrutura</span>
              </div>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/15 text-purple-400 border border-purple-500/30">
              25% do Projeto
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#0b0b0e] border border-[#1e1e28] mb-4">
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
              Lucro Líquido Final da CAJO
            </span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl lg:text-3xl font-bold font-mono-num text-emerald-400">
                {formatBRL(CAJO_DATA.lucroLiquido)}
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
                Margem {formatPercent(CAJO_DATA.margemLucro)}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="p-3 rounded-xl bg-[#161622] border border-emerald-500/20">
              <span className="text-[11px] text-neutral-400 block mb-0.5">Receitas (25%)</span>
              <span className="text-base font-bold font-mono-num text-emerald-400">
                + {formatBRL(CAJO_DATA.totalReceitas)}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-[#161622] border border-rose-500/20">
              <span className="text-[11px] text-neutral-400 block mb-0.5">Despesas (25%)</span>
              <span className="text-base font-bold font-mono-num text-rose-400">
                - {formatBRL(CAJO_DATA.totalDespesas)}
              </span>
            </div>
          </div>

          <p className="text-xs text-neutral-400 leading-relaxed border-t border-[#1d1d28] pt-3">
            Responsável pela infraestrutura de páginas (Hotmart Pages já assinado), suporte técnico e gestão dos canais de conversão.
          </p>
        </div>
      </div>

      {/* Spreadsheet Specific Notes Callout */}
      <div className="p-5 rounded-2xl bg-[#14141d] border border-[#242436]">
        <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
          <FileSpreadsheet className="w-4 h-4 text-orange-400" />
          <span>Notas e Observações Específicas da Planilha Original (Aba ZYON e CAJO)</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-neutral-300">
          <div className="p-3 rounded-xl bg-[#0e0e14] border border-[#1f1f2c]">
            <strong className="text-white block mb-1">1. Hotmart Pages Anual (R$ 2.268,00):</strong>
            <p className="text-neutral-400">
              Conforme apontado na planilha original: <em>&ldquo;Já assinado pela Cajo&rdquo;</em>. O valor integral de R$ 2.268,00 foi alocado em Outubro/2026 no rateio conjunto de despesas, de forma que Saulo assumiu 50% (R$ 1.134,00) e Zyon assumiu 25% (R$ 567,00) em reembolso.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-[#0e0e14] border border-[#1f1f2c]">
            <strong className="text-white block mb-1">2. Anotações de Compensação em CAJO:</strong>
            <p className="text-neutral-400">
              Na aba CAJO há notas de rodapé de <strong>R$ 168,65 (abril)</strong> e <strong>R$ 219,00 (maio)</strong>, correspondendo a acertos pontuais de créditos e reembolso de ferramentas de disparador/contingência.
            </p>
          </div>
        </div>
      </div>

      {/* Monthly Comparative Table */}
      <div className="p-6 rounded-2xl bg-[#111116] border border-[#22222f]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h4 className="text-base font-bold text-white">
              Demonstrativo Mês a Mês das Agências (Aba 4 da Planilha)
            </h4>
            <p className="text-xs text-neutral-400">
              Receitas, despesas e lucro líquido mensal exato de cada agência
            </p>
          </div>
          <span className="text-xs text-neutral-400">
            Valores idênticos para ZYON e CAJO (25% cada)
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#222230] text-neutral-400">
                <th className="pb-3 font-semibold">Mês</th>
                <th className="pb-3 font-semibold text-right text-emerald-400">Receitas por Agência (25%)</th>
                <th className="pb-3 font-semibold text-right text-rose-400">Despesas por Agência (25%)</th>
                <th className="pb-3 font-semibold text-right text-sky-400">Lucro ZYON</th>
                <th className="pb-3 font-semibold text-right text-purple-400">Lucro CAJO</th>
                <th className="pb-3 font-semibold text-right text-white font-bold">Total Agências (50%)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1b1b26]">
              {MONTHS.map((m) => {
                const zyonData = ZYON_DATA.monthlyData[m.key];
                const cajoData = CAJO_DATA.monthlyData[m.key];
                const totalLucroAgencias = zyonData.lucro + cajoData.lucro;

                return (
                  <tr key={m.key} className="hover:bg-[#161622] transition-colors">
                    <td className="py-3.5 font-medium text-white">
                      {m.label}
                    </td>
                    <td className="py-3.5 text-right font-mono-num text-emerald-400">
                      + {formatBRL(zyonData.receitas)}
                    </td>
                    <td className="py-3.5 text-right font-mono-num text-rose-400">
                      - {formatBRL(zyonData.despesas)}
                    </td>
                    <td className="py-3.5 text-right font-mono-num font-semibold text-neutral-200">
                      <span className={`px-2 py-0.5 rounded ${zyonData.lucro >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {formatBRL(zyonData.lucro)}
                      </span>
                    </td>
                    <td className="py-3.5 text-right font-mono-num font-semibold text-neutral-200">
                      <span className={`px-2 py-0.5 rounded ${cajoData.lucro >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {formatBRL(cajoData.lucro)}
                      </span>
                    </td>
                    <td className="py-3.5 text-right font-mono-num font-bold">
                      <span className={`px-2 py-0.5 rounded ${totalLucroAgencias >= 0 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                        {formatBRL(totalLucroAgencias)}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="border-t border-[#262638] font-bold text-white bg-[#14141d]">
                <td className="py-3.5 font-semibold">Total Consolidado</td>
                <td className="py-3.5 text-right font-mono-num text-emerald-400">
                  + {formatBRL(ZYON_DATA.totalReceitas)} cada
                </td>
                <td className="py-3.5 text-right font-mono-num text-rose-400">
                  - {formatBRL(ZYON_DATA.totalDespesas)} cada
                </td>
                <td className="py-3.5 text-right font-mono-num text-emerald-400">
                  {formatBRL(ZYON_DATA.lucroLiquido)}
                </td>
                <td className="py-3.5 text-right font-mono-num text-emerald-400">
                  {formatBRL(CAJO_DATA.lucroLiquido)}
                </td>
                <td className="py-3.5 text-right font-mono-num text-emerald-400 text-sm">
                  {formatBRL(totalAgenciasLucro)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};
