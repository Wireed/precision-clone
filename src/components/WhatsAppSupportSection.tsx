import { MessageCircle, Clock, ShieldCheck, UserCheck } from "lucide-react";

const WhatsAppSupportSection = () => {
  return (
    <section className="bg-[hsl(142,70%,45%)] py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-background rounded-2xl p-8 md:p-10 shadow-xl flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-[hsl(142,70%,92%)] text-[hsl(142,70%,30%)] px-3 py-1 rounded-full text-xs font-bold mb-4">
              <span className="w-2 h-2 rounded-full bg-[hsl(142,70%,45%)] animate-pulse inline-block" />
              ATENDIMENTO ONLINE AGORA
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-3">
              Tire suas dúvidas pelo <span className="text-[hsl(142,70%,40%)]">WhatsApp</span>
            </h2>
            <p className="text-muted-foreground mb-5">
              Nossa equipe de especialistas está pronta para te atender. Converse agora e receba orientação personalizada sobre a joelheira ideal para você.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                { icon: Clock, text: "Resposta em até 2 min" },
                { icon: UserCheck, text: "Atendimento humano" },
                { icon: ShieldCheck, text: "Sem compromisso" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-foreground">
                  <Icon className="w-4 h-4 text-[hsl(142,70%,40%)]" />
                  <span className="font-medium">{text}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5534999999999?text=Olá! Tenho interesse na Joelheira OrtoPro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[hsl(142,70%,45%)] text-white px-8 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-all shadow-cta"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              Conversar no WhatsApp
            </a>
          </div>

          <div className="flex-shrink-0 hidden md:flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full bg-[hsl(142,70%,92%)] flex items-center justify-center">
              <MessageCircle className="w-10 h-10 text-[hsl(142,70%,40%)]" />
            </div>
            <div className="bg-muted rounded-xl p-3 max-w-[200px]">
              <p className="text-xs text-muted-foreground italic">
                "Olá! 👋 Sou a Ana da equipe OrtoPro. Como posso te ajudar hoje?"
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[hsl(142,70%,45%)] rounded-full animate-pulse" />
              <span className="text-xs text-muted-foreground font-medium">3 atendentes online</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSupportSection;
