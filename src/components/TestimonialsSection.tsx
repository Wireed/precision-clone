import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  { name: "Jackie Goulart", img: "/testimonials/jackie.jpg" },
  { name: "Feedback WhatsApp", img: "/testimonials/feedback-whatsapp.jpg" },
  { name: "Rai Vasques", img: "/testimonials/rai.jpg" },
  { name: "Pol Agostinho", img: "/testimonials/pol.jpg" },
  { name: "Bia Belchior", img: "/testimonials/bia.jpg" },
  { name: "Grazi Peixoto", img: "/testimonials/grazi.jpg" },
  { name: "Jaqueline das Neves", img: "/testimonials/jaque.jpg" },
  { name: "Vi Almada", img: "/testimonials/viviane.jpg" },
];

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Mais de <span className="text-gradient-primary">15.000</span> pessoas ajudadas!
        </h2>
        <p className="text-muted-foreground mb-10">Veja o que nossos clientes dizem</p>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 px-2"
              >
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={t.img}
                    alt={`Depoimento de ${t.name}`}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === selectedIndex ? "bg-primary" : "bg-border"
              }`}
              aria-label={`Ir para depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
