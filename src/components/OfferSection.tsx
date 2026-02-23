import { useState, useEffect } from "react";
import { ShieldCheck, Truck, RotateCcw, Lock } from "lucide-react";

const OfferSection = () => {
  const [time, setTime] = useState({ h: 2, m: 0, s: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        if (s > 0) s--;else
        if (m > 0) {m--;s = 59;} else
        if (h > 0) {h--;m = 59;s = 59;}
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section id="oferta" className="bg-gradient-cta py-16 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-2">
          OFERTA ESPECIAL POR TEMPO LIMITADO
        </h2>
        <p className="text-primary-foreground/80 mb-6">Pagamento na entrega — Risco ZERO para você!</p>

        <div className="bg-background rounded-2xl p-8 shadow-2xl mb-8">
          <p className="text-muted-foreground text-sm line-through mb-1">De R$ 197,00</p>
          <p className="text-4xl font-black mb-1 text-secondary md:text-6xl">
            R$ <span className="text-gradient-primary">89,90</span>
          </p>
          <p className="text-muted-foreground text-sm mb-6">ou 12x de R$ 12,24</p>

          <div className="flex justify-center gap-3 mb-6">
            {[
            { label: "horas", value: pad(time.h) },
            { label: "min", value: pad(time.m) },
            { label: "seg", value: pad(time.s) }].
            map((t) =>
            <div key={t.label} className="bg-slate-dark text-slate-dark-foreground rounded-lg px-4 py-2 min-w-[60px]">
                <p className="text-2xl font-bold">{t.value}</p>
                <p className="text-[10px] uppercase tracking-wider">{t.label}</p>
              </div>
            )}
          </div>

          <a

            className="block bg-gradient-cta text-primary-foreground px-8 py-5 rounded-full text-xl font-black shadow-cta hover:opacity-95 transition-all animate-pulse-slow" href="https://entrega.logzz.com.br/pay/memxo8o0m/hbxto-joelheira-ortopedica---01-unidade">

            CONCLUIR COMPRA AGORA
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
          { icon: ShieldCheck, text: "Compra Protegida" },
          { icon: Truck, text: "Frete Grátis" },
          { icon: RotateCcw, text: "30 Dias de Garantia" },
          { icon: Lock, text: "100% Criptografado" }].
          map(({ icon: Icon, text }) =>
          <div key={text} className="flex flex-col items-center gap-1 text-primary-foreground/90 text-xs font-medium">
              <Icon className="w-5 h-5" />
              {text}
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default OfferSection;