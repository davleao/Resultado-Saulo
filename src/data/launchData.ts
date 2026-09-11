import { ExpenseItem, MonthInfo, MonthKey, PartnerSummary, LaunchCycleSummary } from '../types';

export const MONTHS: MonthInfo[] = [
  { key: 'fevereiro/26', label: 'Fevereiro 2026', shortLabel: 'Fev/26', cycle: '1º Lançamento (Fev-Mai)', launchId: 'launch1', isPeakMonth: true },
  { key: 'março/26', label: 'Março 2026', shortLabel: 'Mar/26', cycle: '1º Lançamento (Fev-Mai)', launchId: 'launch1' },
  { key: 'abril/26', label: 'Abril 2026', shortLabel: 'Abr/26', cycle: '1º Lançamento (Fev-Mai)', launchId: 'launch1' },
  { key: 'maio/26', label: 'Maio 2026', shortLabel: 'Mai/26', cycle: '1º Lançamento (Fev-Mai)', launchId: 'launch1' },
  { key: 'junho/26', label: 'Junho 2026', shortLabel: 'Jun/26', cycle: '2º Lançamento (Jun-Ago)', launchId: 'launch2', isPeakMonth: true },
  { key: 'julho/26', label: 'Julho 2026', shortLabel: 'Jul/26', cycle: '2º Lançamento (Jun-Ago)', launchId: 'launch2' },
  { key: 'agosto/26', label: 'Agosto 2026', shortLabel: 'Ago/26', cycle: '2º Lançamento (Jun-Ago)', launchId: 'launch2' },
  { key: 'setembro/26', label: 'Setembro 2026', shortLabel: 'Set/26', cycle: '3º Lançamento (Set-Dez)', launchId: 'launch3', isPeakMonth: true },
  { key: 'outubro/26', label: 'Outubro 2026', shortLabel: 'Out/26', cycle: '3º Lançamento (Set-Dez)', launchId: 'launch3' },
  { key: 'novembro/26', label: 'Novembro 2026', shortLabel: 'Nov/26', cycle: '3º Lançamento (Set-Dez)', launchId: 'launch3' },
  { key: 'dezembro/26', label: 'Dezembro 2026', shortLabel: 'Dez/26', cycle: '3º Lançamento (Set-Dez)', launchId: 'launch3' },
];

export const EXPENSE_ITEMS: ExpenseItem[] = [
  {
    id: 'active-campaign',
    descricao: 'Active Campaign',
    valorAnualOuTotal: 2827.00,
    descontoOuCashback: 0,
    categoria: 'E-mail Marketing',
    observacoes: 'Plano mensal com 2.500 leads ativos (11 meses x R$ 257,00)',
    monthlyValues: {
      'fevereiro/26': 257.00,
      'março/26': 257.00,
      'abril/26': 257.00,
      'maio/26': 257.00,
      'junho/26': 257.00,
      'julho/26': 257.00,
      'agosto/26': 257.00,
      'setembro/26': 257.00,
      'outubro/26': 257.00,
      'novembro/26': 257.00,
      'dezembro/26': 257.00,
    },
  },
  {
    id: 'vunex',
    descricao: 'Vunex',
    valorAnualOuTotal: 753.60,
    descontoOuCashback: 300.00,
    categoria: 'Automação WhatsApp',
    observacoes: 'Ferramenta de automação msg WhatsApp. Parcelado em 3x de R$ 251,20 (Fev a Abr)',
    monthlyValues: {
      'fevereiro/26': 251.20,
      'março/26': 251.20,
      'abril/26': 251.20,
      'maio/26': 0.00,
      'junho/26': 0.00,
      'julho/26': 0.00,
      'agosto/26': 0.00,
      'setembro/26': 0.00,
      'outubro/26': 0.00,
      'novembro/26': 0.00,
      'dezembro/26': 0.00,
    },
  },
  {
    id: 'manychat',
    descricao: 'Manychat',
    valorAnualOuTotal: 831.30,
    descontoOuCashback: 0.00,
    categoria: 'Automação Instagram/Direct',
    observacoes: 'Ativado estrategicamente apenas nos meses de lançamento: Fev (R$ 141,30), Mai/Jun/Ago (R$ 125/mês) e Set (R$ 315,00)',
    monthlyValues: {
      'fevereiro/26': 141.30,
      'março/26': 0.00,
      'abril/26': 0.00,
      'maio/26': 125.00,
      'junho/26': 125.00,
      'julho/26': 0.00,
      'agosto/26': 125.00,
      'setembro/26': 315.00,
      'outubro/26': 0.00,
      'novembro/26': 0.00,
      'dezembro/26': 0.00,
    },
  },
  {
    id: 'future-zap',
    descricao: 'Future Zap',
    valorAnualOuTotal: 281.52,
    descontoOuCashback: 143.53,
    categoria: 'Disparador Grupos VIP WhatsApp',
    observacoes: 'Disparo programado para grupos VIP no 1º lançamento (3x de R$ 93,84)',
    monthlyValues: {
      'fevereiro/26': 93.84,
      'março/26': 93.84,
      'abril/26': 93.84,
      'maio/26': 0.00,
      'junho/26': 0.00,
      'julho/26': 0.00,
      'agosto/26': 0.00,
      'setembro/26': 0.00,
      'outubro/26': 0.00,
      'novembro/26': 0.00,
      'dezembro/26': 0.00,
    },
  },
  {
    id: 'hotmart-pages',
    descricao: 'Hotmart Pages Anual',
    valorAnualOuTotal: 2268.00,
    descontoOuCashback: 0.00,
    categoria: 'Páginas & Hospedagem LP',
    observacoes: 'Criação e hospedagem de Landing Pages. Já assinado diretamente pela CAJO (alocado no rateio de Outubro/26)',
    monthlyValues: {
      'fevereiro/26': 0.00,
      'março/26': 0.00,
      'abril/26': 0.00,
      'maio/26': 0.00,
      'junho/26': 0.00,
      'julho/26': 0.00,
      'agosto/26': 0.00,
      'setembro/26': 0.00,
      'outubro/26': 2268.00,
      'novembro/26': 0.00,
      'dezembro/26': 0.00,
    },
  },
  {
    id: 'video-editing',
    descricao: 'Serviço de Edição de Vídeo',
    valorAnualOuTotal: 400.00,
    descontoOuCashback: 0.00,
    categoria: 'Audiovisual & Criativos',
    observacoes: 'Serviço pontual extra de edição de criativos e aulas do 1º lançamento',
    monthlyValues: {
      'fevereiro/26': 400.00,
      'março/26': 0.00,
      'abril/26': 0.00,
      'maio/26': 0.00,
      'junho/26': 0.00,
      'julho/26': 0.00,
      'agosto/26': 0.00,
      'setembro/26': 0.00,
      'outubro/26': 0.00,
      'novembro/26': 0.00,
      'dezembro/26': 0.00,
    },
  },
  {
    id: 'trafego',
    descricao: 'Tráfego Pago (Meta & Google Ads)',
    valorAnualOuTotal: 14249.66,
    descontoOuCashback: 0.00,
    categoria: 'Mídia Paga & Captação',
    observacoes: 'Anúncios de captação e remarketing nos 3 lançamentos: Fev (R$ 3.046,33), Jun (R$ 4.148,44) e Set (R$ 7.054,89)',
    monthlyValues: {
      'fevereiro/26': 3046.33,
      'março/26': 0.00,
      'abril/26': 0.00,
      'maio/26': 0.00,
      'junho/26': 4148.44,
      'julho/26': 0.00,
      'agosto/26': 0.00,
      'setembro/26': 7054.89,
      'outubro/26': 0.00,
      'novembro/26': 0.00,
      'dezembro/26': 0.00,
    },
  },
  {
    id: 'recarga',
    descricao: 'Recarga Pré-Pago (Chips WhatsApp)',
    valorAnualOuTotal: 35.00,
    descontoOuCashback: 0.00,
    categoria: 'Operação & Suporte',
    observacoes: 'Recargas para linhas de contingência de atendimento e suporte',
    monthlyValues: {
      'fevereiro/26': 0.00,
      'março/26': 35.00,
      'abril/26': 0.00,
      'maio/26': 0.00,
      'junho/26': 0.00,
      'julho/26': 0.00,
      'agosto/26': 0.00,
      'setembro/26': 0.00,
      'outubro/26': 0.00,
      'novembro/26': 0.00,
      'dezembro/26': 0.00,
    },
  },
];

// 3 OFICIAL LAUNCHES DETAILED
export const LAUNCH_CYCLES: LaunchCycleSummary[] = [
  {
    id: 'launch1',
    name: '1º Lançamento',
    shortName: 'L1',
    season: 'Turma de Fevereiro',
    period: 'Fevereiro a Maio 2026',
    peakMonth: 'Fevereiro/26',
    faturamentoBruto: 16116.32,
    faturamentoLiquido: 14310.56,
    taxasPlataforma: 1805.76,
    investimentoTrafego: 3046.33,
    custosOperacionais: 2764.46,
    custoTotal: 5810.79,
    lucroPeriodo: 8499.77,
    margemLucro: 59.39,
    roasBruto: 5.29,
    roasLiquido: 4.69,
    roi: 146.28,
    splitSocios: {
      saulo: { receitas: 7155.28, despesas: 2905.40, lucro: 4249.88, porcentagem: 50 },
      zyon:  { receitas: 3577.64, despesas: 1452.70, lucro: 2124.94, porcentagem: 25 },
      cajo:  { receitas: 3577.64, despesas: 1452.70, lucro: 2124.94, porcentagem: 25 },
    },
    custosDetalhados: [
      { item: 'Tráfego Pago (Meta/Google Ads)', categoria: 'Mídia Paga', valorTotal: 3046.33, valorSaulo: 1523.17, valorAgencias: 761.58, detalhe: 'Anúncios de captação de leads e abertura de carrinho' },
      { item: 'ActiveCampaign (Fev, Mar, Abr, Mai)', categoria: 'E-mail Mkt', valorTotal: 1028.00, valorSaulo: 514.00, valorAgencias: 257.00, detalhe: '4 mensalidades x R$ 257,00 durante o ciclo de vendas e parcelamento' },
      { item: 'Vunex WhatsApp (Fev, Mar, Abr)', categoria: 'Automação', valorTotal: 753.60, valorSaulo: 376.80, valorAgencias: 188.40, detalhe: 'Parcelamento 3x R$ 251,20 para disparos nas listas' },
      { item: 'Edição de Vídeo Extra', categoria: 'Audiovisual', valorTotal: 400.00, valorSaulo: 200.00, valorAgencias: 100.00, detalhe: 'Edição de criativos de alta conversão e aulas de abertura' },
      { item: 'Future Zap (Fev, Mar, Abr)', categoria: 'Disparador', valorTotal: 281.52, valorSaulo: 140.76, valorAgencias: 70.38, detalhe: '3x R$ 93,84 para disparos de avisos nos grupos VIP' },
      { item: 'Manychat (Fev & Mai)', categoria: 'Instagram Direct', valorTotal: 266.30, valorSaulo: 133.15, valorAgencias: 66.58, detalhe: 'R$ 141,30 em Fev e R$ 125,00 em Mai' },
      { item: 'Recarga Pré-Pago Chips', categoria: 'Operação', valorTotal: 35.00, valorSaulo: 17.50, valorAgencias: 8.75, detalhe: 'Recarga para contingência no atendimento' },
    ],
    destaque: 'Lançamento com ROAS Líquido excepcional de 4.69x e lucro no bolso de R$ 4.249,88 para o Saulo.',
  },
  {
    id: 'launch2',
    name: '2º Lançamento',
    shortName: 'L2',
    season: 'Turma de Junho',
    period: 'Junho a Agosto 2026',
    peakMonth: 'Junho/26',
    faturamentoBruto: 18479.71,
    faturamentoLiquido: 15466.92,
    taxasPlataforma: 3012.79,
    investimentoTrafego: 4148.44,
    custosOperacionais: 1021.00,
    custoTotal: 5169.44,
    lucroPeriodo: 10297.48,
    margemLucro: 66.58,
    roasBruto: 4.45,
    roasLiquido: 3.73,
    roi: 199.20,
    splitSocios: {
      saulo: { receitas: 7733.46, despesas: 2584.72, lucro: 5148.74, porcentagem: 50 },
      zyon:  { receitas: 3866.73, despesas: 1292.36, lucro: 2574.37, porcentagem: 25 },
      cajo:  { receitas: 3866.73, despesas: 1292.36, lucro: 2574.37, porcentagem: 25 },
    },
    custosDetalhados: [
      { item: 'Tráfego Pago (Meta/Google Ads)', categoria: 'Mídia Paga', valorTotal: 4148.44, valorSaulo: 2074.22, valorAgencias: 1037.11, detalhe: 'Captação otimizada com foco em público quente e remarketing' },
      { item: 'ActiveCampaign (Jun, Jul, Ago)', categoria: 'E-mail Mkt', valorTotal: 771.00, valorSaulo: 385.50, valorAgencias: 192.75, detalhe: '3 mensalidades x R$ 257,00' },
      { item: 'Manychat (Jun & Ago)', categoria: 'Instagram Direct', valorTotal: 250.00, valorSaulo: 125.00, valorAgencias: 62.50, detalhe: '2 mensalidades x R$ 125,00 para captura de leads nos comentários' },
    ],
    destaque: 'O lançamento mais rentável de todos! Gerou mais de R$ 10.297,00 de lucro total (R$ 5.148,74 limpo para o Saulo).',
  },
  {
    id: 'launch3',
    name: '3º Lançamento',
    shortName: 'L3',
    season: 'Turma de Setembro',
    period: 'Setembro 2026',
    peakMonth: 'Setembro/26',
    faturamentoBruto: 10131.42,
    faturamentoLiquido: 9503.18,
    taxasPlataforma: 628.24,
    investimentoTrafego: 7054.89,
    custosOperacionais: 572.00,
    custoTotal: 7626.89,
    lucroPeriodo: 1876.29,
    margemLucro: 19.74,
    roasBruto: 1.44,
    roasLiquido: 1.35,
    roi: 24.60,
    splitSocios: {
      saulo: { receitas: 4751.59, despesas: 3813.45, lucro: 938.14, porcentagem: 50 },
      zyon:  { receitas: 2375.80, despesas: 1906.72, lucro: 469.07, porcentagem: 25 },
      cajo:  { receitas: 2375.80, despesas: 1906.72, lucro: 469.07, porcentagem: 25 },
    },
    custosDetalhados: [
      { item: 'Tráfego Pago (Meta Ads)', categoria: 'Mídia Paga', valorTotal: 7054.89, valorSaulo: 3527.45, valorAgencias: 1763.72, detalhe: 'Investimento forte em anúncios para captação de leads e remarketing' },
      { item: 'Manychat (Set)', categoria: 'Instagram Direct', valorTotal: 315.00, valorSaulo: 157.50, valorAgencias: 78.75, detalhe: 'Upgrade de plano para automações pesadas no mês do lançamento' },
      { item: 'ActiveCampaign (Setembro)', categoria: 'E-mail Mkt', valorTotal: 257.00, valorSaulo: 128.50, valorAgencias: 64.25, detalhe: 'Mensalidade da ferramenta de e-mail marketing no mês do lançamento' },
    ],
    destaque: 'Gerou R$ 9.503,18 líquidos com custos de R$ 7.626,89, entregando +R$ 1.876,29 de lucro líquido real (+R$ 938,14 no bolso do Saulo e +R$ 469,07 para cada agência).',
  },
];

// Entressafra e Infraestrutura Anual (Hotmart Pages + Out/Nov/Dez):
export const ENTRESSAFRA_AND_ANNUAL_INFRA = {
  descricao: 'Custos Estruturais Anuais e Entressafra (Outubro a Dezembro)',
  periodo: 'Outubro a Dezembro 2026',
  receitasParcelamento: 991.44, // Out (619.76) + Nov (185.84) + Dez (185.84)
  custosTotais: 3039.00, // Hotmart Pages (2.268,00) + ActiveCampaign 3 meses (771,00)
  saldoEntressafra: -2047.56,
  hotmartPagesAnual: 2268.00,
  activeCampaignEntressafra: 771.00,
  splitSocios: {
    saulo: { receitas: 495.72, despesas: 1519.50, saldo: -1023.78, porcentagem: 50 },
    zyon:  { receitas: 247.86, despesas: 759.75, saldo: -511.89, porcentagem: 25 },
    cajo:  { receitas: 247.86, despesas: 759.75, saldo: -511.89, porcentagem: 25 },
  },
  somaLucro3Lancamentos: 20673.54, // 8499.77 + 10297.48 + 1876.29
  lucroFinalConsolidado: 18626.02, // 20673.54 - 2047.56
};

// Grand Totals:
export const GRAND_TOTALS = {
  faturamentoBruto: 44727.45,
  faturamentoLiquido: 40272.10,
  taxasPlataforma: 4455.35,
  investimentoTrafego: 14249.66,
  custosOperacionais: 7396.42,
  custoTotal: 21646.08,
  lucroLiquido: 18626.02,
  margemLucroGeral: 46.25,
  roasBrutoGeral: 3.14,
  roasLiquidoGeral: 2.83,
  roiGeral: 86.05,
};

// Data for Saulo (50%):
export const SAULO_DATA: PartnerSummary = {
  id: 'saulo',
  name: 'Saulo',
  role: 'Expert & Autor do Treinamento',
  roleDescription: 'Detentor de 50% dos resultados líquidos do curso e responsável por 50% dos custos operacionais e tráfego.',
  percentage: 50,
  badgeColor: '#f97316',
  totalReceitas: 20136.05,
  totalDespesas: 10823.04,
  lucroLiquido: 9313.01,
  margemLucro: 46.25,
  monthlyData: {
    'fevereiro/26': { receitas: 6992.62, despesas: 2094.83, lucro: 4897.79 },
    'março/26':     { receitas: 54.22,   despesas: 318.52,  lucro: -264.30 },
    'abril/26':     { receitas: 54.22,   despesas: 301.02,  lucro: -246.80 },
    'maio/26':      { receitas: 54.22,   despesas: 191.00,  lucro: -136.78 },
    'junho/26':     { receitas: 7299.54, despesas: 2265.22, lucro: 5034.32 },
    'julho/26':     { receitas: 216.96,  despesas: 128.50,  lucro: 88.46 },
    'agosto/26':    { receitas: 216.96,  despesas: 191.00,  lucro: 25.96 },
    'setembro/26':  { receitas: 4751.59, despesas: 3813.45, lucro: 938.15 },
    'outubro/26':   { receitas: 309.88,  despesas: 1262.50, lucro: -952.62 },
    'novembro/26':  { receitas: 92.92,   despesas: 128.50,  lucro: -35.58 },
    'dezembro/26':  { receitas: 92.92,   despesas: 128.50,  lucro: -35.58 },
  },
  notes: [
    'Pico de lucro mais expressivo obtido em Junho/26 (+R$ 5.034,32) e Fevereiro/26 (+R$ 4.897,79)',
    '1º Lançamento gerou R$ 4.249,88 líquidos para Saulo',
    '2º Lançamento gerou R$ 5.148,74 líquidos para Saulo',
    '3º Lançamento fechou em -R$ 85,64 devido ao rateio de anuidade do Hotmart Pages (R$ 1.134 do Saulo)',
  ],
};

// Data for ZYON (25%):
export const ZYON_DATA: PartnerSummary = {
  id: 'zyon',
  name: 'ZYON',
  role: 'Agência de Marketing & Estratégia',
  roleDescription: 'Co-gestora do lançamento com cota de 25% do faturamento líquido e 25% dos custos totais.',
  percentage: 25,
  badgeColor: '#38bdf8',
  totalReceitas: 10068.03,
  totalDespesas: 5411.52,
  lucroLiquido: 4656.51,
  margemLucro: 46.25,
  monthlyData: {
    'fevereiro/26': { receitas: 3496.31, despesas: 1047.42, lucro: 2448.89 },
    'março/26':     { receitas: 27.11,   despesas: 159.26,  lucro: -132.15 },
    'abril/26':     { receitas: 27.11,   despesas: 150.51,  lucro: -123.40 },
    'maio/26':      { receitas: 27.11,   despesas: 95.50,   lucro: -68.39 },
    'junho/26':     { receitas: 3649.77, despesas: 1132.61, lucro: 2517.16 },
    'julho/26':     { receitas: 108.48,  despesas: 64.25,   lucro: 44.23 },
    'agosto/26':    { receitas: 108.48,  despesas: 95.50,   lucro: 12.98 },
    'setembro/26':  { receitas: 2375.80, despesas: 1906.72, lucro: 469.07 },
    'outubro/26':   { receitas: 154.94,  despesas: 631.25,  lucro: -476.31 },
    'novembro/26':  { receitas: 46.46,   despesas: 64.25,   lucro: -17.79 },
    'dezembro/26':  { receitas: 46.46,   despesas: 64.25,   lucro: -17.79 },
  },
  notes: [
    'Divisão paritária com a agência CAJO sobre os 50% destinados à equipe de marketing.',
  ],
};

// Data for CAJO (25%):
export const CAJO_DATA: PartnerSummary = {
  id: 'cajo',
  name: 'CAJO',
  role: 'Agência de Marketing & Infraestrutura',
  roleDescription: 'Co-gestora do lançamento com cota de 25% do faturamento líquido e 25% dos custos totais.',
  percentage: 25,
  badgeColor: '#a855f7',
  totalReceitas: 10068.03,
  totalDespesas: 5411.52,
  lucroLiquido: 4656.51,
  margemLucro: 46.25,
  monthlyData: {
    'fevereiro/26': { receitas: 3496.31, despesas: 1047.42, lucro: 2448.89 },
    'março/26':     { receitas: 27.11,   despesas: 159.26,  lucro: -132.15 },
    'abril/26':     { receitas: 27.11,   despesas: 150.51,  lucro: -123.40 },
    'maio/26':      { receitas: 27.11,   despesas: 95.50,   lucro: -68.39 },
    'junho/26':     { receitas: 3649.77, despesas: 1132.61, lucro: 2517.16 },
    'julho/26':     { receitas: 108.48,  despesas: 64.25,   lucro: 44.23 },
    'agosto/26':    { receitas: 108.48,  despesas: 95.50,   lucro: 12.98 },
    'setembro/26':  { receitas: 2375.80, despesas: 1906.72, lucro: 469.07 },
    'outubro/26':   { receitas: 154.94,  despesas: 631.25,  lucro: -476.31 },
    'novembro/26':  { receitas: 46.46,   despesas: 64.25,   lucro: -17.79 },
    'dezembro/26':  { receitas: 46.46,   despesas: 64.25,   lucro: -17.79 },
  },
  notes: [
    'Hotmart Pages já foi contratada e assinada diretamente pela CAJO (R$ 2.268,00 alocados no rateio geral em Outubro).',
    'Anotações pontuais da planilha: R$ 168,65 (abril) e R$ 219,00 (maio) referentes a créditos e compensações operacionais.',
  ],
};

export const PARTNERS = [SAULO_DATA, ZYON_DATA, CAJO_DATA];

// Combined Monthly totals for whole project (100%)
export const CONSOLIDATED_MONTHLY_DATA = MONTHS.map((m) => {
  const saulo = SAULO_DATA.monthlyData[m.key];
  const zyon = ZYON_DATA.monthlyData[m.key];
  const cajo = CAJO_DATA.monthlyData[m.key];

  const totalReceitas = saulo.receitas + zyon.receitas + cajo.receitas;
  const totalDespesas = saulo.despesas + zyon.despesas + cajo.despesas;
  const lucro = totalReceitas - totalDespesas;

  return {
    key: m.key,
    month: m.shortLabel,
    fullMonth: m.label,
    cycle: m.cycle,
    launchId: m.launchId,
    isPeakMonth: m.isPeakMonth,
    receitas: Number(totalReceitas.toFixed(2)),
    despesas: Number(totalDespesas.toFixed(2)),
    lucro: Number(lucro.toFixed(2)),
    sauloLucro: saulo.lucro,
    zyonLucro: zyon.lucro,
    cajoLucro: cajo.lucro,
  };
});

// Category aggregation for expenses
export const EXPENSES_BY_CATEGORY = [
  { name: 'Tráfego Pago (Ads)', value: 14249.66, color: '#f97316', percentage: 65.83, description: 'Meta Ads & Google Ads para captação de leads e remarketing' },
  { name: 'E-mail Marketing (ActiveCampaign)', value: 2827.00, color: '#3b82f6', percentage: 13.06, description: 'Disparos de nutrição, aquecimento e sequência de carrinho (11 meses)' },
  { name: 'Páginas & LP (Hotmart Pages)', value: 2268.00, color: '#ef4444', percentage: 10.48, description: 'Hospedagem anual e construtor de Landing Pages (assinado pela CAJO)' },
  { name: 'Automação WhatsApp (Vunex & FutureZap)', value: 1035.12, color: '#10b981', percentage: 4.78, description: 'Robôs e disparadores em grupos VIP de WhatsApp' },
  { name: 'Manychat (Instagram Direct)', value: 831.30, color: '#a855f7', percentage: 3.84, description: 'Automação de DMs e palavras-chave nos posts' },
  { name: 'Edição de Vídeo Extra', value: 400.00, color: '#eab308', percentage: 1.85, description: 'Criativos em vídeo e cortes para anúncios' },
  { name: 'Telefonia / Chips WhatsApp', value: 35.00, color: '#6b7280', percentage: 0.16, description: 'Recargas para números de contingência' },
];

// Helper to format currency
export function formatBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value);
}

// Helper to format compact currency (e.g. R$ 14,2k)
export function formatBRLCompact(value: number): string {
  if (Math.abs(value) >= 1000) {
    return `R$ ${(value / 1000).toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}k`;
  }
  return formatBRL(value);
}

export function formatPercent(value: number): string {
  return `${value.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`;
}

export const TOTAL_MONTHLY_EXPENSES: Record<MonthKey, number> = {
  'fevereiro/26': 4189.67,
  'março/26': 637.04,
  'abril/26': 602.04,
  'maio/26': 382.00,
  'junho/26': 4530.44,
  'julho/26': 257.00,
  'agosto/26': 382.00,
  'setembro/26': 7626.89,
  'outubro/26': 2525.00,
  'novembro/26': 257.00,
  'dezembro/26': 257.00,
};
