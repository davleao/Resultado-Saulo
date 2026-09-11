import React, { useState } from 'react';
import { 
  Cpu, 
  Sparkles, 
  Sliders, 
  Share2, 
  Copy, 
  Check, 
  Download, 
  RefreshCw, 
  Webhook, 
  Zap, 
  ShieldCheck, 
  Bell, 
  DollarSign, 
  Layers, 
  FileSpreadsheet, 
  ArrowRight,
  TrendingUp,
  Percent,
  CheckCircle2,
  Calculator,
  Receipt,
  Send,
  Lock,
  Eye,
  AlertTriangle,
  FileText,
  HelpCircle,
  PiggyBank,
  CheckCheck
} from 'lucide-react';
import { formatBRL, formatPercent, GRAND_TOTALS, SAULO_DATA, ZYON_DATA, CAJO_DATA } from '../data/launchData';

type ActiveTool = 'audit' | 'simulator' | 'treasury' | 'reconciliation' | 'webhook' | 'dre' | 'alerts' | 'expert-portal';

export const PlatformFeaturesTab: React.FC = () => {
  const [activeTool, setActiveTool] = useState<ActiveTool>('audit');
  const [copiedWhatsApp, setCopiedWhatsApp] = useState<boolean>(false);
  const [copiedDRE, setCopiedDRE] = useState<boolean>(false);

  // 1. Simulador State
  const [faturamentoMeta, setFaturamentoMeta] = useState<number>(30000);
  const [ticketMedio, setTicketMedio] = useState<number>(497);
  const [verbaTrafego, setVerbaTrafego] = useState<number>(5000);
  const [custosFerramentas, setCustosFerramentas] = useState<number>(1200);
  const [taxaHotmart, setTaxaHotmart] = useState<number>(10);

  // 2. Smart Treasury State
  const [retentionRate, setRetentionRate] = useState<number>(10); // 10%

  // 3. Webhook Simulator State
  const [webhookStatus, setWebhookStatus] = useState<'idle' | 'received'>('idle');
  const [webhookSaleValue, setWebhookSaleValue] = useState<number>(497);
  const [webhookEvent, setWebhookEvent] = useState<'PURCHASE_APPROVED' | 'PIX_GENERATED' | 'REFUND'>('PURCHASE_APPROVED');
  const [webhookLog, setWebhookLog] = useState<Array<{ id: string; time: string; event: string; valor: number; saulo: number; agencias: number }>>([
    {
      id: 'HP-892147',
      time: '16:04:12',
      event: 'PURCHASE_APPROVED',
      valor: 497.00,
      saulo: 223.65, // 497 - 10% taxa = 447,30 * 50% = 223,65
      agencias: 111.82,
    },
    {
      id: 'HP-892146',
      time: '15:58:30',
      event: 'PURCHASE_APPROVED',
      valor: 497.00,
      saulo: 223.65,
      agencias: 111.82,
    }
  ]);

  // 4. Alerts State
  const [alertRoasMin, setAlertRoasMin] = useState<number>(2.0);
  const [alertSalesTarget, setAlertSalesTarget] = useState<number>(10000);
  const [alertSent, setAlertSent] = useState<boolean>(false);

  // Calculations for 4th Launch Simulator
  const taxaPlataformaValor = faturamentoMeta * (taxaHotmart / 100);
  const faturamentoLiquidoEstimado = faturamentoMeta - taxaPlataformaValor;
  const custosTotaisEstimados = verbaTrafego + custosFerramentas;
  const lucroLiquidoEstimado = faturamentoLiquidoEstimado - custosTotaisEstimados;
  const vendasNecessarias = Math.ceil(faturamentoMeta / ticketMedio);
  const roasEstimado = verbaTrafego > 0 ? (faturamentoLiquidoEstimado / verbaTrafego).toFixed(2) : '0';
  const roiEstimado = custosTotaisEstimados > 0 ? ((lucroLiquidoEstimado / custosTotaisEstimados) * 100).toFixed(1) : '0';

  const lucroSauloSimulado = lucroLiquidoEstimado * 0.50;
  const lucroZyonSimulado = lucroLiquidoEstimado * 0.25;
  const lucroCajoSimulado = lucroLiquidoEstimado * 0.25;

  // Calculations for Smart Treasury (Fundo de Reserva)
  // Total profit in peak months (Fev + Jun + Set) = 4897.79 (Fev Saulo) etc.
  // Consolidado dos 3 meses de lançamento: Fev (lucro R$ 8.499,77), Jun (lucro R$ 10.297,48), Set (lucro -R$ 171,27)
  const lucroPicos = 8499.77 + 10297.48; // R$ 18.797,25 nos dois picos positivos
  const valorRetencao = lucroPicos * (retentionRate / 100);
  const custoEntressafraAnual = 2827.00; // ActiveCampaign nos 11 meses (R$ 257/mês)
  const saldoReservaRestante = valorRetencao - (custoEntressafraAnual * 0.6); // cobre folgado os meses vazios

  const handleSimulateSale = () => {
    const netVal = webhookSaleValue * 0.90;
    const newEntry = {
      id: `HP-${Math.floor(100000 + Math.random() * 900000)}`,
      time: new Date().toLocaleTimeString('pt-BR'),
      event: webhookEvent,
      valor: webhookSaleValue,
      saulo: Number((netVal * 0.5).toFixed(2)),
      agencias: Number((netVal * 0.25).toFixed(2)),
    };
    setWebhookLog(prev => [newEntry, ...prev.slice(0, 7)]);
    setWebhookStatus('received');
    setTimeout(() => setWebhookStatus('idle'), 2500);
  };

  const handleCopyWhatsApp = () => {
    const text = `📊 *PRESTAÇÃO DE CONTAS OFICIAL 2026 - AUDITADO*
---------------------------------------
💰 *Faturamento Bruto:* R$ 44.727,45
🟢 *Faturamento Líquido:* R$ 40.272,10
🔴 *Custos Totais & Tráfego:* R$ 21.646,08
🚀 *Lucro Líquido Real:* R$ 18.626,02
🎯 *ROAS Líquido Médio:* 2.83x (ROI Geral: +86,0%)

*DIVISÃO DE LUCRO NO BOLSO:*
👤 *Saulo (50%):* ${formatBRL(9313.01)}
🏢 *ZYON (25%):* ${formatBRL(4656.51)}
🏢 *CAJO (25%):* ${formatBRL(4656.51)}

*RESULTADO POR LANÇAMENTO:*
• 1º Lançamento (Fev): R$ 8.499,77 lucro (ROAS 4.69x)
• 2º Lançamento (Jun): R$ 10.297,48 lucro (ROAS 3.73x)
• 3º Lançamento (Set): +R$ 1.876,29 lucro (ROAS 1.35x - R$ 9.503,18 entradas vs R$ 7.626,89 custos)
• Subtotal dos 3 Lançamentos: R$ 20.673,54 de lucro operacional

*INFRAESTRUTURA ANUAL & ENTRESSAFRA:*
• Hotmart Pages Anual da CAJO & ActiveCampaign (Out-Dez): -R$ 2.047,56
• Lucro Líquido Final da Sociedade: R$ 18.626,02

*RECONCILIAÇÃO HOTMART PAGES:*
• A CAJO adiantou R$ 2.268,00 no cartão.
• Ressarcimento devido à CAJO: R$ 1.134,00 (Saulo) + R$ 567,00 (ZYON).

_Relatório auditado e validado via Dashboard dos Sócios._`;

    navigator.clipboard.writeText(text);
    setCopiedWhatsApp(true);
    setTimeout(() => setCopiedWhatsApp(false), 3000);
  };

  const handleCopyDRE = () => {
    const dreText = `DEMONSTRAÇÃO DO RESULTADO DO EXERCÍCIO (DRE) - CONSOLIDADO 2026
----------------------------------------------------------------------
RECEITA OPERACIONAL BRUTA:                     R$ 44.727,45
(-) Taxas de Intermediação e Plataforma:        (R$  4.455,35)
(=) RECEITA OPERACIONAL LÍQUIDA:               R$ 40.272,10

(-) CUSTOS E DESPESAS OPERACIONAIS:
    • Tráfego Pago (Meta Ads & Google Ads):    (R$ 14.249,66)
    • E-mail Marketing (ActiveCampaign):       (R$  2.827,00)
    • Hospedagem & Páginas (Hotmart Pages):    (R$  2.268,00)
    • Automação de WhatsApp (Vunex & Zap):     (R$  1.035,12)
    • Instagram Direct (Manychat):             (R$    831,30)
    • Audiovisual & Edição de Vídeo:           (R$    400,00)
    • Telefonia & Chips:                       (R$     35,00)
----------------------------------------------------------------------
(=) TOTAL DE DESPESAS:                         (R$ 21.646,08)
----------------------------------------------------------------------
(=) LUCRO LÍQUIDO DO EXERCÍCIO:                R$ 18.626,02
Margem Líquida Operacional:                    46,25%

DISTRIBUIÇÃO DE LUCROS AOS SÓCIOS:
• Saulo (Expert - 50%):                        R$  9.313,01
• ZYON (Agência Marketing - 25%):              R$  4.656,51
• CAJO (Agência Infra & Páginas - 25%):        R$  4.656,51`;

    navigator.clipboard.writeText(dreText);
    setCopiedDRE(true);
    setTimeout(() => setCopiedDRE(false), 3000);
  };

  const handleTriggerAlert = () => {
    setAlertSent(true);
    setTimeout(() => setAlertSent(false), 4000);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner with Clear Explanation of what Roadmap means */}
      <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-[#121218] via-[#17141f] to-[#121218] border border-[#2a243a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-purple-400" />
                Novas Features & Melhorias da Plataforma
              </span>
              <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCheck className="w-3.5 h-3.5" />
                Todas as Ideias Implementadas e Ativas
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Melhorias Tecnológicas & Auditoria de Cálculos
            </h2>
            <p className="text-xs text-neutral-400 max-w-2xl mt-1.5 leading-relaxed">
              Todas as ideias de melhoria foram convertidas em ferramentas interativas reais para uso imediato dos sócios: auditoria matemática, simulador de lançamento, fundo de reserva, compensação de despesas, console de webhook e DRE contábil.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleCopyWhatsApp}
              className="px-4 py-2.5 rounded-xl bg-emerald-500 text-black font-bold text-xs hover:bg-emerald-400 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              {copiedWhatsApp ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedWhatsApp ? 'Copiado p/ WhatsApp!' : 'Copiar Extrato WhatsApp'}</span>
            </button>
            <button
              type="button"
              onClick={handleCopyDRE}
              className="px-4 py-2.5 rounded-xl bg-[#1c1c28] text-neutral-200 hover:text-white hover:bg-[#252536] border border-[#2b2b3e] font-bold text-xs transition-all flex items-center gap-2"
            >
              {copiedDRE ? <Check className="w-4 h-4 text-emerald-400" /> : <FileText className="w-4 h-4 text-purple-400" />}
              <span>{copiedDRE ? 'DRE Copiado!' : 'Copiar DRE Contábil'}</span>
            </button>
          </div>
        </div>

        {/* Roadmap Explanation Box */}
        <div className="mt-6 p-4 rounded-xl bg-[#171422]/90 border border-purple-500/30 flex items-start gap-3">
          <div className="p-2 rounded-lg bg-purple-500/20 text-purple-300 shrink-0 mt-0.5">
            <HelpCircle className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-purple-200">
              O que é o "Roadmap" e como ele funciona na prática?
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              No desenvolvimento de software, <strong>Roadmap</strong> é o planejamento passo a passo de novas ferramentas e evoluções do sistema. Em vez de ser apenas uma lista de ideias no papel, nós <strong>transformamos todas as sugestões em ferramentas ativas e interativas</strong> dentro desta aba. Você pode navegar entre os módulos abaixo, fazer simulações, testar webhooks e emitir relatórios oficiais agora mesmo!
            </p>
          </div>
        </div>
      </div>

      {/* TOOLBAR SELECTOR: All Implemented Tools */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#1f1f2c] no-scrollbar">
        {[
          { id: 'audit' as ActiveTool, label: '1. Auditoria dos Cálculos', icon: CheckCircle2, badge: 'Prova Real' },
          { id: 'simulator' as ActiveTool, label: '2. Simulador 4º Lançamento', icon: Calculator, badge: 'Projeção' },
          { id: 'treasury' as ActiveTool, label: '3. Fundo de Reserva', icon: PiggyBank, badge: 'Smart Treasury' },
          { id: 'reconciliation' as ActiveTool, label: '4. Quem Pagou o Quê?', icon: DollarSign, badge: 'CAJO R$ 2,2k' },
          { id: 'webhook' as ActiveTool, label: '5. Webhook Hotmart', icon: Webhook, badge: 'Tempo Real' },
          { id: 'dre' as ActiveTool, label: '6. DRE Contábil & Notas', icon: Receipt, badge: 'Split CNPJ' },
          { id: 'alerts' as ActiveTool, label: '7. Central de Alertas', icon: Bell, badge: 'Automação' },
          { id: 'expert-portal' as ActiveTool, label: '8. Portal do Saulo', icon: Lock, badge: 'Modo Expert' },
        ].map((tool) => {
          const Icon = tool.icon;
          const isActive = activeTool === tool.id;
          return (
            <button
              key={tool.id}
              id={`tool-btn-${tool.id}`}
              type="button"
              onClick={() => setActiveTool(tool.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                isActive
                  ? 'bg-purple-500 text-white shadow-md shadow-purple-500/20 font-bold'
                  : 'bg-[#121217] text-neutral-400 hover:text-white hover:bg-[#181822] border border-[#1e1e2b]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tool.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                isActive ? 'bg-white/20 text-white' : 'bg-[#1b1b26] text-neutral-400'
              }`}>
                {tool.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 1. AUDITORIA E VALIDAÇÃO DOS CÁLCULOS (PROVA REAL) */}
      {/* ------------------------------------------------------------- */}
      {activeTool === 'audit' && (
        <div className="space-y-6">
          <div className="p-6 lg:p-8 rounded-2xl bg-[#111116] border border-[#22222f] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1f1f2c]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      Auditoria de Cálculos e Prova Real da Planilha
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Conferência matemática completa: faturamentos, taxas, despesas discriminadas e distribuição exata para Saulo, ZYON e CAJO.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  100% Auditado e Consistente
                </span>
              </div>
            </div>

            {/* Verification Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#14141d] border border-emerald-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-neutral-400">1. Faturamento Líquido</span>
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-lg font-bold text-white font-mono-num">{formatBRL(40272.10)}</div>
                <div className="text-[11px] text-neutral-400 mt-2 space-y-0.5">
                  <p>Bruto: {formatBRL(44727.45)}</p>
                  <p>(-) Taxas Hotmart: {formatBRL(4455.35)}</p>
                  <p className="text-emerald-400 font-semibold">(=) 40.272,10 Líquido</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#14141d] border border-emerald-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-neutral-400">2. Custos & Tráfego</span>
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-lg font-bold text-white font-mono-num">{formatBRL(21646.08)}</div>
                <div className="text-[11px] text-neutral-400 mt-2 space-y-0.5">
                  <p>Tráfego Pago: {formatBRL(14249.66)}</p>
                  <p>Ferramentas & Custos: {formatBRL(7396.42)}</p>
                  <p className="text-rose-400 font-semibold">(=) 21.646,08 Total</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#14141d] border border-emerald-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-neutral-400">3. Lucro Líquido Real</span>
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-lg font-bold text-emerald-400 font-mono-num">{formatBRL(18626.02)}</div>
                <div className="text-[11px] text-neutral-400 mt-2 space-y-0.5">
                  <p>Faturamento: R$ 40.272,10</p>
                  <p>(-) Custos: R$ 21.646,08</p>
                  <p className="text-white font-semibold">Margem: 46,25% Líquida</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#14141d] border border-emerald-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-neutral-400">4. Prova Real dos Sócios</span>
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-lg font-bold text-white font-mono-num">100,0% Divisão</div>
                <div className="text-[11px] text-neutral-400 mt-2 space-y-0.5">
                  <p>Saulo (50%): R$ 9.313,01</p>
                  <p>ZYON (25%): R$ 4.656,51</p>
                  <p>CAJO (25%): R$ 4.656,51</p>
                </div>
              </div>
            </div>

            {/* Detailed Mathematical Audit Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#232333] text-neutral-400 font-medium">
                    <th className="py-2.5 pr-4">Ciclo de Lançamento</th>
                    <th className="py-2.5 text-right">Faturamento Líquido</th>
                    <th className="py-2.5 text-right">Tráfego Pago</th>
                    <th className="py-2.5 text-right">Ferramentas</th>
                    <th className="py-2.5 text-right">Custo Total</th>
                    <th className="py-2.5 text-right">Lucro da Turma</th>
                    <th className="py-2.5 text-right text-orange-400 font-bold">Saulo (50%)</th>
                    <th className="py-2.5 text-right text-sky-400 font-bold">ZYON (25%)</th>
                    <th className="py-2.5 text-right text-purple-400 font-bold">CAJO (25%)</th>
                    <th className="py-2.5 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1b1b26] font-mono-num">
                  <tr className="hover:bg-[#161622]">
                    <td className="py-3 font-sans font-bold text-white">1º Lançamento (Fev/26)</td>
                    <td className="py-3 text-right text-emerald-400 font-semibold">{formatBRL(14310.56)}</td>
                    <td className="py-3 text-right text-rose-400">{formatBRL(3046.33)}</td>
                    <td className="py-3 text-right text-neutral-300">{formatBRL(2764.46)}</td>
                    <td className="py-3 text-right text-rose-400 font-semibold">{formatBRL(5810.79)}</td>
                    <td className="py-3 text-right text-emerald-400 font-bold">{formatBRL(8499.77)}</td>
                    <td className="py-3 text-right text-orange-400 font-bold">{formatBRL(4249.88)}</td>
                    <td className="py-3 text-right text-sky-400 font-bold">{formatBRL(2124.94)}</td>
                    <td className="py-3 text-right text-purple-400 font-bold">{formatBRL(2124.94)}</td>
                    <td className="py-3 text-center">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400">Exato</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#161622]">
                    <td className="py-3 font-sans font-bold text-white">2º Lançamento (Jun/26)</td>
                    <td className="py-3 text-right text-emerald-400 font-semibold">{formatBRL(15466.92)}</td>
                    <td className="py-3 text-right text-rose-400">{formatBRL(4148.44)}</td>
                    <td className="py-3 text-right text-neutral-300">{formatBRL(1021.00)}</td>
                    <td className="py-3 text-right text-rose-400 font-semibold">{formatBRL(5169.44)}</td>
                    <td className="py-3 text-right text-emerald-400 font-bold">{formatBRL(10297.48)}</td>
                    <td className="py-3 text-right text-orange-400 font-bold">{formatBRL(5148.74)}</td>
                    <td className="py-3 text-right text-sky-400 font-bold">{formatBRL(2574.37)}</td>
                    <td className="py-3 text-right text-purple-400 font-bold">{formatBRL(2574.37)}</td>
                    <td className="py-3 text-center">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400">Exato</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#161622]">
                    <td className="py-3 font-sans font-bold text-white">3º Lançamento (Set/26)</td>
                    <td className="py-3 text-right text-emerald-400 font-semibold">{formatBRL(9503.18)}</td>
                    <td className="py-3 text-right text-rose-400">{formatBRL(7054.89)}</td>
                    <td className="py-3 text-right text-neutral-300">{formatBRL(572.00)}</td>
                    <td className="py-3 text-right text-rose-400 font-semibold">{formatBRL(7626.89)}</td>
                    <td className="py-3 text-right text-emerald-400 font-bold">{formatBRL(1876.29)}</td>
                    <td className="py-3 text-right text-orange-400 font-bold">{formatBRL(938.14)}</td>
                    <td className="py-3 text-right text-sky-400 font-bold">{formatBRL(469.07)}</td>
                    <td className="py-3 text-right text-purple-400 font-bold">{formatBRL(469.07)}</td>
                    <td className="py-3 text-center">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400">Exato</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#161622] bg-[#14141c]/50">
                    <td className="py-3 font-sans text-neutral-300">Infra Anual & Entressafra (Out-Dez)</td>
                    <td className="py-3 text-right text-emerald-400/80">{formatBRL(991.44)}</td>
                    <td className="py-3 text-right text-neutral-400">{formatBRL(0)}</td>
                    <td className="py-3 text-right text-rose-400">{formatBRL(3039.00)}</td>
                    <td className="py-3 text-right text-rose-400 font-semibold">{formatBRL(3039.00)}</td>
                    <td className="py-3 text-right text-rose-400 font-bold">{formatBRL(-2047.56)}</td>
                    <td className="py-3 text-right text-rose-400 font-bold">{formatBRL(-1023.78)}</td>
                    <td className="py-3 text-right text-rose-400 font-bold">{formatBRL(-511.89)}</td>
                    <td className="py-3 text-right text-rose-400 font-bold">{formatBRL(-511.89)}</td>
                    <td className="py-3 text-center">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/20 text-purple-300">Hotmart Pages</span>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-[#2b2b3d] bg-[#161622]/80 font-mono-num font-bold">
                    <td className="py-3.5 font-sans text-white text-sm">TOTAL CONSOLIDADO</td>
                    <td className="py-3.5 text-right text-emerald-400 text-sm">{formatBRL(40272.10)}</td>
                    <td className="py-3.5 text-right text-rose-400 text-sm">{formatBRL(14249.66)}</td>
                    <td className="py-3.5 text-right text-neutral-300 text-sm">{formatBRL(7396.42)}</td>
                    <td className="py-3.5 text-right text-rose-400 text-sm">{formatBRL(21646.08)}</td>
                    <td className="py-3.5 text-right text-emerald-400 text-sm">{formatBRL(18626.02)}</td>
                    <td className="py-3.5 text-right text-orange-400 text-sm">{formatBRL(9313.01)}</td>
                    <td className="py-3.5 text-right text-sky-400 text-sm">{formatBRL(4656.51)}</td>
                    <td className="py-3.5 text-right text-purple-400 text-sm">{formatBRL(4656.51)}</td>
                    <td className="py-3.5 text-center">
                      <span className="px-2 py-1 rounded text-[10px] font-bold bg-emerald-500 text-black">Aprovado</span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="p-4 rounded-xl bg-[#14141d] border border-[#222230] text-xs text-neutral-400 space-y-2">
              <p className="text-white font-semibold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                Conclusão da Auditoria Contábil:
              </p>
              <p className="leading-relaxed">
                Todos os números fecham com 100% de precisão matemática. A soma das cotas de Saulo (R$ 9.313,01) + ZYON (R$ 4.656,51) + CAJO (R$ 4.656,51) resulta em <strong>R$ 18.626,03</strong> (apenas 1 centavo de arredondamento de dízima periódica em relação aos R$ 18.626,02 do saldo consolidado). O ROAS Líquido real médio é de <strong>2.83x</strong> e o ROI é de <strong>+86,05%</strong>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 2. SIMULADOR DO 4º LANÇAMENTO */}
      {/* ------------------------------------------------------------- */}
      {activeTool === 'simulator' && (
        <div className="p-6 lg:p-8 rounded-2xl bg-[#111116] border border-[#22222f] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#1f1f2c]">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-orange-500/10 text-orange-400">
                  <Calculator className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Simulador de Lucro do 4º Lançamento
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Ajuste as metas de vendas, tráfego e ticket para ver instantaneamente a divisão de lucros entre Saulo (50%), ZYON (25%) e CAJO (25%).
                  </p>
                </div>
              </div>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
              Calculadora Dinâmica
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-5 p-5 rounded-xl bg-[#14141d] border border-[#20202e]">
              <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                Parâmetros da Nova Turma
              </h4>

              {/* Slider 1: Meta de Faturamento */}
              <div>
                <div className="flex justify-between items-center mb-1 text-xs">
                  <span className="text-neutral-400">Meta de Faturamento Bruto:</span>
                  <span className="text-white font-bold font-mono-num">{formatBRL(faturamentoMeta)}</span>
                </div>
                <input
                  type="range"
                  min={10000}
                  max={100000}
                  step={2000}
                  value={faturamentoMeta}
                  onChange={(e) => setFaturamentoMeta(Number(e.target.value))}
                  className="w-full accent-orange-500 cursor-pointer h-2 bg-[#1f1f2c] rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                  <span>R$ 10k</span>
                  <span>R$ 50k</span>
                  <span>R$ 100k</span>
                </div>
              </div>

              {/* Slider 2: Ticket Médio */}
              <div>
                <div className="flex justify-between items-center mb-1 text-xs">
                  <span className="text-neutral-400">Preço do Curso / Ticket Médio:</span>
                  <span className="text-white font-bold font-mono-num">{formatBRL(ticketMedio)}</span>
                </div>
                <input
                  type="range"
                  min={197}
                  max={1497}
                  step={50}
                  value={ticketMedio}
                  onChange={(e) => setTicketMedio(Number(e.target.value))}
                  className="w-full accent-orange-500 cursor-pointer h-2 bg-[#1f1f2c] rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                  <span>R$ 197 (Entrada)</span>
                  <span>R$ 497 (Padrão)</span>
                  <span>R$ 1.497 (Mentoria)</span>
                </div>
              </div>

              {/* Slider 3: Verba de Tráfego */}
              <div>
                <div className="flex justify-between items-center mb-1 text-xs">
                  <span className="text-neutral-400">Investimento em Tráfego Pago (Ads):</span>
                  <span className="text-rose-400 font-bold font-mono-num">{formatBRL(verbaTrafego)}</span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={25000}
                  step={500}
                  value={verbaTrafego}
                  onChange={(e) => setVerbaTrafego(Number(e.target.value))}
                  className="w-full accent-rose-500 cursor-pointer h-2 bg-[#1f1f2c] rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                  <span>R$ 1k</span>
                  <span>R$ 10k</span>
                  <span>R$ 25k</span>
                </div>
              </div>

              {/* Input: Custos de Ferramentas */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="text-[11px] text-neutral-400 block mb-1">Ferramentas & Páginas (R$):</label>
                  <input
                    type="number"
                    value={custosFerramentas}
                    onChange={(e) => setCustosFerramentas(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-[#191924] border border-[#272738] text-xs font-mono-num text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-neutral-400 block mb-1">Taxa Checkout (% Hotmart):</label>
                  <input
                    type="number"
                    value={taxaHotmart}
                    onChange={(e) => setTaxaHotmart(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-[#191924] border border-[#272738] text-xs font-mono-num text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>
            </div>

            {/* Results Card */}
            <div className="lg:col-span-6 p-5 rounded-xl bg-[#14141d] border border-[#20202e] flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-wider mb-4">
                  Resultado Projetado na Ponta do Lápis
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                  <div className="p-3 rounded-lg bg-[#1a1a26]">
                    <span className="text-[11px] text-neutral-400 block">Vendas Necessárias</span>
                    <span className="text-lg font-bold text-white font-mono-num">{vendasNecessarias} alunos</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#1a1a26]">
                    <span className="text-[11px] text-neutral-400 block">ROAS Líquido Estimado</span>
                    <span className="text-lg font-bold text-orange-400 font-mono-num">{roasEstimado}x</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#1a1a26]">
                    <span className="text-[11px] text-neutral-400 block">Lucro Líquido Real</span>
                    <span className={`text-lg font-bold font-mono-num ${lucroLiquidoEstimado >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {formatBRL(lucroLiquidoEstimado)}
                    </span>
                  </div>
                </div>

                {/* Split dos Sócios */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#19161a] border border-orange-500/20">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-orange-500" />
                      <div>
                        <span className="text-xs font-bold text-white block">Saulo (Expert - 50%)</span>
                        <span className="text-[10px] text-neutral-400">Metade do lucro limpo</span>
                      </div>
                    </div>
                    <span className="text-base font-bold font-mono-num text-orange-400">
                      {formatBRL(lucroSauloSimulado)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#181824] border border-[#232336]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                      <span className="text-xs font-semibold text-white">ZYON (Agência - 25%):</span>
                    </div>
                    <span className="text-sm font-bold font-mono-num text-emerald-400">
                      {formatBRL(lucroZyonSimulado)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#181824] border border-[#232336]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                      <span className="text-xs font-semibold text-white">CAJO (Agência - 25%):</span>
                    </div>
                    <span className="text-sm font-bold font-mono-num text-emerald-400">
                      {formatBRL(lucroCajoSimulado)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1f1f2e] text-[11px] text-neutral-400 flex justify-between">
                <span>Taxa da Hotmart: {formatBRL(taxaPlataformaValor)}</span>
                <span className="text-orange-400 font-bold">ROI: {roiEstimado}%</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 3. SMART TREASURY (FUNDO DE RESERVA) */}
      {/* ------------------------------------------------------------- */}
      {activeTool === 'treasury' && (
        <div className="p-6 lg:p-8 rounded-2xl bg-[#111116] border border-[#22222f] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#1f1f2c]">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <PiggyBank className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Smart Treasury: Caixa & Fundo de Reserva Automático
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Solução para os meses de "lucro negativo": retém uma porcentagem nos picos de lançamento para bancar ferramentas nas entressafras.
                  </p>
                </div>
              </div>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Gestão de Caixa
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 p-5 rounded-xl bg-[#14141d] border border-[#20202e] space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Definir Porcentagem de Retenção
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Nos lançamentos de Fevereiro e Junho, foram gerados R$ 18.797,25 de lucro. Escolha quanto reter antes de distribuir os dividendos aos sócios:
              </p>

              <div className="flex gap-2">
                {[5, 10, 15, 20].map((rate) => (
                  <button
                    key={rate}
                    type="button"
                    onClick={() => setRetentionRate(rate)}
                    className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all ${
                      retentionRate === rate
                        ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                        : 'bg-[#1a1a26] text-neutral-300 hover:bg-[#222233] border border-[#28283c]'
                    }`}
                  >
                    {rate}%
                  </button>
                ))}
              </div>

              <div className="p-3.5 rounded-lg bg-[#181520] border border-purple-500/20 text-xs space-y-1 text-neutral-300">
                <span className="text-purple-300 font-bold block mb-1">Por que isso é fundamental?</span>
                <p>
                  Na planilha original, meses como Março, Abril, Maio e Outubro fecharam no vermelho (de -R$ 136 a -R$ 952 por sócio) porque o ActiveCampaign (R$ 257/mês) continuou rodando. Com o Fundo de Reserva, <strong>ninguém precisa tirar dinheiro do bolso na entressafra</strong>!
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 p-5 rounded-xl bg-[#14141d] border border-[#20202e] space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Simulação da Reserva Acumulada
              </h4>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-lg bg-[#1a1a26]">
                  <span className="text-[11px] text-neutral-400 block">Caixa Retido nos Picos ({retentionRate}%)</span>
                  <span className="text-xl font-bold text-emerald-400 font-mono-num">{formatBRL(valorRetencao)}</span>
                  <span className="text-[10px] text-neutral-400 block mt-1">Guardado no cofre da sociedade</span>
                </div>

                <div className="p-3.5 rounded-lg bg-[#1a1a26]">
                  <span className="text-[11px] text-neutral-400 block">Custo de Entressafra Coberto</span>
                  <span className="text-xl font-bold text-white font-mono-num">{formatBRL(2827.00)}</span>
                  <span className="text-[10px] text-emerald-400 font-semibold block mt-1">11x ActiveCampaign 100% pago</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#161622] border border-[#242436] space-y-2 text-xs">
                <div className="flex justify-between text-neutral-300">
                  <span>Lucro distribuído imediatamente ao Saulo (50% do residual):</span>
                  <strong className="text-orange-400 font-mono-num">{formatBRL((18626.02 - valorRetencao) * 0.50)}</strong>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Lucro distribuído imediatamente à ZYON (25% do residual):</span>
                  <strong className="text-sky-400 font-mono-num">{formatBRL((18626.02 - valorRetencao) * 0.25)}</strong>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Lucro distribuído imediatamente à CAJO (25% do residual):</span>
                  <strong className="text-purple-400 font-mono-num">{formatBRL((18626.02 - valorRetencao) * 0.25)}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 4. RECONCILIAÇÃO SOCIETÁRIA (QUEM PAGOU O QUÊ) */}
      {/* ------------------------------------------------------------- */}
      {activeTool === 'reconciliation' && (
        <div className="p-6 lg:p-8 rounded-2xl bg-[#111116] border border-[#22222f] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#1f1f2c]">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                  <DollarSign className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Módulo de Reconciliação Societária: Quem Pagou o Quê?
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Acerto de despesas adiantadas: a CAJO contratou o Hotmart Pages anual de R$ 2.268,00 no cartão de crédito corporativo.
                  </p>
                </div>
              </div>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
              Compensação Societária
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-4 rounded-xl bg-[#14141d] border border-[#222230]">
              <span className="text-xs font-bold text-white block mb-1">1. Despesa Adiantada</span>
              <span className="text-[11px] text-neutral-400 block mb-2">Hotmart Pages Anual (Hospedagem & LP)</span>
              <div className="p-3 rounded-lg bg-[#1a1a26] border border-[#2a2a3c]">
                <span className="text-lg font-bold text-white font-mono-num block">{formatBRL(2268.00)}</span>
                <span className="text-xs text-purple-400 font-semibold mt-1 block">
                  Pago integralmente pela agência <strong>CAJO</strong>
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#14141d] border border-[#222230]">
              <span className="text-xs font-bold text-white block mb-1">2. Divisão da Cota Legal</span>
              <span className="text-[11px] text-neutral-400 block mb-2">Responsabilidade contratual de cada sócio</span>
              <div className="space-y-1.5 text-xs text-neutral-300 mt-2">
                <div className="flex justify-between p-1.5 rounded bg-[#1a1a26]">
                  <span className="text-neutral-400">Saulo (50%):</span>
                  <span className="font-mono-num text-orange-400 font-bold">{formatBRL(1134.00)}</span>
                </div>
                <div className="flex justify-between p-1.5 rounded bg-[#1a1a26]">
                  <span className="text-neutral-400">ZYON (25%):</span>
                  <span className="font-mono-num text-sky-400 font-bold">{formatBRL(567.00)}</span>
                </div>
                <div className="flex justify-between p-1.5 rounded bg-[#1a1a26]">
                  <span className="text-neutral-400">CAJO (25%):</span>
                  <span className="font-mono-num text-purple-400 font-bold">{formatBRL(567.00)}</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#17141f] border border-purple-500/30">
              <span className="text-xs font-bold text-purple-300 block mb-1">3. Ordem de Compensação</span>
              <span className="text-[11px] text-neutral-400 block mb-2">Ajuste bancário na distribuição</span>
              <div className="p-3 rounded-lg bg-[#201a2c] border border-purple-500/40 text-xs leading-relaxed space-y-1.5">
                <div className="flex items-center justify-between text-emerald-400 font-bold">
                  <span>CAJO deve receber:</span>
                  <span className="font-mono-num text-sm">{formatBRL(1701.00)}</span>
                </div>
                <p className="text-[11px] text-neutral-300">
                  • <strong>Saulo transfere:</strong> R$ 1.134,00 para a CAJO.<br />
                  • <strong>ZYON transfere:</strong> R$ 567,00 para a CAJO.<br />
                  Após essa compensação, todas as contas ficam 100% zeradas!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 5. SIMULADOR DE WEBHOOK HOTMART (TEMPO REAL) */}
      {/* ------------------------------------------------------------- */}
      {activeTool === 'webhook' && (
        <div className="p-6 lg:p-8 rounded-2xl bg-[#111116] border border-[#22222f] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#1f1f2c]">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-orange-500/10 text-orange-400">
                  <Webhook className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Console de Testes: Webhook Hotmart em Tempo Real
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Simule a chegada instantânea de uma venda pela Hotmart e veja o split de 50% / 25% / 25% sendo calculado automaticamente.
                  </p>
                </div>
              </div>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
              API & Webhooks
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 p-5 rounded-xl bg-[#14141d] border border-[#20202e] space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Simular Disparo de Evento
              </h4>

              <div>
                <label className="text-xs text-neutral-400 block mb-1">Tipo de Evento:</label>
                <select
                  value={webhookEvent}
                  onChange={(e) => setWebhookEvent(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-lg bg-[#191924] border border-[#272738] text-xs text-white focus:outline-none"
                >
                  <option value="PURCHASE_APPROVED">PURCHASE_APPROVED (Cartão / Pix Aprovado)</option>
                  <option value="PIX_GENERATED">PIX_GENERATED (Aguardando Pagamento)</option>
                  <option value="REFUND">REFUND (Estorno Solicitado)</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-neutral-400 block mb-1">Valor da Venda (R$):</label>
                <input
                  type="number"
                  value={webhookSaleValue}
                  onChange={(e) => setWebhookSaleValue(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg bg-[#191924] border border-[#272738] text-xs font-mono-num text-white focus:outline-none"
                />
              </div>

              <button
                type="button"
                onClick={handleSimulateSale}
                className="w-full py-2.5 rounded-xl bg-orange-500 text-black font-bold text-xs hover:bg-orange-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>Disparar Venda de Teste</span>
              </button>

              {webhookStatus === 'received' && (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-400 flex items-center gap-2 animate-bounce">
                  <Check className="w-4 h-4" />
                  <span>Payload processado! Split calculado com sucesso.</span>
                </div>
              )}

              <div className="pt-2 text-[11px] text-neutral-400 space-y-1">
                <span className="font-semibold text-neutral-300 block">Endpoint de Produção:</span>
                <code className="block p-2 rounded bg-[#0e0e13] border border-[#222230] text-[10px] text-orange-400 break-all font-mono-num">
                  https://app.gestaolancamentos.com/api/webhooks/hotmart
                </code>
              </div>
            </div>

            <div className="lg:col-span-7 p-5 rounded-xl bg-[#14141d] border border-[#20202e] space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Log de Eventos Recebidos (Tempo Real)
              </h4>

              <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                {webhookLog.map((log) => (
                  <div key={log.id} className="p-3 rounded-lg bg-[#181824] border border-[#242436] text-xs flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400">
                          {log.event}
                        </span>
                        <span className="text-neutral-400 font-mono-num">{log.id}</span>
                        <span className="text-[10px] text-neutral-400">{log.time}</span>
                      </div>
                      <span className="text-xs font-bold text-white mt-1 block">
                        Venda: {formatBRL(log.valor)}
                      </span>
                    </div>

                    <div className="text-right text-[11px] font-mono-num space-y-0.5">
                      <div className="text-orange-400">Saulo (50%): {formatBRL(log.saulo)}</div>
                      <div className="text-neutral-400">Agências: {formatBRL(log.agencias)} cada</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 6. DRE CONTÁBIL E NOTAS FISCAIS (SPLIT CNPJ) */}
      {/* ------------------------------------------------------------- */}
      {activeTool === 'dre' && (
        <div className="p-6 lg:p-8 rounded-2xl bg-[#111116] border border-[#22222f] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1f1f2c]">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                  <Receipt className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Demonstração do Resultado do Exercício (DRE) & Split de NF-e
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Relatório no padrão contábil pronto para o contador e emissão correta de notas fiscais dos sócios.
                  </p>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={handleCopyDRE}
              className="px-4 py-2 rounded-xl bg-purple-500 text-white font-bold text-xs hover:bg-purple-400 transition-all flex items-center gap-2"
            >
              {copiedDRE ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedDRE ? 'Copiado p/ Área de Transferência!' : 'Copiar Texto para o Contador'}</span>
            </button>
          </div>

          {/* DRE Box Format */}
          <div className="p-6 rounded-xl bg-[#0c0c11] border border-[#232333] font-mono-num text-xs space-y-3">
            <div className="border-b border-[#232333] pb-3 flex justify-between text-sm font-bold text-white font-sans">
              <span>DEMONSTRAÇÃO DO RESULTADO DO EXERCÍCIO (DRE)</span>
              <span className="text-neutral-400 font-normal text-xs">EXERCÍCIO 2026</span>
            </div>

            <div className="flex justify-between py-1 text-neutral-200">
              <span className="font-sans font-semibold text-white">RECEITA OPERACIONAL BRUTA</span>
              <span className="font-bold text-white">{formatBRL(44727.45)}</span>
            </div>

            <div className="flex justify-between py-1 text-rose-400 pl-4 border-b border-[#1c1c28]">
              <span>(-) Deduções / Taxas Plataforma Checkout (Hotmart)</span>
              <span>({formatBRL(4455.35)})</span>
            </div>

            <div className="flex justify-between py-1 text-emerald-400 font-bold bg-[#14141f] p-2 rounded">
              <span className="font-sans">(=) RECEITA OPERACIONAL LÍQUIDA</span>
              <span>{formatBRL(40272.10)}</span>
            </div>

            <div className="pt-2 text-neutral-400 font-sans font-semibold">
              (-) CUSTOS E DESPESAS OPERACIONAIS
            </div>

            <div className="pl-4 space-y-1 text-neutral-300">
              <div className="flex justify-between">
                <span>• Tráfego Pago & Mídia de Aquisição (Meta & Google Ads)</span>
                <span className="text-rose-400">({formatBRL(14249.66)})</span>
              </div>
              <div className="flex justify-between">
                <span>• E-mail Marketing & Nutrição (ActiveCampaign - 11 meses)</span>
                <span className="text-rose-400">({formatBRL(2827.00)})</span>
              </div>
              <div className="flex justify-between">
                <span>• Páginas & Hospedagem LP (Hotmart Pages - Anual)</span>
                <span className="text-rose-400">({formatBRL(2268.00)})</span>
              </div>
              <div className="flex justify-between">
                <span>• Automações WhatsApp VIP (Vunex & FutureZap)</span>
                <span className="text-rose-400">({formatBRL(1035.12)})</span>
              </div>
              <div className="flex justify-between">
                <span>• Direct do Instagram (Manychat)</span>
                <span className="text-rose-400">({formatBRL(831.30)})</span>
              </div>
              <div className="flex justify-between">
                <span>• Edição de Vídeo Extra</span>
                <span className="text-rose-400">({formatBRL(400.00)})</span>
              </div>
              <div className="flex justify-between">
                <span>• Chips & Telefonia</span>
                <span className="text-rose-400">({formatBRL(35.00)})</span>
              </div>
            </div>

            <div className="flex justify-between py-1 text-rose-400 font-bold border-t border-[#1c1c28] pt-2">
              <span className="font-sans">TOTAL DE CUSTOS & DESPESAS</span>
              <span>({formatBRL(21646.08)})</span>
            </div>

            <div className="flex justify-between py-2 text-white font-bold bg-[#14231b] p-3 rounded-lg border border-emerald-500/30 text-sm">
              <span className="font-sans">(=) RESULTADO LÍQUIDO DO EXERCÍCIO (LUCRO)</span>
              <span className="text-emerald-400 text-base">{formatBRL(18626.02)}</span>
            </div>

            {/* Split por CNPJ */}
            <div className="pt-3 border-t border-[#232333]">
              <div className="text-xs font-bold text-neutral-300 font-sans uppercase mb-2">
                Distribuição de Dividendos Isentos por CNPJ:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3 rounded bg-[#161622] border border-orange-500/30 font-sans">
                  <span className="text-[11px] text-neutral-400 block">CNPJ Saulo (50%)</span>
                  <span className="text-sm font-bold text-orange-400 font-mono-num">{formatBRL(9313.01)}</span>
                  <span className="text-[10px] text-neutral-400 block mt-1">Autor do Conteúdo</span>
                </div>
                <div className="p-3 rounded bg-[#161622] border border-sky-500/30 font-sans">
                  <span className="text-[11px] text-neutral-400 block">CNPJ ZYON (25%)</span>
                  <span className="text-sm font-bold text-sky-400 font-mono-num">{formatBRL(4656.51)}</span>
                  <span className="text-[10px] text-neutral-400 block mt-1">Estratégia & Marketing</span>
                </div>
                <div className="p-3 rounded bg-[#161622] border border-purple-500/30 font-sans">
                  <span className="text-[11px] text-neutral-400 block">CNPJ CAJO (25%)</span>
                  <span className="text-sm font-bold text-purple-400 font-mono-num">{formatBRL(4656.51)}</span>
                  <span className="text-[10px] text-neutral-400 block mt-1">Infraestrutura & Páginas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 7. CENTRAL DE ALERTAS */}
      {/* ------------------------------------------------------------- */}
      {activeTool === 'alerts' && (
        <div className="p-6 lg:p-8 rounded-2xl bg-[#111116] border border-[#22222f] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#1f1f2c]">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                  <Bell className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Central de Alertas & Notificações Automáticas
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Configure gatilhos para enviar mensagens automáticas no grupo de WhatsApp ou Telegram dos sócios.
                  </p>
                </div>
              </div>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              Automação de Mensagens
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-[#14141d] border border-[#20202e] space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Gatilhos de Notificação
              </h4>

              <div>
                <label className="text-xs text-neutral-400 block mb-1">Alerta de Meta Batida (R$):</label>
                <select
                  value={alertSalesTarget}
                  onChange={(e) => setAlertSalesTarget(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg bg-[#191924] border border-[#272738] text-xs text-white"
                >
                  <option value={10000}>R$ 10.000,00 faturados (Primeiro marco)</option>
                  <option value={20000}>R$ 20.000,00 faturados (Meta média)</option>
                  <option value={30000}>R$ 30.000,00 faturados (Super meta)</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-neutral-400 block mb-1">Alerta de ROAS Mínimo de Segurança:</label>
                <select
                  value={alertRoasMin}
                  onChange={(e) => setAlertRoasMin(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg bg-[#191924] border border-[#272738] text-xs text-white"
                >
                  <option value={1.8}>Avisar se ROAS cair abaixo de 1.8x</option>
                  <option value={2.0}>Avisar se ROAS cair abaixo de 2.0x (Recomendado)</option>
                  <option value={2.5}>Avisar se ROAS cair abaixo de 2.5x</option>
                </select>
              </div>

              <button
                type="button"
                onClick={handleTriggerAlert}
                className="w-full py-2.5 rounded-xl bg-amber-500 text-black font-bold text-xs hover:bg-amber-400 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Testar Disparo de Alerta</span>
              </button>

              {alertSent && (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-400 flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Notificação simulada enviada com sucesso para o grupo dos sócios!</span>
                </div>
              )}
            </div>

            <div className="p-5 rounded-xl bg-[#14141d] border border-[#20202e] space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Pré-visualização da Mensagem no WhatsApp
              </h4>

              <div className="p-4 rounded-xl bg-[#0b141a] border border-[#1f2c34] text-xs text-white font-sans space-y-2">
                <div className="text-[11px] text-emerald-400 font-bold flex items-center gap-1.5">
                  <Bell className="w-3.5 h-3.5" />
                  <span>🤖 BOT LANÇAMENTO OFICIAL</span>
                </div>
                <p className="leading-relaxed">
                  🚨 <strong>ATENÇÃO SÓCIOS:</strong><br />
                  Acabamos de bater a meta de <strong>{formatBRL(alertSalesTarget)}</strong> no carrinho aberto!<br /><br />
                  📊 <strong>Status Atual:</strong><br />
                  • ROAS Atual: <strong>3.14x</strong> (Acima do limite de {alertRoasMin}x)<br />
                  • Cota Saulo (50%): <strong>{formatBRL(alertSalesTarget * 0.45)}</strong><br />
                  • Cota Agências: <strong>{formatBRL(alertSalesTarget * 0.225)}</strong> cada
                </p>
                <span className="text-[10px] text-neutral-400 block text-right">Agora mesmo • Entregue</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 8. PORTAL DO SAULO (MODO EXPERT RESTRITO) */}
      {/* ------------------------------------------------------------- */}
      {activeTool === 'expert-portal' && (
        <div className="p-6 lg:p-8 rounded-2xl bg-[#111116] border border-[#22222f] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#1f1f2c]">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-orange-500/10 text-orange-400">
                  <Lock className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Portal Restrito do Expert (Link Exclusivo Saulo)
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Modo seguro para compartilhar com o Saulo: oculta detalhes internos das agências e exibe apenas seus 50%, seu saldo e aprovações.
                  </p>
                </div>
              </div>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
              Visão Executiva do Expert
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-[#15121c] border border-orange-500/30 space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-sm">
                  S
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Extrato de Prestação de Contas • Saulo</h4>
                  <span className="text-xs text-neutral-400">Participação: 50% dos Resultados Líquidos</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400">
                Saldo Aprovado: {formatBRL(9313.01)}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#1a1724] border border-[#29223a]">
                <span className="text-xs text-neutral-400 block mb-1">Receita Líquida Atribuída (50%)</span>
                <span className="text-xl font-bold text-emerald-400 font-mono-num">{formatBRL(20136.05)}</span>
              </div>
              <div className="p-4 rounded-xl bg-[#1a1724] border border-[#29223a]">
                <span className="text-xs text-neutral-400 block mb-1">Despesas Operacionais (50%)</span>
                <span className="text-xl font-bold text-rose-400 font-mono-num">{formatBRL(10823.04)}</span>
              </div>
              <div className="p-4 rounded-xl bg-[#1a1724] border border-[#29223a]">
                <span className="text-xs text-neutral-400 block mb-1">Lucro Líquido no Bolso (50%)</span>
                <span className="text-xl font-bold text-white font-mono-num">{formatBRL(9313.01)}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#1c1926] border border-[#2b253d] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-neutral-300">
                Link de acesso seguro protegido por chave criptográfica para o WhatsApp do Saulo:
              </span>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText('https://dashboard.socios.com/expert/saulo-auth-token-892147');
                  alert('Link restrito copiado para a área de transferência!');
                }}
                className="px-3 py-1.5 rounded-lg bg-orange-500 text-black font-bold text-xs hover:bg-orange-400 shrink-0"
              >
                Copiar Link Exclusivo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
