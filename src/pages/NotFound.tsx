import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-3xl font-bold text-foreground">Página não encontrada</h2>
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Button variant="hero" size="lg" className="gap-2" asChild>
          <a href="/">
            <Home className="w-5 h-5" />
            Voltar para Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
