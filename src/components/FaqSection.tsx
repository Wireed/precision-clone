import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShieldCheck, Truck, RotateCcw, Lock } from "lucide-react";

const guarantees = [
  { icon: ShieldCheck, title: "Você só paga quando receber", desc: "Pagamento na entrega via PIX, cartão ou dinheiro." },
  { icon: Truck, title: "Envio rápido e rastreável", desc: "Enviamos em até 24h com código de rastreio." },
  { icon: RotateCcw, title: "30 dias de garantia", desc: "Garantia contra defeitos de fabricação." },
  { icon: Lock, title: "Compra protegida", desc: "Seus dados 100% seguros e criptografados." },
];

const faqs = [
  { q: "Serve no meu joelho?", a: "Sim! Nossa joelheira possui tamanho universal com correias ajustáveis que se adaptam a qualquer tamanho de joelho, tanto masculino quanto feminino." },
  { q: "Quanto tempo demora a entrega?", a: "O prazo de entrega varia de 5 a 12 dias úteis, dependendo da sua região. Você receberá um código de rastreio para acompanhar." },
  { q: "Como funciona o pagamento na entrega?", a: "Você faz o pedido pelo site sem pagar nada. Quando o produto chegar na sua casa, você paga ao entregador via PIX, cartão ou dinheiro." },
  { q: "Posso lavar o produto?", a: "Sim! Recomendamos lavar à mão com água fria e sabão neutro. Não utilizar máquina de lavar ou secadora." },
  { q: "Posso usar por baixo da calça?", a: "Sim! O tecido é fino e confortável, permitindo o uso discreto por baixo de qualquer roupa." },
  { q: "E se o produto vier com defeito?", a: "Caso receba o produto com qualquer defeito, entre em contato conosco e faremos a troca ou reembolso sem custo adicional." },
];

const FaqSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {guarantees.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-muted rounded-xl p-5 text-center">
              <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
              <h4 className="font-bold text-sm text-foreground mb-1">{title}</h4>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-foreground text-center mb-8">
          Perguntas Frequentes
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-5">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
