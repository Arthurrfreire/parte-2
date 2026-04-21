import { AnimatedCodePanel } from "../components/AnimatedCodePanel";

const benefits = [
  "+40 horas de conteudo direto ao ponto",
  "Projetos com Python + IA desde o modulo 1",
  "Suporte da comunidade com +20.000 alunos",
  "Certificado reconhecido pelo mercado",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Python do zero com IA",
  description:
    "Curso pratico para aprender Python do zero e construir projetos reais com inteligencia artificial.",
  provider: {
    "@type": "Organization",
    name: "Asimov Academy",
    sameAs: "https://asimov.academy",
  },
  inLanguage: "pt-BR",
  educationalLevel: "Beginner",
};

export default function Home() {
  return (
    <>
      <main id="principal" tabIndex={-1} className="min-h-screen overflow-hidden">
      <section
        aria-labelledby="hero-title"
        className="relative isolate flex min-h-[100svh] items-center bg-[radial-gradient(circle_at_78%_18%,rgba(207,45,92,0.22),transparent_28rem),radial-gradient(circle_at_10%_16%,rgba(120,20,54,0.24),transparent_24rem),linear-gradient(180deg,#050706_0%,#12060b_100%)] px-7 py-8 sm:px-8 lg:px-12"
      >
        <div className="hero-grid absolute inset-0 -z-20 opacity-70" />
        <div className="absolute inset-x-0 top-0 -z-10 h-28 border-b border-white/10 bg-black/25 backdrop-blur-xl" />

        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 pt-28 sm:pt-8 lg:grid lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-14 lg:pt-10">
          <div className="max-w-3xl">
            <h1
              id="hero-title"
              className="max-w-4xl text-5xl leading-[0.98] text-balance text-white sm:text-6xl lg:text-[68px]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 600,
                letterSpacing: "-3px",
              }}
            >
              Aprenda Python do zero e construa projetos reais com IA
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-pretty text-[var(--ink-muted)] sm:text-xl">
              O curso mais pratico do Brasil para quem quer entrar em tecnologia
              sem enrolacao.
            </p>

            <div className="mt-9 flex flex-col gap-8 sm:flex-row sm:gap-3">
              <a
                href="#matricula"
                className="inline-flex min-h-16 w-full items-center justify-center rounded-[28px] border border-[#ffadc5] bg-[#cf2d5c] px-7 text-lg font-bold text-white shadow-[0_16px_0_#050706] transition hover:translate-y-1 hover:bg-[#e03a6d] hover:shadow-[0_10px_0_#050706] active:translate-y-3 active:shadow-[0_4px_0_#050706] focus-visible:outline-[#ffadc5] sm:w-auto sm:min-w-[330px] sm:px-8"
              >
                Quero comecar agora
              </a>
              <a
                href="#conteudo"
                className="inline-flex min-h-16 w-full items-center justify-center rounded-[28px] border border-white/28 bg-white/[0.04] px-7 text-lg font-bold text-white shadow-[0_16px_0_#050706] transition hover:translate-y-1 hover:border-[#ffadc5]/70 hover:bg-white/[0.1] hover:shadow-[0_10px_0_#050706] active:translate-y-3 active:shadow-[0_4px_0_#050706] focus-visible:outline-[#ffadc5] sm:w-auto sm:min-w-[330px] sm:px-8"
              >
                Ver o que vou aprender
              </a>
            </div>

            <ul className="mt-10 grid gap-3 text-sm text-white/86 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  tabIndex={0}
                  className="group flex min-h-24 items-start gap-4 rounded-lg border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.055),rgba(207,45,92,0.055))] px-5 py-5 shadow-[0_14px_44px_rgba(0,0,0,0.2)] backdrop-blur transition duration-200 hover:-translate-y-1 hover:border-[#ffadc5]/45 hover:bg-[linear-gradient(135deg,rgba(207,45,92,0.16),rgba(255,255,255,0.045))] hover:shadow-[0_22px_60px_rgba(0,0,0,0.34)] active:-translate-y-1 active:border-[#ffadc5]/55 active:bg-[linear-gradient(135deg,rgba(207,45,92,0.18),rgba(255,255,255,0.05))] active:shadow-[0_22px_60px_rgba(0,0,0,0.34)] focus-visible:-translate-y-1 focus-visible:border-[#ffadc5]/55 focus-visible:bg-[linear-gradient(135deg,rgba(207,45,92,0.18),rgba(255,255,255,0.05))]"
                >
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#cf2d5c] text-base font-black text-white shadow-[0_0_24px_rgba(207,45,92,0.28)] transition group-hover:scale-110 group-hover:shadow-[0_0_34px_rgba(207,45,92,0.48)] group-active:scale-110 group-active:shadow-[0_0_34px_rgba(207,45,92,0.48)] group-focus-visible:scale-110 group-focus-visible:shadow-[0_0_34px_rgba(207,45,92,0.48)]">
                    +
                  </span>
                  <span className="text-lg leading-7 text-white/82 transition group-hover:text-white group-active:text-white group-focus-visible:text-white">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <AnimatedCodePanel />
        </div>
      </section>

      <section
        id="conteudo"
        className="bg-[#f4fff7] px-5 py-10 text-[#07100b] sm:px-8 lg:px-12"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-7 border-t border-[#07100b]/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Uma primeira dobra feita para converter sem perder clareza.
            </h2>
          </div>
          <a
            id="matricula"
            href="https://asimov.academy"
            className="inline-flex min-h-16 w-full shrink-0 items-center justify-center rounded-[28px] border border-[#ffadc5] bg-[#cf2d5c] px-8 text-lg font-bold text-white shadow-[0_16px_0_#050706] transition hover:translate-y-1 hover:bg-[#e03a6d] hover:shadow-[0_10px_0_#050706] active:translate-y-3 active:shadow-[0_4px_0_#050706] focus-visible:outline-[#07100b] sm:w-auto sm:min-w-[330px]"
            style={{ color: "#ffffff" }}
          >
            Matricule-se na Asimov
          </a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      </main>
    </>
  );
}
