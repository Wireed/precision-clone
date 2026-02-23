import { useState, useEffect } from "react";
import { ShoppingCart, Clock } from "lucide-react";

const TopBar = () => {
  const [viewers, setViewers] = useState(47);
  const [time, setTime] = useState({ h: 0, m: 14, s: 59 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else if (m > 0) { m--; s = 59; }
        else if (h > 0) { h--; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers((v) => v + Math.floor(Math.random() * 3) - 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="bg-slate-dark text-slate-dark-foreground py-2 px-4 text-sm">
      <div className="container mx-auto flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-danger animate-pulse" />
            <span className="font-semibold">{viewers}</span> vendo agora
          </span>
          <span className="hidden sm:flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            Expira em {pad(time.h)}:{pad(time.m)}:{pad(time.s)}
          </span>
        </div>
        <a href="#oferta" className="flex items-center gap-1.5 bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-xs font-bold hover:opacity-90 transition-opacity">
          <ShoppingCart className="w-3.5 h-3.5" />
          Fazer meu pedido
        </a>
      </div>
    </div>
  );
};

export default TopBar;
