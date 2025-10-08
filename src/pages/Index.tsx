import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { CartDrawer } from "@/components/CartDrawer";
import { CheckCircle, Zap, Shield, Clock } from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/hero-solar-cleaning.jpg";
import productBasic from "@/assets/product-cleaning-basic.jpg";
import productPremium from "@/assets/product-cleaning-premium.jpg";
import productComplete from "@/assets/product-maintenance-complete.jpg";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const products = [
  {
    id: "1",
    name: "Limpeza Básica",
    price: 299.90,
    description: "Limpeza profissional dos painéis solares com equipamento especializado. Ideal para manutenção trimestral.",
    image: productBasic,
  },
  {
    id: "2",
    name: "Limpeza Premium",
    price: 499.90,
    description: "Limpeza completa com tratamento anti-sujeira e inspeção técnica dos painéis. Garantia estendida de 6 meses.",
    image: productPremium,
  },
  {
    id: "3",
    name: "Manutenção Completa",
    price: 899.90,
    description: "Pacote completo: limpeza, inspeção elétrica, verificação de conexões e relatório técnico detalhado.",
    image: productComplete,
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Mais Eficiência",
    description: "Aumente em até 30% a eficiência do seu sistema fotovoltaico",
  },
  {
    icon: Shield,
    title: "Proteção Total",
    description: "Proteja seu investimento com manutenção profissional",
  },
  {
    icon: Clock,
    title: "Economia de Tempo",
    description: "Serviço rápido e sem complicações, agendamento flexível",
  },
  {
    icon: CheckCircle,
    title: "Garantia de Qualidade",
    description: "Equipe certificada e materiais de primeira linha",
  },
];

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: { id: string; name: string; price: number }) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast.success("Produto adicionado ao carrinho!");
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.info("Produto removido do carrinho");
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemCount={totalItems} onCartClick={() => setIsCartOpen(true)} />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
        </div>
        <div className="relative z-10 container px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Maximize a Eficiência do Seu Sistema Solar
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Limpeza e manutenção profissional para painéis fotovoltaicos. Aumente sua geração de energia em até 30%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg" asChild>
              <a href="#produtos">Ver Serviços</a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg bg-background/10 backdrop-blur border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Por Que Escolher a Elety?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Escolha o pacote ideal para manter seu sistema solar operando com máxima eficiência
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Maximizar Sua Geração de Energia?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Agende agora sua manutenção e garanta o melhor desempenho do seu investimento em energia solar
          </p>
          <Button variant="hero" size="lg" className="text-lg bg-background text-primary hover:bg-background/90">
            Solicitar Orçamento
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="container px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Elety Solar Care. Todos os direitos reservados.</p>
          <p className="mt-2">Energia limpa, painéis limpos, futuro sustentável.</p>
        </div>
      </footer>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default Index;
