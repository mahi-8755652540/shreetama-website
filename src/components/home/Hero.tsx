import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bottle.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-copper/10 text-copper px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Droplets className="w-4 h-4" />
              <span>Ancient Wisdom, Modern Wellness</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              Pure Copper.{' '}
              <span className="text-gradient-copper">Pure Wellness.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Experience the ancient Ayurvedic tradition of drinking water stored in pure copper vessels. 
              Handcrafted with love, designed for your health.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" asChild>
                <Link to="/shop">
                  Shop Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" asChild>
                <Link to="/benefits">
                  Explore Wellness
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-xl">🇮🇳</span>
                <span>Made in India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🍃</span>
                <span>100% Pure Copper</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">♻️</span>
                <span>Eco-Friendly</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Premium Shreetama Copper Water Bottle"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-background shadow-elevated rounded-xl p-4 md:p-6">
              <p className="text-xs text-muted-foreground mb-1">Starting from</p>
              <p className="text-2xl md:text-3xl font-serif font-bold text-copper">₹999</p>
              <p className="text-xs text-muted-foreground">Free Shipping</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
