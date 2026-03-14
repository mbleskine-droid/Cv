import { Code2, User, Zap, Moon, Gamepad2 } from "lucide-react";

const highlights = [
  {
    icon: <Gamepad2 size={20} className="text-neon-violet" />,
    label: "Roblox Scripter",
    desc: "Scripts Luau, 100k+ vues",
  },
  {
    icon: <Code2 size={20} className="text-neon-blue" />,
    label: "Vibe Coder",
    desc: "L'IA comme outil, moi comme pilote",
  },
  {
    icon: <Moon size={20} className="text-neon-pink" />,
    label: "Reverse Eng.",
    desc: "Je démonte les APIs pour comprendre",
  },
  {
    icon: <Zap size={20} className="text-neon-green" />,
    label: "Autodidacte",
    desc: "14 ans, j'apprends en faisant",
  },
];

const techStack = [
  { name: "Luau", color: "border-neon-green/30 text-neon-green" },
  { name: "Python", color: "border-neon-blue/30 text-neon-blue" },
  { name: "Reverse Engineering", color: "border-neon-violet/30 text-neon-violet" },
  { name: "Roblox Studio", color: "border-neon-blue/30 text-neon-blue" },
  { name: "APIs", color: "border-neon-pink/30 text-neon-pink" },
  { name: "JavaScript (un peu)", color: "border-yellow-400/30 text-yellow-400" },
  { name: "HTML / CSS (un peu)", color: "border-cyan-400/30 text-cyan-400" },
];

export function AboutMe() {
  return (
    <section id="about" className="relative py-28 px-6">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-violet/5 rounded-full blur-[200px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[6px] text-neon-violet/70 font-mono mb-3">
            À propos
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            Qui <span className="text-gradient">suis-je</span> ?
          </h2>
          <div className="neon-line w-24 mx-auto mt-4" />
        </div>

        {/* Bio card */}
        <div className="glass-card rounded-2xl p-8 sm:p-10 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-neon-violet/5 rounded-full blur-[80px]" />

          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-gradient-to-br from-dark-700 to-dark-800 border-2 border-neon-violet/20 animate-border-glow flex items-center justify-center overflow-hidden relative">
                <User size={64} className="text-white/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-neon-violet/10 to-transparent" />
                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-neon-green animate-pulse" />
                </div>
              </div>
              {/* Nom sous l'avatar */}
              <div className="mt-3 text-center">
                <p className="text-white/80 font-bold text-sm">Misha</p>
                <p className="text-white/40 text-xs font-mono">Zenith__</p>
                <p className="text-white/15 text-[10px] font-mono">ex voxxar20</p>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-white/60 leading-relaxed mb-4 text-sm sm:text-base">
                Je m'appelle{" "}
                <span className="text-white font-semibold">Misha ________</span>,
                j'ai 14 ans et je suis autodidacte. J'ai commencé par scripter en{" "}
                <span className="text-neon-blue font-semibold">
                  Luau sur Roblox
                </span>{" "}
                sous le pseudo <span className="text-neon-violet font-medium font-mono">voxxar20</span>,
                où mes scripts ont cumulé{" "}
                <span className="text-neon-green font-semibold">
                  ~100k vues officielles
                </span>{" "}
                sur RScripts (plus si on compte les copies).
              </p>
              <p className="text-white/40 leading-relaxed text-sm mb-4">
                Aujourd'hui sous le nom de <span className="text-neon-blue font-medium font-mono">Zenith__</span>,
                je travaille surtout sur le <span className="text-neon-violet font-medium">reverse engineering d'APIs</span> et l'IA avec Hugging Face.
                Je vibe code — je ne code pas seul de zéro, j'utilise les bons outils, les bonnes AIs, et je persévère jusqu'à trouver une solution qui marche.
              </p>
              <p className="text-white/30 leading-relaxed text-sm mb-6">
                Pas de formation, pas de diplôme. Juste de la curiosité, beaucoup d'essais-erreurs, et des projets concrets qui tournent.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {["🇫🇷 France", "14 ans", "Roblox Scripter", "Vibe Coder", "Autodidacte"].map(
                  (tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/8 text-white/40 font-mono"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {highlights.map((v, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-5 text-center hover-neon cursor-default transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-white/[0.03] flex items-center justify-center mx-auto mb-3">
                {v.icon}
              </div>
              <p className="text-white/80 font-semibold text-sm mb-1">
                {v.label}
              </p>
              <p className="text-white/30 text-[11px]">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Code2 size={16} className="text-neon-blue" />
            <span className="text-sm text-white/40">Technologies</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t, i) => (
              <div
                key={i}
                className={`px-4 py-2.5 rounded-xl border bg-white/[0.02] ${t.color} hover:bg-white/[0.05] transition-all duration-300 cursor-default`}
              >
                <span className="text-xs font-medium">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
