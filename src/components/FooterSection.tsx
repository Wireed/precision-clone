const FooterSection = () => {
  return (
    <footer className="bg-slate-dark py-8 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <p className="text-slate-dark-foreground/60 text-sm">
          © {new Date().getFullYear()} OrtoPro. Todos os direitos reservados.
        </p>
        <p className="text-slate-dark-foreground/40 text-xs mt-1">
          CENTRO - UBERLÂNDIA, MG | CEP: 38400-000
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
