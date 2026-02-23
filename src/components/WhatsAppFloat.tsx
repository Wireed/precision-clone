import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5537998272175?text=Quero%20agendar%20a%20Joelheira%20Ortop%C3%A9dica%20Premium%20e%20pagar%20s%C3%B3%20na%20entrega!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[hsl(142,70%,45%)] text-white px-5 py-3.5 rounded-full shadow-lg hover:scale-105 transition-transform group"
    >
      <div className="relative">
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
      </div>
      <span className="font-bold text-sm hidden sm:inline">Fale com um especialista</span>
    </a>
  );
};

export default WhatsAppFloat;
