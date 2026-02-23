import { Shield, Truck, Star } from "lucide-react";
import heroProduct from "@/assets/hero-product.png";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-1 bg-highlight text-highlight-foreground px-3 py-1 rounded-full text-xs font-semibold mb-4">
              <Star className="w-3.5 h-3.5 fill-current" />
              MAIS VENDIDO DO BRASIL
            </div>
            <h1 className="text-3xl md:text-5xl font-black leading-tight text-foreground mb-4">
              Alívio imediato para o joelho —{" "}
              <span className="text-gradient-primary">PAGUE APENAS QUANDO RECEBER EM CASA!</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              Tecnologia ortopédica avançada que proporciona suporte, compressão e alívio das dores no joelho. Sem risco para você.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a
                href="#oferta"
                className="bg-gradient-cta text-primary-foreground px-8 py-4 rounded-full text-lg font-bold shadow-cta hover:opacity-95 transition-all text-center animate-pulse-slow"
              >
                QUERO ALÍVIO IMEDIATO
              </a>
              <a
                href="#oferta"
                className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-primary hover:text-primary-foreground transition-all text-center"
              >
                Quero pagar na entrega
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-primary" /> Compra 100% Segura
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-primary" /> Frete Grátis
              </span>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <img
                src={heroProduct}
                alt="Joelheira Ortopédica OrtoPro"
                className="w-72 md:w-96 drop-shadow-2xl animate-bounce-gentle"
              />
              <div className="absolute -bottom-2 -right-2 bg-danger text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                Restam apenas 23 unidades!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
