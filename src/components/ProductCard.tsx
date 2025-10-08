import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  onAddToCart: (product: { id: string; name: string; price: number }) => void;
}

export const ProductCard = ({ id, name, price, description, image, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elevated)] hover:scale-105">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-bold text-xl mb-2 text-foreground">{name}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            R$ {price.toFixed(2)}
          </span>
          <Button
            size="sm"
            variant="hero"
            onClick={() => onAddToCart({ id, name, price })}
            className="gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Adicionar
          </Button>
        </div>
      </div>
    </Card>
  );
};
