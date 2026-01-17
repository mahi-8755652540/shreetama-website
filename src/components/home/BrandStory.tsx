import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import aboutImage from '@/assets/about-craftsmanship.jpg';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={aboutImage}
                alt="Indian artisan crafting copper vessels"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-copper/10 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-copper font-medium text-sm tracking-widest uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-6">
              Rooted in Tradition,{' '}
              <span className="text-gradient-copper">Crafted for Today</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Shreetama is born from a deep reverence for India's ancient wellness traditions. 
                For thousands of years, our ancestors stored water in copper vessels, understanding 
                its profound health benefits long before modern science confirmed them.
              </p>
              <p>
                Today, we carry this legacy forward by partnering with skilled Indian artisans 
                who craft each piece with the same dedication and care. Every Shreetama product 
                is a bridge between timeless wisdom and contemporary living.
              </p>
            </div>
            <Button variant="copper" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
