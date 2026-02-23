import { Zap } from "lucide-react";

const problems = [
  { title: "Artrose & Artrite", desc: "Desgaste das articulações que causa dor e rigidez constantes." },
  { title: "Tendinite", desc: "Inflamação dos tendões que limita movimentos simples do dia a dia." },
  { title: "Lesão no Menisco", desc: "Danos na cartilagem que geram instabilidade e dor aguda." },
  { title: "Inchaço Crônico", desc: "Acúmulo de líquido que causa desconforto e dificuldade ao caminhar." },
];

const ProblemsSection = () => {
  return (
    <section className="bg-slate-dark py-16 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-dark-foreground mb-3">
          Você sofre com algum desses problemas?
        </h2>
        <p className="text-slate-dark-foreground/60 mb-10 max-w-2xl mx-auto">
          Milhares de brasileiros convivem com dores no joelho que limitam sua qualidade de vida. Você não precisa mais sofrer.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-slate-dark-foreground/5 border border-slate-dark-foreground/10 rounded-xl p-6 text-left hover:border-danger/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-danger/20 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-danger" />
              </div>
              <h3 className="text-lg font-bold text-slate-dark-foreground mb-2">{p.title}</h3>
              <p className="text-slate-dark-foreground/60 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
