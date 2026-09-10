import React from 'react';
import { PartnerSummary } from '../types';
import { formatBRL, formatPercent } from '../data/launchData';
import { TrendingUp, ArrowDownRight, ArrowUpRight, Award, ShieldCheck, Zap } from 'lucide-react';

interface PartnerCardProps {
  id?: string;
  partner: PartnerSummary;
  totalProjectRevenue: number;
  totalProjectProfit: number;
  onSelect?: () => void;
  isHighlighted?: boolean;
}

export const PartnerCard: React.FC<PartnerCardProps> = ({
  id,
  partner,
  totalProjectRevenue,
  onSelect,
  isHighlighted = false,
}) => {
  const getIcon = () => {
    switch (partner.id) {
      case 'saulo':
        return <Award className="w-5 h-5 text-orange-400" />;
      case 'zyon':
        return <Zap className="w-5 h-5 text-sky-400" />;
      case 'cajo':
        return <ShieldCheck className="w-5 h-5 text-purple-400" />;
    }
  };

  const getAccentColors = () => {
    switch (partner.id) {
      case 'saulo':
        return {
          badge: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
          avatarBg: 'bg-gradient-to-br from-orange-500 to-amber-600',
          ring: 'border-orange-500/40 hover:border-orange-500',
          glow: 'hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]',
        };
      case 'zyon':
        return {
          badge: 'bg-sky-500/15 text-sky-400 border-sky-500/30',
          avatarBg: 'bg-gradient-to-br from-sky-500 to-blue-600',
          ring: 'border-sky-500/30 hover:border-sky-400',
          glow: 'hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.25)]',
        };
      case 'cajo':
        return {
          badge: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
          avatarBg: 'bg-gradient-to-br from-purple-500 to-indigo-600',
          ring: 'border-purple-500/30 hover:border-purple-400',
          glow: 'hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.25)]',
        };
    }
  };

  const colors = getAccentColors();
  const revenueSharePercent = (partner.totalReceitas / totalProjectRevenue) * 100;

  return (
    <div
      id={id}
      onClick={onSelect}
      className={`group relative p-6 rounded-2xl bg-[#121217] border transition-all duration-300 ${
        isHighlighted
          ? 'border-orange-500 shadow-[0_0_30px_-5px_rgba(249,115,22,0.25)]'
          : `${colors.ring} ${colors.glow}`
      } ${onSelect ? 'cursor-pointer' : ''}`}
    >
      {/* Header with Avatar and Role */}
      <div className="flex items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-3.5">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white shadow-lg ${colors.avatarBg}`}
          >
            <span className="text-base font-bold tracking-tight">
              {partner.name.substring(0, 2).toUpperCase()}
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                {partner.name}
              </h3>
              {getIcon()}
            </div>
            <span className="text-xs text-neutral-400">{partner.role}</span>
          </div>
        </div>

        <div className="text-right">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${colors.badge}`}
          >
            {partner.percentage}% do Projeto
          </span>
        </div>
      </div>

      {/* Main Net Profit Highlight */}
      <div className="mb-5 p-4 rounded-xl bg-[#0b0b0e] border border-[#1f1f28]">
        <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
          Lucro Líquido Final (Resultado Real)
        </span>
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-2xl lg:text-3xl font-bold font-mono-num text-emerald-400">
            {formatBRL(partner.lucroLiquido)}
          </span>
          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Margem {formatPercent(partner.margemLucro)}
          </span>
        </div>
      </div>

      {/* Breakdown: Inflows (Green) vs Outflows (Red) */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="p-3 rounded-xl bg-[#16161f] border border-emerald-500/20">
          <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1">
            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
            <span>Faturamento Líquido</span>
          </div>
          <div className="text-base font-bold font-mono-num text-emerald-400">
            {formatBRL(partner.totalReceitas)}
          </div>
          <span className="text-[10px] text-neutral-500">
            {formatPercent(revenueSharePercent)} das vendas totais
          </span>
        </div>

        <div className="p-3 rounded-xl bg-[#16161f] border border-rose-500/20">
          <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1">
            <ArrowDownRight className="w-3.5 h-3.5 text-rose-400" />
            <span>Custos & Despesas</span>
          </div>
          <div className="text-base font-bold font-mono-num text-rose-400">
            - {formatBRL(partner.totalDespesas)}
          </div>
          <span className="text-[10px] text-neutral-500">
            {partner.percentage}% dos custos totais
          </span>
        </div>
      </div>

      {/* Progress Bar of ROI / Share */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs text-neutral-400">
          <span>Eficiência Operacional</span>
          <span className="font-semibold text-neutral-200">
            ROI: +{formatPercent((partner.lucroLiquido / partner.totalDespesas) * 100)}
          </span>
        </div>
        <div className="w-full h-2 rounded-full bg-[#1e1e28] overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-orange-500"
            style={{
              width: `${Math.min(100, Math.round((partner.lucroLiquido / partner.totalReceitas) * 100))}%`,
            }}
          />
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-xs text-neutral-400 leading-relaxed border-t border-[#1c1c26] pt-3">
        {partner.roleDescription}
      </p>
    </div>
  );
};
