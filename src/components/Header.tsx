import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export const Header = ({ cartItemCount, onCartClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Elety Solar Care
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#produtos" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Produtos
          </a>
          <a href="#sobre" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#contato" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="relative"
            onClick={onCartClick}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center font-bold">
                {cartItemCount}
              </span>
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background p-4 space-y-2">
          <a href="#produtos" className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
            Produtos
          </a>
          <a href="#sobre" className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#contato" className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </div>
      )}
    </header>
  );
};
