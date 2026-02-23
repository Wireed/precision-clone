import { ShieldAlert } from "lucide-react";

const HighlightBox = () => {
  return (
    <section className="py-12 px-4 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-highlight border-2 border-highlight-foreground/20 rounded-2xl p-8 text-center">
          <ShieldAlert className="w-10 h-10 text-highlight-foreground mx-auto mb-3" />
          <h3 className="text-xl md:text-2xl font-bold text-highlight-foreground mb-2">
            MEDO DE COMPRAR NA INTERNET?
          </h3>
          <p className="text-highlight-foreground/80 max-w-lg mx-auto">Com nosso sistema de pagamento na entrega, você só paga quando o produto chegar na sua mão. Risco zero! Entre em contato no WhatsApp e tiraremos todas as suas dúvidas! Sem cartão de crédito, sem surpresas.
            <strong>pagamento na entrega</strong>, você só paga quando o produto chegar na sua mão. 
            Risco zero! Sem cartão de crédito, sem surpresas.
          </p>
        </div>
      </div>
    </section>);

};

export default HighlightBox;