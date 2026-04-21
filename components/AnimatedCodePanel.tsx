"use client";

import { useEffect, useMemo, useState } from "react";

const code = `from asimov import ProjetoIA
aluno = ProjetoIA(nome="voce")
aluno.construir("chatbot")
status: pronto para publicar`;

const modules = [
  { label: "M01", title: "Python do zero", progress: "100%", value: 100 },
  { label: "M02", title: "Automações reais", progress: "84%", value: 84 },
  { label: "M03", title: "Agentes com IA", progress: "62%", value: 62 },
];

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return reducedMotion;
}

function renderCodeLine(line: string) {
  if (line.startsWith("from ")) {
    const [keyword, rest] = line.split(" ", 2);
    return (
      <>
        <span className="text-[#ff7da2]">{keyword}</span>
        <span> {rest}</span>
      </>
    );
  }

  if (line.startsWith("aluno =")) {
    return (
      <>
        <span>{line.slice(0, 24)}</span>
        <span className="text-[#ffe18f]">{line.slice(24, 28)}</span>
        <span>{line.slice(28)}</span>
      </>
    );
  }

  if (line.startsWith("aluno.construir")) {
    return (
      <>
        <span>{line.slice(0, 17)}</span>
        <span className="text-[#9ddcff]">{line.slice(17, 26)}</span>
        <span>{line.slice(26)}</span>
      </>
    );
  }

  if (line.startsWith("status:")) {
    return <span className="text-[#ffadc5]">{line}</span>;
  }

  return line;
}

export function AnimatedCodePanel() {
  const reducedMotion = useReducedMotion();
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    if (reducedMotion) {
      setVisibleChars(code.length);
      return;
    }

    if (visibleChars >= code.length) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setVisibleChars((current) => current + 1);
    }, visibleChars < 18 ? 36 : 22);

    return () => window.clearTimeout(timeout);
  }, [reducedMotion, visibleChars]);

  const typedCode = useMemo(() => code.slice(0, visibleChars), [visibleChars]);
  const isComplete = visibleChars >= code.length;

  return (
    <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
      <div className="absolute -inset-5 -z-10 rounded-[2rem] border border-[#cf2d5c]/15 bg-[#cf2d5c]/[0.04] blur-sm" />

      <div className="overflow-hidden rounded-lg border border-white/12 bg-[var(--panel)] shadow-2xl shadow-black/50">
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-3">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#cf2d5c]" />
          </div>
          <div className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-white/65">
            projeto_ia.py
          </div>
        </div>

        <div className="relative grid gap-5 p-4 sm:p-6">
          <div
            aria-hidden="true"
            className="terminal-scan pointer-events-none absolute inset-y-0 left-0 w-1/2"
          />

          <div
            aria-label="Exemplo de projeto Python com IA"
            className="min-h-44 rounded-md border border-white/10 bg-black/30 p-4 font-mono text-sm leading-7 text-white/80 sm:min-h-48"
          >
            <pre aria-hidden="true" className="whitespace-pre-wrap">
              {typedCode.split("\n").map((line, index, lines) => (
                <span key={`${line}-${index}`}>
                  {renderCodeLine(line)}
                  {index < lines.length - 1 ? "\n" : null}
                </span>
              ))}
              {!isComplete ? (
                <span className="ml-1 inline-block h-5 w-2 translate-y-1 bg-[#ffadc5] terminal-cursor" />
              ) : null}
            </pre>
            <span className="sr-only">{code}</span>
          </div>

          <div
            className={`grid gap-3 transition duration-700 ${
              isComplete
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            aria-hidden={!isComplete}
          >
            {modules.map((module, index) => (
              <div
                key={module.label}
                className="rounded-md border border-white/10 bg-[var(--panel-strong)] p-4"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold tracking-[0.16em] text-[#ffadc5] uppercase">
                      {module.label}
                    </p>
                    <p className="mt-1 font-semibold text-white">
                      {module.title}
                    </p>
                  </div>
                  <p className="text-sm font-bold text-white/70">
                    {module.progress}
                  </p>
                </div>
                <div
                  aria-label={`${module.title}: ${module.progress} concluido`}
                  aria-valuemax={100}
                  aria-valuemin={0}
                  aria-valuenow={module.value}
                  className="mt-4 h-2 overflow-hidden rounded-full bg-white/8"
                  role="progressbar"
                >
                  <div
                    className="h-full rounded-full bg-[#cf2d5c] transition-[width] duration-1000 ease-out"
                    style={{ width: isComplete ? module.progress : 0 }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div
            className={`grid gap-3 rounded-md border border-[#cf2d5c]/30 bg-[#cf2d5c]/[0.1] p-4 transition duration-700 sm:grid-cols-3 ${
              isComplete
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            aria-hidden={!isComplete}
          >
            <div>
              <p className="text-2xl font-black text-white">40h+</p>
              <p className="text-xs text-white/60">aulas objetivas</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">IA</p>
              <p className="text-xs text-white/60">desde o inicio</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">20k+</p>
              <p className="text-xs text-white/60">alunos na comunidade</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
