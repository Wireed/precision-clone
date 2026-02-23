import { Check } from "lucide-react";
import techImage from "@/assets/technology.png";

const benefits = [
  "Compressão 360º Graduada",
  "Tecido Respirável e Antibacteriano",
  "Correias de Pressão Ajustáveis",
  "Máxima Elasticidade e Conforto",
];

const TechnologySection = () => {
  return (
    <section className="bg-emerald-light py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src={techImage}
              alt="Tecnologia 3D da joelheira"
              className="w-72 md:w-96 rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tecnologia de Tecelagem <span className="text-gradient-primary">3D Avançada</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Nossa joelheira utiliza um processo exclusivo de tecelagem tridimensional que se adapta perfeitamente à anatomia do seu joelho, proporcionando suporte e alívio imediato.
            </p>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
