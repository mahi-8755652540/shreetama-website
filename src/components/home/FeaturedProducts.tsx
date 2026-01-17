import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/products';

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-cream-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">
              Our <span className="text-gradient-copper">Collection</span>
            </h2>
            <p className="text-muted-foreground">
              Premium copper drinkware for your wellness journey.
            </p>
          </div>
          <Button variant="copperOutline" asChild>
            <Link to="/shop">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
