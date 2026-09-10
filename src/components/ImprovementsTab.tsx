import React from 'react';
import { 
  Lightbulb, 
  TrendingUp, 
  Layers, 
  PiggyBank, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  Zap
} from 'lucide-react';
import { formatBRL } from '../data/launchData';

export const ImprovementsTab: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-[#171310] via-[#1c1511] to-[#121217] border border-orange-500/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-start gap-4 relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-orange-500 text-black flex items-center justify-center font-bold text-2xl shadow-xl shadow-orange-500/30 shrink-0">
            <Lightbulb className="w-7 h-7 text-black stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30">
                Consultoria & Análise Estratégica
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Sugestões de Melhorias & Recomendações
            </h2>
            <p className="text-xs text-neutral-300 mt-1 max-w-3xl leading-relaxed">
              Com base nos dados reais extraídos dos 3 ciclos de lançamento (R$ 44,7k de faturamento bruto e R$ 18,6k de lucro líquido), compilamos sugestões práticas tanto para a <strong className="text-white">organização visual e prestação de contas com o cliente</strong> quanto para a <strong className="text-orange-400">maximização de lucro dos próximos lançamentos</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* 4 Core Pillars of Improvement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pillar 1: Organização & Hierarquia Visual */}
        <div className="p-6 rounded-2xl bg-[#111116] border border-[#22222f] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-orange-500/15 text-orange-400">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  1. Organização de Abas & Hierarquia para o Cliente
                </h3>
                <span className="text-xs text-neutral-400">Como apresentar sem assustar com excesso de tabelas</span>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-neutral-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Visão Executiva em 1 Tela (One-Pager):</strong>
                  <p className="text-neutral-400 mt-0.5">
                    O cliente (Saulo) precisa ver primeiro <em>&ldquo;quanto entrou, quanto custou e quanto sobrou no bolso dele&rdquo;</em>. Tabelas com dezenas de parcelas devem ficar em abas secundárias de auditoria.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Destaque Cromático Semântico (Verde & Vermelho):</strong>
                  <p className="text-neutral-400 mt-0.5">
                    Identificação imediata: qualquer entrada em verde esmeralda e custos em vermelho carmim. Isso elimina a confusão entre faturamento bruto e lucro real.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Separação de Abas por Papel:</strong>
                  <p className="text-neutral-400 mt-0.5">
                    Uma aba dedicada para Saulo (50%) para envio direto a ele, e uma aba técnica para ZYON & CAJO para controle interno de ferramentas e notas fiscais.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-5 p-3 rounded-xl bg-[#161622] border border-[#232334] text-[11px] text-neutral-300">
            💡 <strong>Dica de ouro:</strong> Use o botão <em>&ldquo;Modo Apresentação&rdquo;</em> no topo para ocultar notas operacionais quando for compartilhar a tela com o expert.
          </div>
        </div>

        {/* Pillar 2: Diagnóstico de Tráfego e ROAS */}
        <div className="p-6 rounded-2xl bg-[#111116] border border-[#22222f] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-sky-500/15 text-sky-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  2. Eficiência de Tráfego & Escala (Alerta Ciclo 3)
                </h3>
                <span className="text-xs text-neutral-400">Análise de retorno sobre investimento em anúncios</span>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-neutral-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                <div>
                  <strong className="text-white">Lançamento 1 (Fev) & 2 (Jun) foram extremamente lucrativos:</strong>
                  <p className="text-neutral-400 mt-0.5">
                    ROAS de <strong>4.69x</strong> e <strong>3.73x</strong> sobre o tráfego pago, gerando mais de R$ 18.000 de lucro combinado.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Ponto de Atenção no Lançamento 3 (Setembro):</strong>
                  <p className="text-neutral-400 mt-0.5">
                    O investimento em tráfego saltou para <strong className="text-rose-400">R$ 7.054,89</strong> (quase o dobro do 2º), mas o faturamento caiu para <strong>R$ 10.131,42</strong> (ROAS de 1.49x).
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Ação Recomendada para o 4º Lançamento:</strong>
                  <p className="text-neutral-400 mt-0.5">
                    Não subir verba bruscamente antes de renovar os criativos de captação e reaquecer a base de leads orgânicos do Saulo.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-5 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300">
            ⚠️ <strong>Oportunidade:</strong> Se o Ciclo 3 mantivesse o ROAS de 3.5x, o lucro total do projeto teria superado <strong>R$ 32.000</strong>!
          </div>
        </div>

        {/* Pillar 3: Racionalização de Ferramentas */}
        <div className="p-6 rounded-2xl bg-[#111116] border border-[#22222f] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-400">
                <PiggyBank className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  3. Otimização de Ferramentas (Economia de até R$ 2.400)
                </h3>
                <span className="text-xs text-neutral-400">Eliminação de sobreposições de software</span>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-neutral-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Unificação de Disparadores WhatsApp:</strong>
                  <p className="text-neutral-400 mt-0.5">
                    Foram contratados tanto a <strong>Vunex</strong> (R$ 753,60) quanto o <strong>Future Zap</strong> (R$ 281,52). Unificar em uma única plataforma pode economizar cerca de 30% no canal.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Hotmart Pages Anual (R$ 2.268,00):</strong>
                  <p className="text-neutral-400 mt-0.5">
                    Avaliar construtores headless rápidos (WordPress/Elementor em servidor próprio ou Framer) que custam ~R$ 300 a R$ 600/ano, gerando mais de R$ 1.600 de economia líquida.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Pausa de Planos em Entressafra:</strong>
                  <p className="text-neutral-400 mt-0.5">
                    Manychat foi ativado somente nos meses necessários (R$ 831 total), o que foi uma excelente prática de economia que deve ser mantida.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-5 p-3 rounded-xl bg-[#161622] border border-[#232334] text-[11px] text-neutral-300">
            💰 Potencial de economia anual em ferramentas: <strong>R$ 1.800 a R$ 2.400</strong> no caixa da sociedade.
          </div>
        </div>

        {/* Pillar 4: Fundo de Reserva & Capital de Giro */}
        <div className="p-6 rounded-2xl bg-[#111116] border border-[#22222f] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  4. Fundo de Capital de Giro para Meses de Manutenção
                </h3>
                <span className="text-xs text-neutral-400">Fim dos meses com saldo negativo a pagar</span>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-neutral-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">O Problema Atual:</strong>
                  <p className="text-neutral-400 mt-0.5">
                    Nos meses entre lançamentos (ex: Março, Abril, Maio e Outubro), as despesas continuam rodando (-R$ 264, -R$ 246, -R$ 952), exigindo acertos de contas chatos entre os sócios.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">A Solução Prática (Reserva de 10%):</strong>
                  <p className="text-neutral-400 mt-0.5">
                    Nos picos de lucro de Fevereiro e Junho, reter 10% do lucro em um colchão financeiro do projeto (ex: R$ 1.500 a R$ 2.000). Esse saldo paga automaticamente as ferramentas mensais sem nenhum sócio precisar fazer Pix de manutenção.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Tranquilidade no Relacionamento com o Expert:</strong>
                  <p className="text-neutral-400 mt-0.5">
                    O expert Saulo passa a receber apenas transferências positivas de lucro, aumentando a percepção de sucesso do lançamento.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300">
            🚀 <strong>Próximo Passo:</strong> Adotar esse modelo de caixa conjunto a partir do 4º ciclo de vendas.
          </div>
        </div>
      </div>
    </div>
  );
};
