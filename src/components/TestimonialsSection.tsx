import { Star } from "lucide-react";

const testimonials = [
  { name: "Maria S.", text: "Incrível! Em poucos dias já senti uma melhora enorme na dor do meu joelho. Recomendo demais!", stars: 5 },
  { name: "João P.", text: "Tinha medo de comprar pela internet, mas o pagamento na entrega me deu segurança. Produto de qualidade!", stars: 5 },
  { name: "Ana L.", text: "Uso diariamente para caminhar e a diferença é absurda. Me sinto 10 anos mais jovem!", stars: 5 },
  { name: "Carlos M.", text: "Depois da cirurgia no menisco, essa joelheira foi essencial na minha recuperação. Excelente!", stars: 5 },
  { name: "Fernanda R.", text: "Comprei para minha mãe que sofre de artrose. Ela amou e já pediu outra para o outro joelho!", stars: 5 },
  { name: "Roberto A.", text: "Frete rápido, produto bem embalado e a qualidade é surpreendente pelo preço. Nota 10!", stars: 4 },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Mais de <span className="text-gradient-primary">15.000</span> pessoas ajudadas!
        </h2>
        <p className="text-muted-foreground mb-10">Veja o que nossos clientes dizem</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 text-left hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${j < t.stars ? "text-amber-400 fill-amber-400" : "text-border"}`}
                  />
                ))}
              </div>
              <p className="text-foreground text-sm mb-4">"{t.text}"</p>
              <p className="text-muted-foreground text-xs font-semibold">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
