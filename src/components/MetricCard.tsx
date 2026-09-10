import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  id?: string;
  label: string;
  value: string;
  subValue?: string;
  trend?: {
    text: string;
    isPositive?: boolean;
    isNeutral?: boolean;
  };
  icon: LucideIcon;
  variant?: 'default' | 'orange' | 'green' | 'red';
  badge?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  id,
  label,
  value,
  subValue,
  trend,
  icon: Icon,
  variant = 'default',
  badge,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'orange':
        return {
          border: 'border-orange-500/30 hover:border-orange-500/60',
          iconBg: 'bg-orange-500/10 text-orange-400',
          valueColor: 'text-orange-400',
          glow: 'hover:shadow-[0_0_24px_-6px_rgba(249,115,22,0.25)]',
        };
      case 'green':
        return {
          border: 'border-emerald-500/30 hover:border-emerald-500/60',
          iconBg: 'bg-emerald-500/10 text-emerald-400',
          valueColor: 'text-emerald-400',
          glow: 'hover:shadow-[0_0_24px_-6px_rgba(16,185,129,0.25)]',
        };
      case 'red':
        return {
          border: 'border-rose-500/30 hover:border-rose-500/60',
          iconBg: 'bg-rose-500/10 text-rose-400',
          valueColor: 'text-rose-400',
          glow: 'hover:shadow-[0_0_24px_-6px_rgba(239,68,68,0.25)]',
        };
      default:
        return {
          border: 'border-[#22222d] hover:border-orange-500/40',
          iconBg: 'bg-[#181822] text-neutral-300',
          valueColor: 'text-white',
          glow: 'hover:shadow-[0_0_20px_-8px_rgba(255,255,255,0.1)]',
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div
      id={id}
      className={`relative p-5 rounded-2xl bg-[#111116] border ${styles.border} ${styles.glow} transition-all duration-300 flex flex-col justify-between`}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {label}
          </span>
          {badge && (
            <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-400 w-fit">
              {badge}
            </span>
          )}
        </div>
        <div className={`p-2.5 rounded-xl ${styles.iconBg} shrink-0`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <div>
        <div className={`text-2xl lg:text-3xl font-bold font-mono-num ${styles.valueColor}`}>
          {value}
        </div>
        {subValue && (
          <p className="text-xs text-neutral-400 mt-1">{subValue}</p>
        )}

        {trend && (
          <div className="mt-3 pt-2.5 border-t border-[#1c1c26] flex items-center text-xs">
            <span
              className={`font-semibold ${
                trend.isNeutral
                  ? 'text-neutral-400'
                  : trend.isPositive
                  ? 'text-emerald-400'
                  : 'text-rose-400'
              }`}
            >
              {trend.text}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
