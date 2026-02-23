import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5534999999999?text=Olá! Tenho interesse na Joelheira OrtoPro"
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
