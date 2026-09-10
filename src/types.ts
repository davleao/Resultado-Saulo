export type MonthKey =
  | 'fevereiro/26'
  | 'março/26'
  | 'abril/26'
  | 'maio/26'
  | 'junho/26'
  | 'julho/26'
  | 'agosto/26'
  | 'setembro/26'
  | 'outubro/26'
  | 'novembro/26'
  | 'dezembro/26';

export interface MonthInfo {
  key: MonthKey;
  label: string;
  shortLabel: string;
  cycle: '1º Lançamento (Fev-Mai)' | '2º Lançamento (Jun-Ago)' | '3º Lançamento (Set-Dez)';
  launchId: 'launch1' | 'launch2' | 'launch3';
  isPeakMonth?: boolean;
}

export interface ExpenseItem {
  id: string;
  descricao: string;
  valorAnualOuTotal: number;
  descontoOuCashback: number;
  categoria: string;
  observacoes?: string;
  monthlyValues: Record<MonthKey, number>;
}

export interface MonthlyFinancialSummary {
  receitas: number;
  despesas: number;
  lucro: number;
}

export interface PartnerSummary {
  id: 'saulo' | 'zyon' | 'cajo';
  name: string;
  role: string;
  roleDescription: string;
  percentage: number;
  badgeColor: string;
  totalReceitas: number;
  totalDespesas: number;
  lucroLiquido: number;
  margemLucro: number;
  monthlyData: Record<MonthKey, MonthlyFinancialSummary>;
  notes?: string[];
}

export interface LaunchExpenseDetail {
  item: string;
  categoria: string;
  valorTotal: number;
  valorSaulo: number;
  valorAgencias: number;
  detalhe?: string;
}

export interface LaunchCycleSummary {
  id: 'launch1' | 'launch2' | 'launch3';
  name: string;
  shortName: string;
  season: string;
  period: string;
  peakMonth: string;
  faturamentoBruto: number;
  faturamentoLiquido: number;
  taxasPlataforma: number;
  investimentoTrafego: number;
  custosOperacionais: number;
  custoTotal: number;
  lucroPeriodo: number;
  margemLucro: number;
  roasBruto: number;
  roasLiquido: number;
  roi: number;
  splitSocios: {
    saulo: { receitas: number; despesas: number; lucro: number; porcentagem: number };
    zyon: { receitas: number; despesas: number; lucro: number; porcentagem: number };
    cajo: { receitas: number; despesas: number; lucro: number; porcentagem: number };
  };
  custosDetalhados: LaunchExpenseDetail[];
  destaque: string;
}

export type TabType =
  | 'overview'
  | 'launches'
  | 'roas'
  | 'saulo'
  | 'agencies'
  | 'expenses'
  | 'platform';
