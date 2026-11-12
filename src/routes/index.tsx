import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

const BASIC = "https://pay.cakto.com.br/uy4b9yw_1077692";
const FULL = "https://pay.cakto.com.br/uy4b9yw_107453";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kit Arteterapia Infantil — +200 fichas prontas para suas sessões" },
      { name: "description", content: "Mais de 200 fichas de arteterapia com roteiro pronto para crianças de 0 a 17 anos. Acesso imediato, 7 dias de garantia." },
      { property: "og:title", content: "Kit Arteterapia Infantil — +200 fichas prontas" },
      { property: "og:description", content: "Prepare sua sessão ou aula em segundos com +200 fichas de arteterapia prontas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------- Ilustrações ---------- */
type Tone = "coral" | "mustard" | "lavender" | "mint" | "primary";
const fill: Record<Tone, string> = {
  coral: "fill-coral", mustard: "fill-mustard", lavender: "fill-lavender", mint: "fill-mint", primary: "fill-primary",
};

function Card({ tone, rotate, children }: { tone: Tone; rotate: string; children?: ReactNode }) {
  return (
    <div className={`absolute flex h-40 w-32 flex-col rounded-xl border-2 border-border bg-card p-3 shadow-soft sm:h-48 sm:w-40 ${rotate}`}>
      <div className={`h-3 w-16 rounded-full ${tone === "coral" ? "bg-coral" : tone === "mustard" ? "bg-mustard" : tone === "lavender" ? "bg-lavender" : "bg-mint"}`} />
      <div className="mt-2 h-2 w-20 rounded-full bg-muted" />
      <div className="mt-1 h-2 w-14 rounded-full bg-muted" />
      <div className="mt-auto">{children}</div>
    </div>
  );
}

function KitMockup() {
  return (
    <div className="relative mx-auto h-64 w-full max-w-sm sm:h-80">
      <svg className="absolute -left-2 top-4 h-24 w-24 opacity-80" viewBox="0 0 100 100"><path className="fill-lavender" d="M50 8c22 0 40 14 38 36s-18 46-42 46S8 72 10 48 28 8 50 8z" /></svg>
      <svg className="absolute -right-2 bottom-2 h-28 w-28 opacity-80" viewBox="0 0 100 100"><path className="fill-mustard" d="M52 6c26 4 44 24 38 48S60 96 36 90 4 64 10 40 30 2 52 6z" /></svg>
      <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-[8%] top-[14%]"><Card tone="lavender" rotate="-rotate-12"><Blob tone="lavender" /></Card></div>
        <div className="absolute right-[8%] top-[10%]"><Card tone="mint" rotate="rotate-12"><Blob tone="mint" /></Card></div>
        <div className="absolute left-1/2 top-[6%] -translate-x-1/2 animate-float">
          <div className="relative flex h-48 w-36 flex-col rounded-2xl border-2 border-primary bg-card p-3 shadow-soft sm:h-56 sm:w-44">
            <span className="font-display text-[10px] font-black uppercase tracking-wider text-primary">Kit Arteterapia</span>
            <span className="font-display text-2xl font-black leading-none text-coral">+200</span>
            <span className="font-display text-xs font-bold text-foreground">fichas prontas</span>
            <svg viewBox="0 0 120 70" className="mt-auto w-full">
              <path d="M5 55 Q30 20 55 45 T110 30" className="stroke-coral" strokeWidth="6" fill="none" strokeLinecap="round" />
              <circle cx="25" cy="20" r="10" className="fill-mustard" />
              <path d="M70 60 l10 -30 l10 30z" className="fill-primary" />
            </svg>
          </div>
        </div>
      </div>
      {/* lápis */}
      <svg className="absolute bottom-0 left-4 h-16 w-40 -rotate-6" viewBox="0 0 160 30">
        <rect x="0" y="8" width="120" height="14" rx="3" className="fill-coral" />
        <path d="M120 8 L150 15 L120 22z" className="fill-mustard" />
        <path d="M142 13 L150 15 L142 17z" className="fill-foreground" />
      </svg>
      <span className="absolute right-2 top-0 rotate-6 rounded-full bg-primary px-3 py-1 font-display text-xs font-black text-primary-foreground">Produto digital</span>
    </div>
  );
}

function Blob({ tone }: { tone: Tone }) {
  return <svg viewBox="0 0 100 60" className="w-full"><path className={fill[tone]} d="M10 40c0-20 20-30 40-28s40 6 40 22-20 24-40 22S10 56 10 40z" /></svg>;
}

function SlideArt({ i }: { i: number }) {
  const arts = [
    <g key="0"><circle cx="70" cy="80" r="28" className="fill-mustard" /><circle cx="130" cy="80" r="28" className="fill-coral" /><path d="M60 140 Q100 170 140 140" className="stroke-primary" strokeWidth="8" fill="none" strokeLinecap="round" /><path d="M95 60 q5 -20 10 0" className="stroke-lavender" strokeWidth="6" fill="none" /></g>,
    <g key="1"><circle cx="55" cy="70" r="26" className="fill-coral" /><circle cx="105" cy="60" r="26" className="fill-mustard" /><circle cx="150" cy="80" r="26" className="fill-lavender" /><circle cx="80" cy="125" r="26" className="fill-mint" /><circle cx="135" cy="130" r="26" className="fill-primary" /></g>,
    <g key="2"><path d="M20 120 Q50 40 80 120 T140 120 T200 120" className="stroke-coral" strokeWidth="10" fill="none" strokeLinecap="round" /><path d="M20 150 Q50 90 80 150 T140 150 T200 150" className="stroke-mustard" strokeWidth="8" fill="none" strokeLinecap="round" /><circle cx="160" cy="50" r="18" className="fill-primary" /></g>,
    <g key="3"><circle cx="100" cy="95" r="60" className="fill-mint" /><circle cx="100" cy="95" r="40" className="fill-lavender" /><circle cx="100" cy="95" r="20" className="fill-card" /><path d="M30 40 q10 -10 20 0 t20 0" className="stroke-primary" strokeWidth="5" fill="none" /></g>,
    <g key="4">{[0, 1, 2, 3, 4, 5].map((k) => { const a = (k / 6) * Math.PI * 2; return <circle key={k} cx={100 + Math.cos(a) * 55} cy={95 + Math.sin(a) * 55} r="16" className={fill[(["coral", "mustard", "lavender", "mint", "primary", "coral"] as Tone[])[k] ?? "coral"]} />; })}<circle cx="100" cy="95" r="22" className="fill-mustard" /></g>,
  ];
  return <svg viewBox="0 0 200 190" className="h-full w-full">{arts[i]}</svg>;
}

/* ---------- Componentes ---------- */
function Cta({ children, href = "#pricing" }: { children: ReactNode; href?: string }) {
  return <a href={href} className="btn-cta mx-auto max-w-md">{children}</a>;
}
function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return <section id={id} className={`px-5 py-14 sm:py-20 ${className}`}><div className="mx-auto max-w-5xl">{children}</div></section>;
}
function Title({ children, sub }: { children: ReactNode; sub?: ReactNode }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="font-display text-2xl font-black uppercase leading-tight text-primary sm:text-4xl">{children}</h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}

const slides = [
  ["Ficha: Acolhimento na Primeira Sessão", "Atividades de aproximação com perguntas-guia prontas para quebrar o gelo."],
  ["Ficha: Trabalhando Emoções com Cores", "A criança nomeia sentimentos pintando — ideal para quem trava em ‘como você está se sentindo?’."],
  ["Ficha: Atividades para Crianças Agitadas", "Canaliza a energia do corpo antes da parte reflexiva."],
  ["Ficha: Autorregulação e Respiração Lúdica", "Calma disfarçada de brincadeira."],
  ["Ficha: Roda de Conversa para Sala de Aula", "Versão coletiva pensada para a educação infantil."],
];

function Carousel() {
  const ref = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const [zoom, setZoom] = useState<number | null>(null);
  const go = (n: number) => {
    const el = ref.current; if (!el) return;
    const i = (n + slides.length) % slides.length;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };
  return (
    <div>
      <div className="relative">
        <div ref={ref} onScroll={(e) => setIdx(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
          className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto rounded-3xl">
          {slides.map(([t, d], i) => (
            <button key={t} onClick={() => setZoom(i)} className="w-full shrink-0 snap-center px-1 text-left">
              <div className="paper-dots overflow-hidden rounded-3xl border-2 border-border bg-card p-5 shadow-soft">
                <div className="mx-auto h-48 max-w-xs sm:h-64"><SlideArt i={i} /></div>
                <h3 className="mt-3 font-display text-xl font-black text-primary">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            </button>
          ))}
        </div>
        <button aria-label="Anterior" onClick={() => go(idx - 1)} className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary px-3 py-2 font-black text-primary-foreground shadow-soft">‹</button>
        <button aria-label="Próximo" onClick={() => go(idx + 1)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary px-3 py-2 font-black text-primary-foreground shadow-soft">›</button>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((_, i) => <button key={i} aria-label={`Slide ${i + 1}`} onClick={() => go(i)} className={`h-2.5 rounded-full transition-all ${i === idx ? "w-7 bg-coral" : "w-2.5 bg-border"}`} />)}
      </div>
      <p className="mt-2 text-center text-sm font-semibold text-muted-foreground">{idx + 1}/5 · Toque para ampliar</p>
      {zoom !== null && (
        <div onClick={() => setZoom(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/70 p-4">
          <div className="w-full max-w-lg rounded-3xl bg-card p-6">
            <div className="h-72"><SlideArt i={zoom} /></div>
            <h3 className="font-display text-2xl font-black text-primary">{slides[zoom]?.[0]}</h3>
            <p className="mt-2 text-muted-foreground">{slides[zoom]?.[1]}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function Faq() {
  const items = [
    ["Preciso saber desenhar ou ter habilidade artística?", "Não. As fichas são conduzidas pela atividade, não pelo desenho — e nenhuma exige técnica sua ou da criança."],
    ["Serve para qualquer idade, de 0 a 17 anos?", "Sim. Organizadas por objetivo e nível, com adaptações indicadas para cada faixa — da pré-escola ao atendimento com adolescentes."],
    ["Atividade pronta não engessa minha sessão?", "Ao contrário: cada ficha traz roteiro flexível com perguntas-guia abertas para você adaptar às palavras e ao momento da criança. A estrutura poupa tempo; a condução continua sendo sua."],
    ["E se a criança for atípica ou muito agitada?", "O kit inclui categorias específicas para autorregulação e adaptações para público atípico."],
    ["Como recebo o material?", "Pelo WhatsApp e e-mail, logo após a confirmação do pagamento, no celular ou para imprimir."],
    ["E se eu não gostar?", "Você tem 7 dias de garantia total: devolvemos 100% do valor, sem burocracia."],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-2xl space-y-3">
      {items.map(([q, a], i) => (
        <div key={q} className="overflow-hidden rounded-2xl border-2 border-border bg-card">
          <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-4 text-left font-display font-extrabold text-foreground">
            {q}<span className={`text-2xl text-coral transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
          </button>
          <div className={`grid transition-all ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
            <p className="overflow-hidden px-4 text-muted-foreground"><span className="block pb-4">{a}</span></p>
          </div>
        </div>
      ))}
    </div>
  );
}

function useCountdown() {
  const [left, setLeft] = useState(3 * 3600);
  useEffect(() => {
    const end = Date.now() + 3 * 3600 * 1000;
    const t = setInterval(() => setLeft(Math.max(0, Math.round((end - Date.now()) / 1000))), 1000);
    return () => clearInterval(t);
  }, []);
  const h = Math.floor(left / 3600), m = Math.floor((left % 3600) / 60), s = left % 60;
  const p = (n: number) => String(n).padStart(2, "0");
  return `${p(h)}:${p(m)}:${p(s)}`;
}

const bonus = [
  ["Guia de Primeira Sessão Passo a Passo", "Como estruturar o primeiro encontro, do acolhimento ao encerramento.", "47,00", "📘"],
  ["Guia Rápido: Arteterapia com Crianças Atípicas", "Adaptações práticas para TEA e agitação, direto ao ponto.", "47,00", "🧩"],
  ["Perguntas-Guia para Cada Ficha", "As questões que transformam a atividade em conversa terapêutica.", "37,00", "💬"],
  ["Plano de Aula Coletivo para Educação Infantil", "Roteiro de condução para a turma inteira.", "27,00", "🏫"],
  ["Checklist de Materiais Acessíveis", "Tudo usando o que já tem na escola ou consultório.", "37,00", "✅"],
];

const Check = ({ children }: { children: ReactNode }) => (
  <li className="flex gap-2"><span className="font-black text-primary">✓</span><span>{children}</span></li>
);
const PayBadges = () => <p className="mt-3 text-center text-sm font-bold text-muted-foreground">💠 Pix • 💳 Cartão</p>;

function ExitPopup() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("exitShown")) return;
    const open = () => { if (sessionStorage.getItem("exitShown")) return; sessionStorage.setItem("exitShown", "1"); setShow(true); };
    const onLeave = (e: MouseEvent) => { if (e.clientY <= 0) open(); };
    document.addEventListener("mouseleave", onLeave);
    const touch = window.matchMedia("(pointer: coarse)").matches;
    const t = touch ? setTimeout(open, 35000) : undefined;
    return () => { document.removeEventListener("mouseleave", onLeave); if (t) clearTimeout(t); };
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/70 p-4" onClick={() => setShow(false)}>
      <div onClick={(e) => e.stopPropagation()} className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-3xl border-4 border-coral bg-background p-6 text-center">
        <button aria-label="Fechar" onClick={() => setShow(false)} className="absolute right-3 top-3 h-9 w-9 rounded-full bg-muted font-black text-foreground">✕</button>
        <span className="inline-block rounded-full bg-mustard px-3 py-1 font-display text-xs font-black text-foreground">🎁 OFERTA ESPECIAL</span>
        <h3 className="mt-3 font-display text-2xl font-black text-coral">🛑 ESPERE! ANTES DE SAIR…</h3>
        <p className="mt-2 font-semibold">Leve o 🔥 <b>Kit Completo</b> com desconto de última hora:</p>
        <p className="mt-1">De <s className="text-muted-foreground">R$ 122,25</s> por apenas</p>
        <p className="font-display text-4xl font-black text-primary">R$ 17,97</p>
        <div className="scale-75"><KitMockup /></div>
        <ul className="space-y-1 text-left text-sm">
          <Check>Acesso enviado pelo WhatsApp — entrega automática no seu celular</Check>
          <Check>Os 5 bônus exclusivos</Check>
        </ul>
        <a href={FULL} className="btn-cta mt-5">LEVE O KIT COMPLETO COM DESCONTO</a>
        <PayBadges />
        <button onClick={() => setShow(false)} className="mt-3 text-xs text-muted-foreground underline">Não quero aproveitar</button>
      </div>
    </div>
  );
}

/* ---------- Página ---------- */
function Index() {
  const timer = useCountdown();
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      <div className="bg-primary px-4 py-2.5 text-center text-sm font-bold text-primary-foreground">
        ✨ Material pronto para suas sessões e aulas: acesso imediato após a compra
      </div>

      {/* Hero */}
      <Section className="paper-dots">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="text-center md:text-left">
            <span className="inline-block -rotate-2 rounded-full bg-lavender px-4 py-1.5 font-display text-sm font-black text-foreground">🎨 Kit de Arteterapia Infantil</span>
            <h1 className="mt-5 font-display text-[1.7rem] font-black leading-tight text-foreground sm:text-4xl">
              As <span className="crayon-underline text-coral">+200 fichas de arteterapia</span> que preparam sua sessão em segundos — para usar com crianças de 0 a 17 anos, mesmo entre um atendimento e outro!
            </h1>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              Pare de caçar atividades no Pinterest depois do expediente. Mais de 200 fichas prontas, com roteiro flexível de <b className="text-primary">abertura → atividade → perguntas-guia → encerramento</b>, para você escolher pelo tema, imprimir (ou mostrar na tela) e aplicar na hora.
            </p>
          </div>
          <KitMockup />
        </div>
        <div className="mt-8"><Cta>👉 APLIQUE A ATIVIDADE DE AMANHÃ EM SEGUNDOS</Cta></div>
        <div className="mx-auto mt-6 grid max-w-2xl gap-2 text-sm font-semibold sm:grid-cols-3">
          {["📱 Acesso imediato no celular ou para imprimir", "🔒 Compra 100% segura", "🛡️ 7 dias de garantia total"].map((t) => (
            <div key={t} className="rounded-xl bg-card px-3 py-2 text-center shadow-soft">{t}</div>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary">
        <Title>Veja um pouco do que vai receber</Title>
        <div className="mx-auto max-w-xl"><Carousel /></div>
      </Section>

      <Section>
        <Title>Mais de 200 fichas de arteterapia prontas para abrir e usar...</Title>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["🎨", "+200 fichas organizadas por objetivo", "Cada uma com roteiro flexível de abertura, atividade, perguntas-guia e encerramento — você adapta às palavras da criança, não o contrário."],
            ["🧒", "Repertório para os casos difíceis", "Crianças atípicas, agitadas ou que ‘já fizeram terapia e viram tudo’."],
            ["⏱️", "Planejamento em minutos, não em horas", "Escolha pelo tema, imprima, aplique."],
            ["🏫", "Serve para clínica e para sala de aula", "Versões individuais e coletivas para educação infantil."],
            ["✋", "Sem material caro nem técnica de desenho", "O que você já tem resolve."],
            ["📱", "Acesso no celular ou para imprimir", "Use na tela ou em papel, como preferir."],
          ].map(([e, t, d]) => (
            <div key={t} className="flex gap-4 rounded-2xl border-2 border-border bg-card p-5">
              <span className="text-3xl">{e}</span>
              <div><h3 className="font-display font-black text-primary">{t}</h3><p className="mt-1 text-sm text-muted-foreground">{d}</p></div>
            </div>
          ))}
        </div>
        <div className="mt-10"><Cta>👉 TENHA O REPERTÓRIO PRONTO PARA QUALQUER CRIANÇA</Cta></div>
      </Section>

      <div className="-rotate-1 bg-coral px-5 py-5 text-center font-display text-lg font-black text-accent-foreground sm:text-2xl">
        +200 PROFISSIONAIS JÁ RECUPERARAM SEU FIM DE EXPEDIENTE COM O KIT
      </div>

      <Section>
        <Title>Tudo organizado por categorias para facilitar sua jornada</Title>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {([
            ["🤝", "Acolhimento e primeira sessão", 40, "bg-mustard"],
            ["💛", "Emoções e autoconhecimento", 45, "bg-coral"],
            ["🌬️", "Crianças agitadas e autorregulação", 40, "bg-mint"],
            ["🧩", "Atividades para público atípico TEA", 35, "bg-lavender"],
            ["🗣️", "Roda de conversa e uso em sala de aula", 25, "bg-mustard"],
            ["🌈", "Encerramento e fechamento de processo", 20, "bg-mint"],
          ] as const).map(([e, t, n, bg]) => (
            <div key={t} className="overflow-hidden rounded-2xl border-2 border-border bg-card shadow-soft">
              <div className={`flex h-24 items-center justify-center text-5xl ${bg}`}>{e}</div>
              <div className="p-4 text-center">
                <h3 className="font-display font-black text-foreground">{t}</h3>
                <span className="mt-2 inline-block rounded-full bg-secondary px-3 py-1 text-sm font-bold text-primary">{n} fichas</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10"><Cta>👉 ESCOLHA PELO TEMA, IMPRIMA E APLIQUE</Cta></div>
      </Section>

      <Section className="bg-secondary">
        <Title>Este kit é perfeito para você que:</Title>
        <ul className="mx-auto max-w-2xl space-y-3">
          {[
            "Termina o dia exausta de tanto planejar atividades",
            "Já perdeu tempo procurando ideias no Pinterest, TikTok ou Google",
            "Precisa de repertório para crianças atípicas ou agitadas",
            "Quer parecer preparada diante dos pais e alunos",
            "É professora de educação infantil e quer atividades coletivas",
            "Prefere pagar uma vez e usar para sempre em vez de assinatura",
          ].map((t) => (
            <li key={t} className="flex items-center gap-3 rounded-2xl bg-card p-4 font-semibold shadow-soft">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-black text-primary-foreground">✓</span>{t}
            </li>
          ))}
        </ul>
        <div className="mt-10"><Cta>👉 RECUPERE SEU FIM DE EXPEDIENTE</Cta></div>
      </Section>

      <Section>
        <Title sub="ADQUIRA AGORA E RECEBA +5 BÔNUS EXCLUSIVOS">🎁 Presente especial</Title>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bonus.map(([t, d, v, e], i) => (
            <div key={t} className="relative rounded-2xl border-2 border-dashed border-coral bg-card p-5 text-center">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-coral px-3 py-0.5 font-display text-xs font-black text-accent-foreground">BÔNUS {i + 1}</span>
              <div className="text-4xl">{e}</div>
              <h3 className="mt-2 font-display font-black text-primary">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              <p className="mt-3 text-sm font-bold"><span className="text-primary">✓ GRÁTIS HOJE</span> <s className="text-muted-foreground">de R$ {v}</s></p>
            </div>
          ))}
        </div>
        <div className="mt-10"><Cta>👉 GARANTA O KIT COMPLETO + 5 BÔNUS GRÁTIS</Cta></div>
      </Section>

      <Section id="pricing" className="paper-dots bg-secondary">
        <Title sub="Pagamento único e acesso imediato">Escolha seu plano</Title>
        <div className="mx-auto grid max-w-4xl items-start gap-6 md:grid-cols-2">
          <div className="rounded-3xl border-2 border-border bg-card p-6">
            <span className="inline-block rounded-full bg-muted px-3 py-1 font-display text-xs font-black text-foreground">⚡ O ESSENCIAL PARA COMEÇAR</span>
            <h3 className="mt-3 font-display text-2xl font-black text-primary">Kit Básico</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <Check>+200 fichas de arteterapia prontas para usar</Check>
              <Check>Organizadas por objetivo e faixa de uso</Check>
              <Check>Acesso digital imediato — no celular ou para imprimir</Check>
            </ul>
            <div className="mt-6 text-center">
              <p className="text-sm">De <s className="text-muted-foreground">R$ 47,00</s> por apenas</p>
              <p className="font-display text-4xl font-black text-foreground">R$ 9,17</p>
              <p className="text-xs text-muted-foreground">à vista no Pix ou cartão</p>
            </div>
            <a href={BASIC} className="btn-teal mt-5">🛒 GARANTA AS +200 FICHAS</a>
            <PayBadges />
          </div>
          <div className="relative rounded-3xl border-4 border-coral bg-card p-6 shadow-soft md:-mt-4">
            <span className="block rounded-2xl bg-coral px-3 py-2 text-center font-display text-xs font-black text-accent-foreground">🔥 O PADRÃO PARA QUEM ATENDE TODA SEMANA — O MAIS ADQUIRIDO</span>
            <h3 className="mt-3 font-display text-2xl font-black text-primary">Kit Completo</h3>
            <div className="-my-4 scale-75"><KitMockup /></div>
            <ul className="space-y-2 text-sm">
              <Check>Tudo do plano básico</Check>
              <Check>Acesso enviado pelo WhatsApp — entrega automática no seu celular</Check>
              <Check>Acesso ao aplicativo exclusivo do Kit Arteterapia Infantil</Check>
              {bonus.map(([t, , v]) => <Check key={t}>🎁 {t} <s className="text-muted-foreground">R$ {v}</s></Check>)}
            </ul>
            <div className="mt-6 text-center">
              <p className="text-sm">De <s className="text-muted-foreground">R$ 97,00</s> por apenas</p>
              <p className="font-display text-5xl font-black text-coral">R$ 17,97</p>
              <p className="text-xs text-muted-foreground">à vista no Pix ou cartão</p>
            </div>
            <a href={FULL} className="btn-cta mt-5">GARANTA O KIT COMPLETO + 5 BÔNUS</a>
            <PayBadges />
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-md rounded-2xl bg-foreground p-4 text-center text-background">
          <p className="font-display font-black">⏰ Oferta garantida por mais <span className="text-mustard">{timer}</span></p>
          <p className="mt-1 text-xs opacity-80">Oferta promocional pode não estar mais disponível após o tempo expirar.</p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border-2 border-primary bg-card p-8 text-center sm:flex-row sm:text-left">
          <svg viewBox="0 0 120 120" className="h-32 w-32 shrink-0">
            <path className="fill-mustard" d="M60 4l12 10 16-2 6 15 15 6-2 16 10 12-10 12 2 16-15 6-6 15-16-2-12 10-12-10-16 2-6-15-15-6 2-16L4 60l10-12-2-16 15-6 6-15 16 2z" />
            <circle cx="60" cy="60" r="36" className="fill-primary" />
            <text x="60" y="58" textAnchor="middle" className="fill-primary-foreground font-display" fontSize="26" fontWeight="900">7</text>
            <text x="60" y="76" textAnchor="middle" className="fill-primary-foreground font-display" fontSize="11" fontWeight="800">DIAS</text>
          </svg>
          <div>
            <h2 className="font-display text-2xl font-black text-primary">GARANTIA DE 7 DIAS</h2>
            <p className="mt-2 text-muted-foreground">Baixe as fichas, escolha uma pelo tema e aplique na sua próxima sessão ou aula. Se o kit não economizar o seu tempo de planejamento, devolvemos 100% do seu dinheiro, sem burocracia.</p>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary">
        <Title>Como vou receber o material?</Title>
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {[["01", "Realize o pagamento", "Clique em Comprar agora e conclua no checkout."], ["02", "Receba seu material", "Após a confirmação, você recebe as orientações pelo WhatsApp e e-mail."]].map(([n, t, d]) => (
            <div key={n} className="rounded-2xl bg-card p-6 shadow-soft">
              <span className="font-display text-4xl font-black text-coral">{n}</span>
              <h3 className="mt-1 font-display text-lg font-black text-primary">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Title>Perguntas frequentes</Title>
        <Faq />
        <div className="mt-10"><Cta>👉 PLANEJE A PRÓXIMA SESSÃO EM SEGUNDOS</Cta></div>
      </Section>

      <footer className="bg-primary px-5 py-8 text-center text-sm text-primary-foreground">
        <p className="font-display text-lg font-black">🎨 Kit Arteterapia Infantil</p>
        <p className="mt-1 opacity-80">© Kit Arteterapia Infantil — Todos os direitos reservados</p>
      </footer>

      <ExitPopup />
    </main>
  );
}
